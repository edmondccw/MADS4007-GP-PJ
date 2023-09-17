console.log("initializing")

const initializeHeader = () => {
    document.getElementById("nav").innerHTML = '<a href="./index.html" class="navLink">HOME</a>\
                                                <a href="#" class="navLink">SCHEDULE</a>\
                                                <a href="./purchaseTicket.html" class="navLink">BUY TICKETS</a>\
                                                <a href="#" class="navLink">CONTACT</a>'
}

const initializeFooter = () => {
    // TODO
}

initializeHeader()
initializeFooter()