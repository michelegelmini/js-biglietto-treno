console.log('hello!');

const km = parseInt(Number(prompt('Quanti km vuoi viaggiare?')));
const age = parseInt(Number(prompt('Quanti anni hai?')));

let price = (km * 0.21).toFixed(2);
let ticketOutput = document.getElementById('ticket-output');
let discount = 0;
let message = 'Ecco il prezzo del tuo biglietto'

/* check inserimento valori */
if (!(isNaN(km) || isNaN(age))) {

    if (age <= 18) {
        console.log('sconto 20%');
        discount = 20;
        message = 'Congratulazioni! Sei minorenne quindi hai diritto ad uno sconto del 20%!'

    } else if (age >= 65) {
        console.log('sconto 40%');
        discount = 40;
        message = 'Congratulazioni! Sei vecchio quindi hai diritto ad uno sconto del 40%!'

    } else {
        console.log('niente sconto');
        console.log(price);
    }

    let discountedPrice = (price - (price * discount / 100)).toFixed(2);

    ticketOutput.innerHTML =
        `${message} <br>
        Prezzo del biglietto: €${price} <br>
        Sconto ${discount}%: €${(price * 20 / 100).toFixed(2)} <br>
        Prezzo Scontato: €${discountedPrice}`

} else {
    console.log('inserisci due numeri');
    ticketOutput.innerHTML = `Non hai inserito dei numeri`
}


