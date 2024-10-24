// (A) Écrire une fonction hello qui demande à l’utilisateur d’entrer son nom et affiche une salutation
// reprenant son nom.

import { equal } from "assert";
import { parentPort } from "worker_threads";
import * as readlineSync from 'readline-sync';

function hello(name:string):string{    
    let readlineSync = require('readline-sync');
     name = readlineSync.question('May I have your name? ')

let salute = `hello ${name} tu es beau!!!`;
return salute
}
// console.log(hello(''))


//(B) Écrire une fonction avg_inputs qui demande à l’utilisateur d’entrer des nombres un à un. Tant
// que le nombre entré est positif, on le comptabilise. Dès que le nombre est négatif, on s’arrête
// et l’on renvoie la moyenne de tous les nombres entrés par l’utilisateur.



function avg_inputs():number{
    let array:number[] = [];
    let readlineSync = require('readline-sync');
    let n = readlineSync.questionInt('Enter a number : ')
    while(n>0){
        array.push(n)
        n = readlineSync.questionInt('Enter a number : ')  
    }
    console.log(array)
    let sum:number = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum / array.length;
    
}

// console.log(avg_inputs())



function RPS():string{
  const items: string[] = ["Rock", "Paper", "Scissor"];
  let userChoice : string = readlineSync.question("Your Choose (Rock,Paper,Scissor)");
  const length = items.length
  let ItemIndex : number = Math.floor(Math.random() * length);
  const index = items.findIndex((playerChoice) => playerChoice === userChoice);
  let playerChoice = index;

  console.log(ItemIndex)
  if (playerChoice !== ItemIndex){
    if(((playerChoice - ItemIndex)+length) %length == 0){
      return "You win"

    }else{
      return "You Loose"
    }
  }
  return "Tie"
};

// console.log(RPS())


// Guess a Number.
// L’objectif est de choisir aléatoirement un nombre compris entre 1 et 1000 et de faire deviner à
// l’utilisateur jusqu’à ce qu’il trouve, lui indiquant à chaque fois s’il a deviné “trop grand” ou
// “trop petit”. Bonus : compter en combien de coups le joueur a deviné.

function GuessANumber():string{
let numberComp : number = Math.floor(Math.random() * 1000);
let numberUser : number = readlineSync.questionInt("Your Number between 1 & 1000 : ");

  while (numberComp !== numberUser){
    if(numberComp>numberUser){
       numberUser = readlineSync.questionInt("Up : ");
    }else{
      numberUser = readlineSync.questionInt("Down : ");
    }
  }
  return"Win"
}

// console.log(GuessANumber())


// Mysterious Mult.
// Dans la même idée, on choisit un nombre aléatoire compris entre 1 et 5000. L’objectif à
// nouveau est de le faire deviner à l’utilisateur, seulement cette fois ci on répond uniquement
// par True si le nombre deviné est un diviseur, sinon False


function MysteriousMult():string {
  let numberComp : number = Math.floor(Math.random() * 5000);
  console.log(numberComp)
  let numberUser : number = readlineSync.questionInt("Your Number between 1 & 5000 : ");
  

  while(numberComp !== numberUser){
    if(numberComp % numberUser == 0){
      numberUser = readlineSync.questionInt("True \n Play again : ");
    }else{
      numberUser = readlineSync.questionInt("False \n Play again : ");
    }  
  }
  return "You WIn"
}


console.log(MysteriousMult())