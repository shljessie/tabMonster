// the chrome tabs query will find the following url patterns to query
// the await keyword is used to wait for promises to be resolved, asynchronous Promise operations 
// asynchronous operation refers to a task or process that does not block the execution of the program while it is being performed. 
const tabs = await chrome.tabs.query({
  url: [
    "https://developer.chrome.com/docs/webstore/*",
    "https://developer.chrome.com/docs/extensions/*",
  ],
});
// queried tabs have id, url, title ..etc


// The Intl.Collator is a constructor for creating a collator object,
// which is used for string comparison. In this case, it is used to compare 
// the titles of the tabs for sorting.
const collator = new Intl.Collator();
//This sorting operation rearranges the tabs in ascending order based on their titles.
tabs.sort((a, b) => collator.compare(a.title, b.title));

// 
const template = document.getElementById("li_template");
const elements = new Set();

for (const tab of tabs) {
  // creating a copy of the template and all the child nodes
  const element = template.content.firstElementChild.cloneNode(true);

  const title = tab.title.split("-")[0].trim();
  const pathname = new URL(tab.url).pathname.slice("/docs".length);

  element.querySelector(".title").textContent = title;
  element.querySelector(".pathname").textContent = pathname;

  // when a certain tab link is clicked, update with the pathname. 
  element.querySelector("a").addEventListener("click", async () => {
    
    // need to focus window as well as the active tab
    // what chrome tabs update will do : 
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update
    // pass in two values 1. tab.id 2. updateProperties
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
  });

  elements.add(element);
}
document.querySelector("ul").append(...elements);

const button = document.querySelector("button");

button.addEventListener("click", async () => {
  const tabIds = tabs.map(({ id }) => id);

  // when button is clicked it will group the tabs
  const group = await chrome.tabs.group({ tabIds });
  await chrome.tabGroups.update(group, { title: "DOCS" });
});