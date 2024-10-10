//(A) Écrire une fonction h_triangle qui prend en entrée un entier h et qui renvoie un unique string
// symbolisant un triangle de hauteur h à l’aide de caractère ascii, par exemple des *.

function h_triangle (h:number):string{
    let res:string = "";
    let star:string = "*";

    for(let i=0; i<h; i++){
        res += star.repeat(i+1)+ "\n"
    }    
    return res
};

// console.log(h_triangle(4))


// (B) Écrire une fonction rectangle qui prend deux entiers n et m et qui renvoie un unique string
// symbolisant un rectangle n*m.

function rectangle (n:number, m:number): string{
    let res:string="";
    let star:string="*"
    for(let i=0; i<m; i++){
    res += star.repeat(n)+"\n";
    }

    return res
}

// console.log(rectangle(5,3))

//(C) Écrire une fonction reverse_ints qui prend un entier n et qui renvoie un string faisant le
// décompte inverse des entiers compris entre 1 et n inclus.
// Par exemple pour n=5, on obtient “54321”.

function reverse_ints(n:number):string{
    let res:string="";
    for(let i=n; i>0; i--){
        res += i.toString();
    }

    return res;
}

// console.log(reverse_ints(6));

//(D) Écrire une fonction int_pyramid qui prend un entier n et qui renvoie un string constituant un
// triangle qui indique à chaque emplacement la longueur de la pyramide.

function int_pyramid(n:number):string{
    let res:string="";
    let line:string="";
    for(let i=0; i<n; i++){
        line += (i+1);
        res += line + "\n"        
}

return res
    
}

// console.log(int_pyramid(8));

//(E) Écrire une fonction beautiful_mult qui prend un entier n et renvoie à l’aide d’un unique string
// sa table de multiplication formatée.

function beautiful_mult(n:number):string{
    let line: string = "";
    for(let i=0; i<11; i++){
        line += `${n}*${i}=${i*n},`;
    }
    return line
}

console.log(beautiful_mult(4))