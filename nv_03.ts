// (A) Écrire une fonction hello qui demande à l’utilisateur d’entrer son nom et affiche une salutation
// reprenant son nom.

import { equal } from "assert";
import { parentPort } from "worker_threads";

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

//Écrire une fonction RPS qui demande à l’utilisateur de rentrer au choix “Rock”, “Paper” ou
// “Scissor”. À l’aide de la fonction Math.random(), faites également choisir votre programme et
// indiquez au joueur s’il a gagné ou perdu. Recommencer jusqu’à ce que le joueur gagne.

function RPS():boolean{
    let win : boolean = false;
    let readlineSync = require('readline-sync');
    let input = readlineSync.question('Rock, Paper, Scissor : ')
    let player : string = input;
    let Ia = Math.random(3);
    let Rock:number = 3
    let Paper:number = 1
    let Scissor:number = 2
    let array : string[] = ["Rock, Paper, Scissor" ]
//     switch(){
//         case{
//         Rock>Scissor
//         return Rock WIN
//     }case{
//         Scissor>Paper
//         return Scissor WIN 
//     }case{
//         Paper>Rock 
//         return Paper WIN 
//     }case{
//         Rock=Rock 
//         Return Equal
//     }case{
//         Scissor=Scissor 
//         Return Equal
//     }case{
//         Paper=Paper 
//         Return Equal 
//     }
// return unTruc
// }