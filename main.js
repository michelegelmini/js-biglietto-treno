/* 
const km = parseInt(Number(document.getElementById('user-km'))); */

/* contatore km */
const userKm = document.getElementById('user-km');


const currentKm = document.querySelector('.km-counter')


currentKm.innerText = userKm.value;

userKm.addEventListener('change', function () {
    currentKm.innerText = userKm.value;
})





const myForm = document.getElementById('form-main');



/* invio del form */
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userKm = document.getElementById('user-km');

    const userAge = document.getElementById('user-age');

    /* variabili di calcolo */

    const age = parseInt(Number(userAge.value));
    const km = parseInt(Number(userKm.value));

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

            discount = 20;
            messageWithDiscount = `Congratulazioni! Hai solo ${age} anni, quindi hai diritto ad uno sconto del 20%!`


        } else if (age > 150) {
            document.getElementById('card-body').innerHTML = 'Sicuro di essere così vecchio?'
            document.getElementById('button').innerHTML = 'Riprova'

        } else if (age >= 65) {

            discount = 40;
            messageWithDiscount = `Congratulazioni! Hai ${age} anni, quindi hai diritto ad uno sconto del 40%!`


        } else {

            discount = 0;
            messageWithDiscount = ''
        }

        let discountedPrice = (price - (price * discount / 100)).toFixed(2);

        /* stampa valori */

        kmOutput.innerHTML = km
        messageWithDiscountOutput.innerHTML = messageWithDiscount
        priceOutput.innerHTML = `€${price}`
        discountOutput.innerHTML = discount

        if (discount === 0) {
            discountedPriceOutput.innerHTML = '€0';
        } else {
            discountedPriceOutput.innerHTML = `€${(price * discount / 100).toFixed(2)}`
        }
        totalPriceOutput.innerHTML = `€${discountedPrice}`





    } else {
        console.log('inserisci due numeri');
        document.getElementById('card-body').innerHTML = 'Non hai inserito dei numeri!'
        document.getElementById('button').innerHTML = 'Riprova'
    }


})



