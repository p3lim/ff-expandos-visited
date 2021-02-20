browser.runtime.onMessage.addListener(data => browser.history.addUrl({url: data.url}))
