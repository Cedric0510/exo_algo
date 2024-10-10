// (H) Écrire une fonction is_leap qui prend en entrée un entier year et qui renvoie true s’il s’agit
// d’une année bissextile, false sinon.

function Year(year: number){
    if (year%4 == 0){
        if (year%100 == 0){
        return year%400 == 0
    }
        return true
 }
    return false
}

console.log(Year(1982))


//(I) Écrire une fonction delta qui prend trois coefficients a, b et c et qui calcul le coefficient delta
// du polynôme ax²+bx+c tel que delta = b² - 4ac

function delta(a:number,b:number,c:number){
let coef:number = 0
coef = b**2 - 4*a*c
return coef    
};

console.log(delta(199,603,123))

//(J) Écrire une fonction root qui prend trois coefficients a, b et c et qui, en utilisant la fonction
// delta détermine s’il existe une racine au polynôme associé.
// Si delta < 0, on renverra un tableau vide pour indiquer qu’il n’y a pas de racine.
// o Si delta = 0, on renverra un tableau contenant l’unique racine : -b / 2a
// o Si delta >0, on renverra un tableau contenant les deux racines :
// ▪ -b – sqrt(delta) / 2a
// ▪ -b + sqrt(delta) / 2a


function root (a:number,b:number,c:number){
let array: number[] = [];
let coef:number = 0
coef = b**2 - 4*a*c  
    if (coef < 0){
    return array
      }
      else if(coef = 0){
        let res: number = 0
            res = (-b / 2*a)
    array.push (res)
    return array
        }
        else if (coef>0){
            let bigres:number= 0
            let bigres2:number = 0
            bigres = -b - Math.sqrt(coef) / 2*a 
            bigres2 = -b + Math.sqrt(coef) / 2*a
     array.push (bigres, bigres2);
     return array
  }
};

console.log(root(199,603,123));