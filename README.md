<img src="icons/icon-png.png" alt="Merge Windows Icon" width="64">

# Merge Windows

A simple Firefox extension that allows you to merge all other browser windows into the current window by clicking the plugin button or using the right click menu. Includes preference for [Zen Browser](https://zen-browser.app/) compatibility.

## Installation

### From Firefox Add-ons Store
[Firefox Add-ons Store Link](https://addons.mozilla.org/en-US/firefox/addon/simple-merge-windows/)

## Features

- **One-Click Merging**: Merge all open Firefox windows into the currently active window.
- **Context Menu Integration**: Right-click on any page to access the merge function if multiple windows exist.
- **Incognito Support**: Handles regular and private browsing windows separately.
- **Configurable Pinned Tab Handling**: Multiple options for how pinned tabs are handled during merging.
  - **Zen**: Pinned handling option designed specifically for [Zen Browser](https://zen-browser.app/) users so there is no intereference with pinned tabs.

## Configuration

Access preferences by:
1. Right-clicking the extension icon and selecting "Manage Extension" → Preferences
2. Going to Firefox Add-ons Manager → Merge Windows → Preferences
3. Or typing `about:addons` in the address bar → Extensions → Merge Windows → Preferences

### Permissions Required
- `tabs`: To access and move tabs between windows
- `contextMenus`: To add the right-click menu option
- `storage`: To save your pinned tab behavior preferences
