//uso de if else
/*var hora = 19
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia!')
}
else if (hora <= 18) {
    console.log('Boa tarde!')
}
else if (hora <= 24) {
    console.log('Boa noite!')
} */

   //hora atual
var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${minuto} horas`)
if (hora < 12) {
    console.log('Bom dia!')
}
else if (hora <= 18) {
    console.log('Boa tarde!')
}
else if (hora <= 24) {
    console.log('Boa noite!')
}
