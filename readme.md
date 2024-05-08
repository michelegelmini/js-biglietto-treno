Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana - con massimo due decimali, per indicare centesimi sul prezzo.
Questo richiederà un minimo di ricerca.
Il risultato andrà visualizzato in un apposito elemento <p> del  codice HTML.



prompt chiedere numero di km da percorrere
prompt chiedere l'età del passeggero

definire costo del biglietto al km (0.21 al km)

SE l'età del passeggero è minore di 18
    applicare sconto del 20%
    ALTRIMENTI SE l'età è sopra i 65
        applicare sconto del 40%

calcolare costo in forma umana (2 decimali)