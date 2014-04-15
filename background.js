chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
          for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'User-Agent') {
              details.requestHeaders[i].value = 'Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))';
              break;
            }
          }
          return {requestHeaders: details.requestHeaders};
        },
        {urls: ["*://*.youtube.com/*"]},
        ["blocking", "requestHeaders"]);