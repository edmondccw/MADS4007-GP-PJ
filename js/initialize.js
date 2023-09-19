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
                                                <a href="./index.html#footerContainer" class="navLink">CONTACT</a>'
}

const initializeFooter = () => {
    document.querySelector("footer").innerHTML = '<h2 id="footerTitle">Connect with us</h2>\
                                                <div id="socialIcons">\
                                                <a target="_blank" href="https://www.facebook.com/login/"><i class="fa-brands fa-facebook"><img src="./assets/icons/FB.png" alt="fbIcon" class="smIcon"></i></a>\
                                                <a target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-instagram"><img src="./assets/icons/IG.png" alt="igIcon" class="smIcon"></i></a>\
                                                <a target="_blank" href="https://www.snapchat.com/"><i class="fa-brands fa-snapchat"><img src="./assets/icons/SC.png" alt="scIcon" class="smIcon"></i></a>\
                                                <a target="_blank" href="https://twitter.com/"><i class="fa-brands fa-twitter"><img src="./assets/icons/TWT.png" alt="ytIcon" class="smIcon"></i></a>\
                                                <a target="_blank" href="https://www.youtube.com/"><i class="fa-brands fa-youtube"><img src="./assets/icons/YT.png" alt="ytIcon" class="smIcon"></i></a>\
                                                </div>\
                                                <div id="footerBottom">\
                                                <p id="copyright">\
                                                    Copyright &copy; 2023; Designed by\
                                                    <span id="designer">AnimeQuest Toronto</span>\
                                                </p>\
                                                </div>'
}

initializeHead()
initializeHeader()
initializeFooter()