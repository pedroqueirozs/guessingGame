const numberAleatorio = (Math.random() * (100 - 1) + 1).toFixed(0);
console.log(numberAleatorio)
let tentatives=0
let numberEntered

while (numberAleatorio != numberEntered) {
 numberEntered =  Number(prompt("Digite um numero de 1 a 100"))
if(numberEntered!=numberAleatorio){
    if(numberEntered > numberAleatorio){
        alert(`O numero é menor que ${numberEntered}`)
    }
    else{
        alert(`O numero é maior que ${numberEntered}`)
    }
}
tentatives ++
}
let msgTentaives = tentatives >1?"tentativas":"tentativa"
console.log(msgTentaives)
if(numberAleatorio == numberEntered){
alert(`Parabéns você acertou o numero em ${tentatives} ${msgTentaives} `)

}

