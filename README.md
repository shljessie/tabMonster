# Tab Monster
<img width="260" alt="Screen Shot 2023-05-01 at 8 53 44 PM" src="https://user-images.githubusercontent.com/59305253/235506402-e9d6444f-347b-4924-95ce-4f1d0774f8ce.png">



https://user-images.githubusercontent.com/59305253/236127346-1e6451a6-672c-45f5-afe8-16fe54d355ef.mp4


# Tab Monster: Chrome Extension to Manage your Tabs

What do you do when you have too many tabs open? 
Struggling to find the right tab while doing many tasks?


## How to Use Tab Monster

1. Download the code from this repo! You can save it as a folder to your computer.
2. Head to Manage Extensions
<img width="335" alt="Screen Shot 2023-05-04 at 7 53 46 AM" src="https://user-images.githubusercontent.com/59305253/236127440-9d04a1dd-8763-4937-a31e-4e9f31638fd9.png">

3. Turn on Developer Mode on the top left
<img width="1433" alt="Screen Shot 2023-05-04 at 7 54 30 AM" src="https://user-images.githubusercontent.com/59305253/236127477-f47bdfe3-0d34-49d3-bb6a-55dd16a41e13.png">

4. Click on Load Unpacked and load the Tab Monster Folder to your Computer!
<img width="1183" alt="Screen Shot 2023-05-04 at 7 54 48 AM" src="https://user-images.githubusercontent.com/59305253/236127513-0ecfc898-6075-4432-943b-1e51d0487ae2.png">


<em>Coming Soon! Tab Monster on Chrome Webstore</em>
Use the Tab Monster extension available for free on Chrome as an extension.
Just simply add the extension to your browser! You can organize your tabs with the Tab Monster, create tab group names, and reorder tabs according to importance.

## Available Operations
*Right click tab group to get customizable operations*
<img width="251" alt="Screen Shot 2023-05-04 at 7 56 19 AM" src="https://user-images.githubusercontent.com/59305253/236127418-2f7a5570-ffab-4290-aff6-b23839b67523.png">


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



