let num = [5,8,40];
num[3]=6;
num.push(7);//coloca um valor no ultimo indice do vetor
num.sort(Number);//metodo que coloca em ordem crescente , utilize o Number pois sort é um metodo string
let pos = num.indexOf(5);
console.log(num.length);
//for(let i=0;i<=4;i++){
  //  console.log(num[i]);

//}
for(let i in num){ // para cada posição dentro do vetor
    console.log(num[i]);

}
console.log(`O valor 5 foi encontrado no indice ${pos}`);
