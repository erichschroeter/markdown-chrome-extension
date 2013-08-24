function openMarkdownPreviewTab() {
	chrome.tabs.create({'url': chrome.extension.getURL('showdown/showdown-gui.html')});
}

chrome.browserAction.onClicked.addListener(openMarkdownPreviewTab);
