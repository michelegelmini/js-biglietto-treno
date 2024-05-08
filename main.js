console.log('hello!');

const km = parseInt(Number(prompt('Quanti km vuoi viaggiare?')));
const age = parseInt(Number(prompt('Quanti anni hai?')));

let price = km * 0.21;

/* check inserimento valori */
if (!(isNaN(km) || isNaN(age))) {

    if (age <= 18) {
        console.log('sconto 20%');
        let discountedPrice = price - (price * 20 / 100);
        console.log(discountedPrice);
    } else if (age >= 65) {
        console.log('sconto 40%');
        let discountedPrice = price - (price * 40 / 100);
        console.log(discountedPrice);
    } else {
        console.log('niente sconto');
        console.log(price);
    }

} else {
    console.log('inserisci due numeri');
}