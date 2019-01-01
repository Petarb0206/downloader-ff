function rundl() {
  var tabs = browser.tabs.query({currentWindow: true, active: true});
  var tab = tabs[0];
  var vidurl = tab.url;
  browser.runtime.sendNativeMessage(ytdl, vidurl);
}
browser.browserAction.onClicked.addListener(rundl)
