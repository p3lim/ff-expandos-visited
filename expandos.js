let hooked = []

const onClick = event => {
	link = event.originalTarget.parentNode.querySelector('.title > a')
	browser.runtime.sendMessage({'url': link.href})
}

const load = _ => {
	document.querySelectorAll('.expando-button').forEach(el => {
		if(!hooked.includes(el)){
			el.addEventListener('click', onClick)
			hooked.push(el)
		}
	})
}

// this is wasteful, should probably learn how to use the observer properly
const observer = new MutationObserver(load)
observer.observe(document, {
	childList: true,
	subtree: true,
})

if(document.readyState != 'loading')
	load()
else
	document.addEventListener('DOMContentLoaded', load)
