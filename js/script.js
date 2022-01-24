console.log('JS OK!');

/*

Descrizione:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.

|Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero

1- fare una funzione che genera numeri casuali e li mette in un array
2- Mostrare i numeri con un allert
3- impostare una timing function che dopo 30 secondi: 
   3.1- chiede con un allert all'utente di inserire i numeri che ha visto
   3.2- confronta i numeri inseriti con i numeri generati 
   3.3- se 1 o più numeri dell'utente coincidono: 
      3.3.1- scrivere quanti e quali ha azzeccato

*/

// # RECUPERO IN PAGINA L'ELEMENTO 
const displayElement = document.getElementById('display');

   

// # LE FUNZIONI 

const getArrayRandom = () => {
   const listNumber = [];
   for (let i = 0; i < 5; i++) {
      const randNum = Math.floor(Math.random() * 100) + 1;
      if (!listNumber.includes(randNum)) listNumber.push(randNum);
   }
   return listNumber;
};

const getArrayUserNum = () => {
   const userList = [];
   
   for (let j = 0; j < 5; j++) {
      let userNumber;
      while (isNaN(userNumber) || userNumber <= 0) {
         userNumber = parseInt(prompt('Inserisci uno dei numeri che hai visto:'));
      }
      if (!isNaN(userNumber) && !userList.includes(userNumber)) {
         userList.push(userNumber);
      }
   };
   return userList;
};


const randomArray = getArrayRandom();
console.log(randomArray);

// # MOSTRO I NUMERI CASUALI 
alert('Ricorda questi numeri : ' + randomArray);


// # IMPOSTO LA TIMING FUNCTION 

setTimeout(() => {

   const userArray = getArrayUserNum();
   console.log(userArray);
   
   // #Controllo se i numeri dell'utente sono uguali a quelli generati 
   const checkedArray = [];               //! Array di elementi verificati
   
   userArray.forEach(element => {
      if (randomArray.includes(element)) {
         let numbInclude = element;
         checkedArray.push(numbInclude);
      }
   });
   
   console.log(`hai indovinato questi numeri: ${checkedArray}`);

   if (checkedArray == '') {
      displayElement.classList.add('result');
      displayElement.innerText = `Non hai indovinato nessun numero`;
   } else {
      displayElement.classList.add('result');
      displayElement.innerText = `Hai indovinato questi numeri: ${checkedArray}`
   };

}, 10000);

