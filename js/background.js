var contextMenus = {};

contextMenus.createCharWordCount = 
    chrome.contextMenus.create({
            "title" : "Word and Character Count",
            "contexts": ["all"]
        },
        function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    );

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tabs) {
    if (info.menuItemId === contextMenus.createCharWordCount) {
        chrome.tabs.executeScript({
            file: 'js/wordCharCount.js'
        }, () => chrome.runtime.lastError);
    }
}