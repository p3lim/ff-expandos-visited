browser.runtime.onMessage.addListener(data => {
	console.log('history', browser.history)
	console.log('data', data)
	browser.history.addUrl({url: data.url})
})
