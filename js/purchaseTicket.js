console.log("loading purchase ticket")

const selectTicketType = () => {
    const type = document.URL.split("?type=")[1]

    const radioBtns = document.querySelectorAll('input[type="radio"]')  
    
    // select the cheapest type (type 2) by default
    if(type === "2"){
        radioBtns[1].checked = "true"
    }
    else{
        radioBtns[0].checked = "true"
    }
}


const clearOrderSummaryAndErrorMsg = () => {
    document.getElementById("errorMessage").innerHTML = ""
    document.getElementById("orderSummary").innerHTML = ""
}

const displayOrderSummary = (ticketQtn, ticketPrice) => {
    // remove existing order summary or error, if any
    clearOrderSummaryAndErrorMsg()

    ticketQtn = parseFloat(ticketQtn)
    ticketPrice = parseFloat(ticketPrice)
    const orderSummary = document.getElementById("orderSummary")
    console.log("order summary is ", orderSummary, ticketQtn, ticketPrice)

    // display all prices to 2 decimal points
    const subtotal = (ticketQtn * ticketPrice).toFixed(2)
    const tax = (subtotal * 0.13).toFixed(2)
    const finalPrice = (Number(subtotal) + Number(tax)).toFixed(2)
    console.log("final price is ", subtotal, tax, finalPrice)

    const infoToBeShown = {
        "Number of tickets": String(ticketQtn),
        "Price per ticket": "$" + String(ticketPrice.toFixed(2)),
        "Subtotal": "$" + String(subtotal),
        "Tax (13%)": "$" + String(tax),
        "Final Price": "$" + String(finalPrice),
    }


    let orderSummaryHtml = "<table>"
    orderSummaryHtml += "<tr><th>Order Summary</th></tr>"
    for(key in infoToBeShown){
        console.log("info is ", key)
        // orderSummary.innerHTML += `<p>${key}: ${infoToBeShown[key]}</p>`
        orderSummaryHtml += `<tr><td>${key}: ${infoToBeShown[key]}</td></tr>`

    }
    orderSummaryHtml += "</table>"
    orderSummary.innerHTML = orderSummaryHtml
}

const displayErrMsg = (errMsg) => {
    // remove existing order summary or error, if any
    clearOrderSummaryAndErrorMsg()
    document.getElementById("errorMessage").innerHTML = errMsg
}

const validatePurchaseForm = () => {
    console.log("pay now clicked")


    // getting data from the purchase form
     const purchaseForm = document.getElementById("purchaseForm")
     console.log("form data is ", purchaseForm, purchaseForm.value, purchaseForm.querySelector("input[name=quantity]"))
     const ticketPrice = purchaseForm.querySelector("input[name=ticketType]:checked").value
     const ticketQtn = purchaseForm.querySelector("input[name=quantity]").value
     const creditCardNumber = purchaseForm.querySelector("input[name=creditCardNumber]").value
     console.log("types are ", typeof ticketQtn, typeof ticketPrice, typeof creditCardNumber)
     console.log("numbers are ", ticketQtn, ticketPrice, creditCardNumber)

    /*
     check the following:
     1. at least 1 ticket is selected
     2. the credit card number has exactly 6 digits
     3. check if the quantity of tickets is an integer
    */
   if(Number(creditCardNumber) === NaN || String(creditCardNumber).length !== 6){
        displayErrMsg("The credit card number should be exactly 6 digits long!")
   }
   else if(!Number.isInteger(Number(ticketQtn))){
        displayErrMsg("Quantity of Tickets should be an integer")
   }
   else if(Number(ticketQtn) < 1){
        displayErrMsg("You must select a minimum of 1 ticket!")
   }
   else{
        displayOrderSummary(ticketQtn, ticketPrice)
   }
}

// check the suitable radio button. By default, select the cheapest ticket option
selectTicketType()

// adding event listeners when the script is loaded
const payNowBtn = document.getElementById("payNow")
console.log('paynowbtn is ', payNowBtn)
payNowBtn.addEventListener("click", validatePurchaseForm)