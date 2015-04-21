// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL matches kinopoisk pattern
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlMatches: 'www.kinopoisk.ru/film/[0-9]+/' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});


// Called when the user clicks on the page action.
chrome.pageAction.onClicked.addListener(function(tab) {
  var url = tab.url.replace("www.kinopoisk.ru", "www.2kinopoisk.ru");
  chrome.tabs.create({url:url});
});