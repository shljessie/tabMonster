# Tab Monster
<img width="260" alt="Screen Shot 2023-05-01 at 8 53 44 PM" src="https://user-images.githubusercontent.com/59305253/235506402-e9d6444f-347b-4924-95ce-4f1d0774f8ce.png">


# Tab Monster: Chrome Extension to Manage your Tabs

What do you do when you have too many tabs open? 
Struggling to find the right tab while doing many tasks?

<<<<<<< HEAD
## How to Use Tab Monster

1. Download the code from this repo! You can save it as a folder to your computer.
2. Head to Manage Extensions
3. Turn on Developer Mode on the top left
4. Click on Load Unpacked and load the Tab Monster Folder to your Computer!
=======
https://user-images.githubusercontent.com/59305253/235506347-bde1d575-85d3-4c3f-b52c-801abf3b207a.mp4
>>>>>>> e1985d82c74e4bc241e15dd8535b58bc48cbd4b9


<em>Coming Soon! Tab Monster on Chrome Webstore</em>
Use the Tab Monster extension available for free on Chrome as an extension.
Just simply add the extension to your browser! You can organize your tabs with the Tab Monster, create tab group names, and reorder tabs according to importance.

## Available Operations
*Right click tab group to get customizable operations*

### 1. Tab Operations
* Reorder Tabs
* Ungroup Tabs
* Remove Tabs from Tab Group
* Close Tabs
* Move Tab Group to new Windows

### 2. Customize Tab Group
* Rename Tabs
* Color Tabs 
* Condense Tabs to Organize 

## Note on Privacy in Chrome Extensions

This project was started as an experiment into understanding privacy applications with Google Chrome's API. Let's explore how you can use Chrome Extensions to get info on your Browser!

### chrome.tabs.query()
The chrome.tabs.query allows users to get info on
* url
* pendingUrl
* title
* favIconUrl

### chrome.scripting.insertCSS()
To use this API you must have the "scripting" permission and permission for the target's URL, either explicitly as a host permission or using the activeTab permission.

You can define scripting permission by specifying "scripting" in manifest.json
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions

It is possible to modify the CSS of a website using 
https://www.lateral.io/resources-blog/create-chrome-extension-modify-websites-html-css 

Inserts a CSS stylesheet into a target context
The css can be removed by calling scripting.removeCSS()


### chrome.cookies
Chrome.cookies can get information on a cookie and perform additional actions on that cookie.
https://developer.chrome.com/docs/extensions/reference/cookies/

<em>If you want to collaborate on this project, Contact me at jessielee.shl@gmail.com</em>



