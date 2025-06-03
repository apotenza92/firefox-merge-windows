<svg width="25%" height="25%" viewBox="0 0 96 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1.33456,0,0,1.33456,7.03356,6.40845)">
        <path d="M62.903,21.874L62.903,58.404C62.903,61.559 60.342,64.121 57.186,64.121L20.656,64.121C17.501,64.121 14.94,61.559 14.94,58.404L14.94,21.874C14.94,18.719 17.501,16.158 20.656,16.158L57.186,16.158C60.342,16.158 62.903,18.719 62.903,21.874Z" style="fill:rgb(91,91,101);fill-opacity:0;stroke:rgb(91,91,101);stroke-width:5.25px;"/>
    </g>
    <g transform="matrix(0.96006,-0.252634,-0.252634,0.96006,22.6608,23.6608)">
        <path d="M9.254,9.254L62.42,62.42" style="fill:none;stroke:rgb(91,91,101);stroke-width:5.65px;"/>
    </g>
    <g transform="matrix(1.19134,0,0,1,2.93958,15.8413)">
        <path d="M57.129,34.171L57.129,56.159L38.643,56.159" style="fill:rgb(91,91,101);fill-opacity:0;stroke:rgb(91,91,101);stroke-width:6.36px;"/>
    </g>
    <g transform="matrix(1.33456,0,0,1.04925,-14.9198,-10.3039)">
        <path d="M14.94,58.404L14.94,21.874" style="fill:none;stroke:rgb(91,91,101);stroke-width:5.83px;"/>
    </g>
    <g transform="matrix(1.33456,0,0,1.33456,-14.9198,-16.5449)">
        <path d="M14.94,21.874C14.94,20.297 15.58,18.867 16.615,17.833C17.65,16.798 19.079,16.158 20.656,16.158" style="fill:rgb(91,91,101);fill-opacity:0;stroke:rgb(91,91,101);stroke-width:5.25px;"/>
    </g>
    <g transform="matrix(1.04925,0,0,1.33456,-9.02624,-16.5449)">
        <path d="M20.656,16.158L57.186,16.158" style="fill:none;stroke:rgb(91,91,101);stroke-width:5.83px;"/>
    </g>
</svg>

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