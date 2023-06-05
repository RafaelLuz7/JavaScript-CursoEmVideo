
var hora = new Date(); // new Date() pega tempo e data atual

console.log(`Agora são exatamente  ${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()} `); // não esquecer dos parentesses pois Date se trata de uma função

if(hora < 12) {
    console.log('Bom dia!');
}
else if(hora <=18){
    console.log('Boa tarde!');
}
else{
    console.log('Boa noite!');
}
/*var h = new Date();
var a = document.getElementById('hora')
a.innerHTML = h.getHours()*/