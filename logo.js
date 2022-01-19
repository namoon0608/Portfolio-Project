const logo = document.querySelector('div.animation')

let timeoutID = window.setTimeout((()=>logo.style="transition: all 1s ease; opacity:0; pointer-events:none;"),5000)