console.log('hello!');

const km = parseInt(Number(prompt('Quanti km vuoi viaggiare?')));
const age = parseInt(Number(prompt('Quanti anni hai?')));

/* check inserimento valori */
if (!(isNaN(km) || isNaN(age))) {

    console.log('hai inserito due numeri');

} else {
    console.log('inserisci due numeri');
}