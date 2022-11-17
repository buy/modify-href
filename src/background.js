function loadExtensionBarOnIcon() {
  chrome.browserAction.setIcon({
    path: {
      '19': '/images/on32.png',
      '38': '/images/on48.png'
    }
  });
}

function loadExtensionBarOffIcon() {
  chrome.browserAction.setIcon({
    path: {
      '19': '/images/off32.png',
      '38': '/images/off48.png'
    }
  });
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  loadExtensionBarOnIcon()
  chrome.tabs.executeScript(null, {file: "/src/parse_link.js"});
  setTimeout(function() {
    loadExtensionBarOffIcon()
  }, 1000);
});
