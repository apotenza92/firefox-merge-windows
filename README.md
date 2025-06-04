<img src="icons/icon-png.png" alt="Merge Windows Icon" width="64">

# Merge Windows

A simple Firefox extension that allows you to merge all other browser windows into the current window by clicking the plugin button or using the right click menu. Includes preference for Zen compatibility.

## ✨ Features

- **One-Click Merging**: Merge all open Firefox windows into the currently active window
- **Context Menu Integration**: Right-click on any tab or page to access the merge function
- **Toolbar Button**: Quick access via the extension's toolbar button
- **Smart Window Detection**: Only shows the merge option when you have multiple windows open
- **Incognito Support**: Handles regular and private browsing windows separately
- **Configurable Pinned Tab Handling**: Multiple options for how pinned tabs are handled during merging
- **Zen Browser Optimization**: Special mode designed specifically for Zen browser users

## 🚀 Installation

### From Firefox Add-ons Store
*Coming soon - the extension will be available on the official Firefox Add-ons store.*

## ⚙️ Configuration

The extension includes customizable settings for pinned tab behavior. Access settings by:
1. Right-clicking the extension icon and selecting "Manage Extension" → Preferences
2. Going to Firefox Add-ons Manager → Merge Windows → Preferences
3. Or typing `about:addons` in the address bar → Extensions → Merge Windows → Preferences

### Pinned Tab Handling Options

Choose how pinned tabs should be handled when merging windows:

- **Preserve pinned tabs** (Default): Keeps pinned tabs pinned when merging windows
- **Unpin pinned tabs**: Unpins pinned tabs from other windows before merging them
- **Ignore pinned tabs**: Skips pinned tabs entirely during the merge process - recommended for Zen browser users

### Zen Browser Support

The extension includes a specialized mode for [Zen Browser](https://zen-browser.app/) users. Zen Browser's unique tab management system works best with the "Ignore pinned tabs" option, which:
- Leaves pinned tabs in their original windows untouched
- Only merges regular (non-pinned) tabs into the target window
- Prevents potential conflicts with Zen's tab grouping features

## 📖 How to Use

### Method 1: Toolbar Button
1. Click the Merge Windows icon in your Firefox toolbar
2. All open windows will be merged into the current window

### Method 2: Context Menu
1. Right-click on any tab or webpage
2. Select "Merge all windows" from the context menu
3. All windows will be combined into the current one

### Behavior Notes
- The merge operation moves tabs from other windows into your current window according to your pinned tab settings
- The context menu option only appears when you have multiple windows open
- Regular and private browsing windows are handled separately (private windows only merge with other private windows)
- Your pinned tab behavior preference is automatically saved and applied to all future merges

## 🔧 Compatibility

### Supported Browsers
- **Firefox**: Version 109 and later (Manifest V3 support required)
- **Zen Browser**: Supported with pinned tab preference

## 🛠️ Technical Details

### Permissions Required
- `tabs`: To access and move tabs between windows
- `contextMenus`: To add the right-click menu option
- `storage`: To save your pinned tab behavior preferences