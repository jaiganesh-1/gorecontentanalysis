chrome.runtime.onInstalled.addListener(() => {
 console.log('Gore Detection extension installed.');
});

chrome.runtime.onStartup.addListener(() => {
 console.log('Gore Detection extension started.');
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
 if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
    console.log('Tab updated. Sending content script.');
    chrome.tabs.executeScript(tabId, {
      file: 'content.js',
      runAt: 'document_end'
    });
 }
});
