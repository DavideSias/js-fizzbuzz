// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

/*
Creare un ciclo for con i = 0, i <= 100, i++;

fare i modulo 3 e inserirlo in una variabile (eleFizz);
fare i modulo 5 e inserirlo in una variabile (eleBuzz);

IF eleFizz === 0 AND eleBuzz === 0 stampare 'FizzBuzz'
ELSE IF eleFizz === 0 allora stampare 'Fizz'
ELSE IF eleBuzz === 0 allora stampare 'Buzz'
*/


for (i = 1; i <= 100; i++){
  
    if((i % 3 == 0) && (i % 5 == 0)){
        console.log('FizzBuzz')
    } else if (i % 3 == 0){
        console.log('Fizz');
    } else if (i % 5 == 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}