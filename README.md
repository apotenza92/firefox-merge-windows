![Merge Windows Icon](icon_small.svg)

# Merge Windows

A simple Firefox extension that allows you to merge all open browser windows into a single window with one click.

## ✨ Features

- **One-Click Merging**: Merge all open Firefox windows into the currently active window
- **Context Menu Integration**: Right-click on any tab or page to access the merge function
- **Toolbar Button**: Quick access via the extension's toolbar button
- **Smart Window Detection**: Only shows the merge option when you have multiple windows open
- **Incognito Support**: Handles regular and private browsing windows separately
- **Pin Preservation**: Maintains pinned tab status after merging

## 🚀 Installation

### From Firefox Add-ons Store
*Coming soon - the extension will be available on the official Firefox Add-ons store.*

## 📖 How to Use

### Method 1: Toolbar Button
1. Click the Merge Windows icon in your Firefox toolbar
2. All open windows will be merged into the current window

### Method 2: Context Menu
1. Right-click on any tab or webpage
2. Select "Merge all windows" from the context menu
3. All windows will be combined into the current one

### Behavior Notes
- The merge operation moves all tabs from other windows into your current window
- Pinned tabs will remain pinned after the merge
- The context menu option only appears when you have multiple windows open
- Regular and private browsing windows are handled separately (private windows only merge with other private windows)

## 🔧 Compatibility

### Supported Browsers
- **Firefox**: Version 109 and later (Manifest V3 support required)

## 🛠️ Technical Details

### Permissions Required
- `tabs`: To access and move tabs between windows
- `contextMenus`: To add the right-click menu option