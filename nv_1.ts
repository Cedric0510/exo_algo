//(G) Un nombre premier est un nombre qui n’a pour unique diviseurs 1 et lui-même. Ainsi 13 est un
// nombre premier puisqu’il n’existe aucun nombre qui ne soit ni 1 ni 13 qui le divise.
// Écrire une fonction is_prime qui prend un entier n et renvoie true s’il est premier, false sinon

function isPrime (n:number): boolean{
     for(let i=2; i<n; i++){
        if(n%i==0){
            return false  
        } 
    }
    return true
};
console.log(isPrime(12))


// (H) Le PGCD est le Plus Grand Diviseur Commun entre deux nombres. Par exemple 24 et 32 ont
// comme PGCD 8, puisqu’il s’agit du plus grand nombre qui divise les deux.
// Écrire une fonction pgcd qui prend deux entiers a et b et qui renvoie leur PGCD.

function pgcd(a:number,b:number):number{
    let res: number = 0
    if (a<b){
        for(let i=a; i>0; i--){
           if (a%i == 0 && b%i == 0){
            res = i;
           return res;
          };
        };
    }else{
        for(let i=b; i>0; i--){
            if (b%i == 0 && a%i == 0){
                res = i;
            return res;
            };
        };
    };
    return res;
    
};

console.log(pgcd(36,60))


// (I) Un nombre parfait est un nombre dont la somme de tous ses diviseurs autres que lui-même
// est égale au nombre en question. Par exemple, 6 est un nombre parfait parce que la somme
// de ses diviseurs 1+2+3 est égale à 6. De même, 28 est parfait puisque 1+2+4+7+14=28.
// Écrire une fonction is_perfect qui prend un entier n et renvoie true s’il est parfait, false sinon.

function is_perfect(n:number):boolean{
    let res = 0
    for(let i=0; i<n; i++){
        if(n%i==0){
            res = res + (i)
        }       
    }
    return n === res
}

console.log(is_perfect(7))