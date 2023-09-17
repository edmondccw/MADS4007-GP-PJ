console.log("initializing")

const initializeHead = () => {
    document.querySelector("head").innerHTML += '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
                                                <link href="https://fonts.cdnfonts.com/css/rapier-zero-hollow" rel="stylesheet">\
                                                <link href="https://fonts.googleapis.com/css2?family=Prompt&family=Roboto&display=swap" rel="stylesheet"></link>'
}

const initializeHeader = () => {
    document.getElementById("nav").innerHTML = '<a href="./index.html" class="navLink">HOME</a>\
                                                <a href="./movieDetail.html" class="navLink">SCHEDULE</a>\
                                                <a href="./purchaseTicket.html" class="navLink">BUY TICKETS</a>\
                                                <a href="./index.html#contact" class="navLink">CONTACT</a>'
}

const initializeFooter = () => {
    // TODO
}

initializeHead()
initializeHeader()
initializeFooter()