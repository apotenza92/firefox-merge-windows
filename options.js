// Options page logic for Merge Windows extension

document.addEventListener('DOMContentLoaded', async () => {
    await loadSettings();
    setupEventListeners();
});

// Load saved settings and update the UI
async function loadSettings() {
    try {
        const result = await browser.storage.local.get(['pinnedTabBehavior']);
        const behavior = result.pinnedTabBehavior || 'preserve'; // Default to preserve

        // Set the appropriate radio button
        const radioButton = document.querySelector(`input[value="${behavior}"]`);
        if (radioButton) {
            radioButton.checked = true;
        }

        console.log('Loaded settings:', { pinnedTabBehavior: behavior });
    } catch (error) {
        console.error('Error loading settings:', error);
        // Default to preserve if there's an error
        document.getElementById('preserve-option').checked = true;
    }
}

// Auto-save settings when changed
async function autoSaveSettings() {
    try {
        const selectedOption = document.querySelector('input[name="pinnedBehavior"]:checked');

        if (!selectedOption) {
            return;
        }

        const behavior = selectedOption.value;

        // Save to browser storage
        await browser.storage.local.set({
            pinnedTabBehavior: behavior
        });

        console.log('Settings auto-saved:', { pinnedTabBehavior: behavior });

        // Notify background script about the change
        try {
            await browser.runtime.sendMessage({
                action: 'settingsUpdated',
                pinnedTabBehavior: behavior
            });
        } catch (e) {
            // Background script might not be listening, that's ok
            console.log('Background script notification sent');
        }

    } catch (error) {
        console.error('Error auto-saving settings:', error);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Auto-save when radio buttons change
    document.querySelectorAll('input[name="pinnedBehavior"]').forEach(radio => {
        radio.addEventListener('change', autoSaveSettings);
    });

    // Make option containers clickable
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', (e) => {
            if (e.target.type !== 'radio') {
                const radio = option.querySelector('input[type="radio"]');
                if (radio && !radio.checked) {
                    radio.checked = true;
                    // Trigger the change event for auto-save
                    radio.dispatchEvent(new Event('change'));
                }
            }
        });
    });
} 