function calculatePrice() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const postcode = document.getElementById('postcode').value;
    const album = Number(document.getElementById('album').value);
    const tickets = Number(document.getElementById('tickets').value);

    let totalPrice = album + tickets;
    let discount = 0;
    
    if (name === "" || email === "" || address === "" || postcode === "") {
        document.getElementById('result').innerHTML = "Voer iets in!";
        return;
    }

    if (!email.includes('@')) {
        document.getElementById('result').innerHTML = "Voer een geldig emailadres in";
        return;
    }

    if (album === 0 && tickets === 0) {
        document.getElementById('result').innerHTML = "Kies minimaal een artikel";
        return;
    }

    
    if (album > 0 && tickets > 0) {
        discount = totalPrice * 0.1;
        totalPrice -= discount;
    }

    
    let orderDetails = 
        "Naam: " + name + "<br>" +
        "E-mail: " + email + "<br>" +
        "Adres: " + address + "<br><br>" +
        "Bestelde artikelen: <br>";

    if (album > 0) {
        orderDetails += "Album: €" + album.toFixed(2) + "<br>";
    }


    if (tickets > 0) {
        orderDetails += "Tickets: €" + tickets.toFixed(2) + "<br>";
    }

    
   
    if (discount > 0) {
        orderDetails += "Korting (10%): -€" + discount.toFixed(2) + "<br>";
   
        orderDetails += "Eindprijs na korting: €" + totalPrice.toFixed(2) + "<br>";
    }
    else if (discount === 0 && album > 0 || tickets > 0) {
        orderDetails += "Geen korting!<br>";
    }

    document.getElementById("orderInfo").innerHTML = orderDetails;
    document.getElementById("orderDetails").style.display = "block";

    
    setTimeout(function () {
        document.getElementById("orderDetails").style.display = "none";
    }, 45000);

    document.getElementById("myForm").reset();
}
