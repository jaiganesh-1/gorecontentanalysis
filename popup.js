chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
 document.getElementById('warning').textContent = request.warning;

 if (request.timestamps.length > 0) {
    let timestampsList = document.getElementById
