console.log('hello!');

const km = parseInt(Number(prompt('Quanti km vuoi viaggiare?')));
const age = parseInt(Number(prompt('Quanti anni hai?')));

let price = (km * 0.21).toFixed(2);
let priceOutput = document.getElementById('price');
let discountOutput = document.getElementById('discount');
let discountedPriceOutput = document.getElementById('discounted-price');
let totalPriceOutput = document.getElementById('total-price');
let messageWithDiscountOutput = document.getElementById('messageWithDiscount');
let kmOutput = document.getElementById('km-travel');
let discount = 0;

/* check inserimento valori */
if (!(isNaN(km) || isNaN(age))) {


    /* check sconto */
    if (age <= 18) {
        console.log('sconto 20%');
        discount = 20;
        messageWithDiscount = `Congratulazioni! Hai solo ${age} anni, quindi hai diritto ad uno sconto del 20%!`


    } else if (age > 150) {
        document.getElementById('card-body').innerHTML = 'Sicuro di essere così vecchio?'

    } else if (age >= 65) {
        console.log('sconto 40%');
        discount = 40;
        messageWithDiscount = `Congratulazioni! Hai ${age} anni, quindi hai diritto ad uno sconto del 40%!`


    } else {
        console.log('niente sconto');
        console.log(price);
        discount = 0;
        messageWithDiscount = ''
    }

    let discountedPrice = (price - (price * discount / 100)).toFixed(2);

    /* stampa valori */

    kmOutput.innerHTML = `${km}`
    messageWithDiscountOutput.innerHTML = `${messageWithDiscount}`
    priceOutput.innerHTML = `€${price}`
    discountOutput.innerHTML = `${discount}`

    if (discount === 0) {
        discountedPriceOutput.innerHTML = '€0';
    } else {
        discountedPriceOutput.innerHTML = `€${(price * discount / 100).toFixed(2)}`
    }
    totalPriceOutput.innerHTML = `€${discountedPrice}`





} else {
    console.log('inserisci due numeri');
    document.getElementById('card-body').innerHTML = 'Non hai inserito dei numeri'
}


