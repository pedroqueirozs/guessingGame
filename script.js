const numberAleatorio = (Math.random() * (100 - 1) + 1).toFixed(0);
console.log(numberAleatorio)
let tentatives=0
let numberDigitado

while (numberAleatorio != numberDigitado) {
 numberDigitado =  Number(prompt("Digite um numero de 1 a 100"))
if(numberDigitado!=numberAleatorio){
    if(numberDigitado > numberAleatorio){
        alert(`O numero é menor que ${numberDigitado}`)
    }
    else{
        alert(`O numero é maior que ${numberDigitado}`)
    }
}
tentatives ++
}
let msgTentaives = tentatives >1?"tentativas":"tentativa"
console.log(msgTentaives)
if(numberAleatorio == numberDigitado){
alert(`Parabéns você acertou o numero em ${tentatives} ${msgTentaives} `)

}

