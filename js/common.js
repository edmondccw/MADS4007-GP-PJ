console.log("initializing")

const tickets = [
    {
        name: "Otaku Demon Slayer Pass",
        imageUrl: "./assets/imgs/plan1.png",
        imgAlt: "plan1 icon",
        price: "99",
        features: ["Harness the power of the Demon Slayer Corps with all-day\
                    access to anime performances",
                    "Master your skills and save with 7% off all snacks and drinks",
                  ],
        buyTicketUrl: "./purchaseTicket.html?price=99",
    },
    {
        name: "Slayer of Anime Darkness Pass",
        imageUrl: "./assets/imgs/plan2.png",
        imgAlt: "plan2 icon",
        price: "299",
        features: ["Embrace the ultimate anime adventure with unlimited access to\
                    all performances",
                    "Prove your mastery with valid entry on all festival days",
                    "Slice through waiting lines with fast entry privileges",
                    "Conquer your cravings with 15% off all snacks and drinks",
                    "Walk the path of legends with exclusive backstage meet and\
                     greets with your favorite anime stars"
                  ],
        buyTicketUrl: "./purchaseTicket.html?price=299",
    },
]

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

const loadTicketPlans = () => {
    const ticketsPricing = document.getElementById("ticketsPricing")
    console.log("ticketsPricing is ", ticketsPricing)
    if(ticketsPricing !== undefined && ticketsPricing !== null){
        let pricingOptionsHtml = ""

        for(ticket of tickets){
            pricingOptionsHtml += `\   
            <div class="pricingOption">\
                <div class="pricingDetails">\
                <img src=${ticket.imageUrl} alt=${ticket.imgAlt} class="planImg"/>\
                    <h3 class="planName">${ticket.name}</h3>\
                    <p class="price">$${ticket.price}</p>\
                    <ul class="feature">`

            for(feature of ticket.features){
                pricingOptionsHtml += `<li>${feature}</li>`
            }

            pricingOptionsHtml += `\
                    </ul>\
                    <a href=${ticket.buyTicketUrl} class="buyButton">BUY TICKETS</a>\
                </div>\
          </div>`
        }

        document.getElementById("pricingOptions").innerHTML = pricingOptionsHtml
    }
}

const loadTicketTypes = () => {
    const ticketType = document.getElementById("ticketType")

    if(ticketType !== undefined && ticketType !== null){
        let ticketTypeHtml = "<label>Ticket Type: </label>"

        for(ticket of tickets){
            ticketTypeHtml += `<input type="radio" name="ticketType" value="${ticket.price}">\
                               <label for="ticketType">${ticket.name}</label>`
        }

        ticketType.innerHTML = ticketTypeHtml
    }
}

// check the suitable radio button. By default, select the cheapest ticket option
const selectTicketType = () => {
    const purchaseForm = document.getElementById("purchaseForm")

    console.log("in common, purchase form is ", purchaseForm)
    if(purchaseForm !== undefined && purchaseForm !== null){
        const price = document.URL.split("?price=")[1]

        const radioBtns = purchaseForm.querySelectorAll('input[type="radio"]')  
        console.log("radiobtns are ", radioBtns, price)

        if(Number.isNaN(Number(price))|| price === null){
            // select the cheapest type by default, if no specific ticket is selected
            let cheapestPrice
            for(let i=0; i < tickets.length;i++){
                if(i === 0){
                    cheapestPrice = tickets[i].price
                }
                else{
                    if(tickets[i].price < cheapestPrice){
                        cheapestPrice = tickets[i].price
                    }
                }

            }
            console.log("cheapest price is ", cheapestPrice)
            const cheapestTicketIndex = tickets.indexOf(cheapestPrice)
            console.log("cheapest ticket is ", cheapestTicketIndex)


            if(Number.isInteger(Number(cheapestTicketIndex) && cheapestTicketIndex >= 0)){
                radioBtns[cheapestTicketIndex].checked = "true"
            }
            else{
                radioBtns[0].checked = "true"
            }
        }
        else{
            const selectedTicketIndex = tickets.findIndex((ticket) => Number(ticket.price) === Number(price))
            console.log("selected ", selectedTicketIndex)
            radioBtns[selectedTicketIndex].checked = "true"
        }
    }
}

loadTicketPlans()    // used in the home page
loadTicketTypes() // usded in the buy tickets page
selectTicketType()   // used in the buy tickets page

initializeHead()
initializeHeader()
initializeFooter()