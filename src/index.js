// Try to change something here...
// Chrome, Firefox reload and refresh JS correctly (by ignoring cache)
// Safari serves JS from cache on reload

document.body.append(`Hello ${navigator.userAgent}!`)
document.body.append('...')

document.body.style.backgroundColor = 'hotpink' // hotpink | blue | red