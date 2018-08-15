/**
 * This script will run on the chrome extension window.
 */

chrome.runtime.onMessage.addListener(({ spec }) => {
  if (spec) {
    chrome.storage.local.set({ spec });
  }
});
