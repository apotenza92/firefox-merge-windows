class windowManager {
    constructor() {
        browser.contextMenus.onClicked.addListener(() => {
            this.merge();
        });

        browser.action.onClicked.addListener(() => {
            this.merge();
        });

        browser.windows.onFocusChanged.addListener(() => {
            this.calculateContextMenu();
        });

        // Listen for settings updates
        browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.action === 'settingsUpdated') {
                this.calculateContextMenu(); // Update context menu when settings change
            }
        });

        this.calculateContextMenu();
    }

    // Get the user's pinned tab behavior preference
    async getPinnedTabBehavior() {
        try {
            const result = await browser.storage.local.get(['pinnedTabBehavior']);
            const behavior = result.pinnedTabBehavior || 'preserve'; // Default to 'preserve'
            return behavior;
        } catch (error) {
            console.error('Error reading pinned tab behavior setting:', error);
            console.log('DEBUG: Defaulting to preserve due to error');
            return 'preserve'; // Default to preserve behavior on error
        }
    }

    async getCurrentWindows() {
        const currentWindow = await browser.windows.getCurrent();
        const windows = await browser.windows.getAll({});
        return windows.filter((windowObj) => {
            return windowObj.incognito === currentWindow.incognito;
        });
    }

    async calculateContextMenu() {
        const windows = await this.getCurrentWindows();

        const id = "merge-windows";
        browser.contextMenus.remove(id);

        if (windows.length > 1) {
            browser.contextMenus.create({
                id,
                title: "Merge Windows",
                contexts: ["all", "tab"]
            });
        }
    }

    async merge() {
        const windowMap = new Map();
        const windows = await this.getCurrentWindows();
        const currentWindow = await browser.windows.getCurrent();
        const pinnedBehavior = await this.getPinnedTabBehavior();
        let repin = [];
        let tabsToRepin = []; // Track which tabs need to be re-pinned for preserve behavior

        const promises = windows.map(async function (windowObj) {
            const tabs = await browser.tabs.query({ windowId: windowObj.id });

            if (pinnedBehavior === 'ignore') {
                // For 'ignore' behavior, only include non-pinned tabs
                const nonPinnedTabs = tabs.filter(tab => !tab.pinned);
                windowMap.set(windowObj, nonPinnedTabs.map(tab => tab.id));
            } else if (pinnedBehavior === 'preserve') {
                // For 'preserve' behavior, include all tabs and track pinned ones for re-pinning
                windowMap.set(windowObj, tabs.map(tab => tab.id));

                // Track pinned tabs from other windows so we can re-pin them after moving
                if (windowObj.id !== currentWindow.id) {
                    const pinnedTabs = tabs.filter(tab => tab.pinned);
                    const pinnedTabIds = pinnedTabs.map(tab => tab.id);
                    tabsToRepin.push(...pinnedTabIds);

                    // Unpin the pinned tabs before moving (browsers may restrict moving pinned tabs)
                    for (const tab of pinnedTabs) {
                        await browser.tabs.update(tab.id, { pinned: false });
                    }
                }
            } else if (pinnedBehavior === 'unpin') {
                // For 'unpin' behavior, include all tabs but unpin those from other windows
                windowMap.set(windowObj, tabs.map((tab) => {
                    // If behavior is 'unpin', unpin pinned tabs from OTHER windows only
                    // Keep pinned tabs in the current window pinned
                    if (tab.pinned && windowObj.id !== currentWindow.id) {
                        repin.push(browser.tabs.update(tab.id, { pinned: false }));
                    }
                    return tab.id;
                }));
            }
        });

        await Promise.all(promises);
        const repinTabs = await Promise.all(repin);

        // Process each window
        windows.forEach((windowObj) => {
            if (windowObj.id === currentWindow.id) {
                return;
            }

            const tabIds = windowMap.get(windowObj);

            // Move the selected tabs
            if (tabIds.length > 0) {
                browser.tabs.move(tabIds, { index: -1, windowId: currentWindow.id }).then(async (movedTabs) => {
                    // Check if the tabs are actually in the destination window
                    setTimeout(async () => {
                        try {
                            const currentWindowTabs = await browser.tabs.query({ windowId: currentWindow.id });
                            const sourceWindowTabs = await browser.tabs.query({ windowId: windowObj.id });

                            // Check if our moved tabs are actually in the destination
                            const movedTabsInDestination = currentWindowTabs.filter(tab => tabIds.includes(tab.id));
                            movedTabsInDestination.forEach(tab => {
                            });
                        } catch (error) {
                            console.error(`DEBUG: Error checking tab status after move:`, error);
                        }
                    }, 50);
                }).catch(error => {
                    console.error(`DEBUG: Error moving tabs from window ${windowObj.id}:`, error);
                });
            }

            // For 'ignore' behavior, we still need to close the source window even if it only had pinned tabs
            // The window will close automatically when all its moveable tabs are moved
            // If there are only pinned tabs left, we need to close it manually
            if (pinnedBehavior === 'ignore' && tabIds.length === 0) {
                // This window only had pinned tabs, close it
                browser.windows.remove(windowObj.id);
            }
        });

        // For 'preserve' behavior, re-pin the tabs that were originally pinned
        if (pinnedBehavior === 'preserve' && tabsToRepin.length > 0) {
            setTimeout(async () => {
                for (const tabId of tabsToRepin) {
                    try {
                        await browser.tabs.update(tabId, { pinned: true });
                    } catch (error) {
                        console.error(`DEBUG: PRESERVE: Error re-pinning tab ${tabId}:`, error);
                    }
                }
            }, 200); // Increased timeout to 200ms
        }

        this.calculateContextMenu();
    }
};

new windowManager();