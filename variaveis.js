var nome ="vinicius" 
console.log(nome)

console.log("---- var ----");
if (true) {
    var exemploVar = "Visível fora do bloco!";
}
console.log(exemploVar); // Funciona, mas pode causar problemas.

console.log("---- let ----");
if (true) {
    let exemploLet = "Visível apenas dentro do bloco!";
    console.log(exemploLet); // Funciona aqui.
}
console.log(exemploLet); // Erro: exemploLet não está definido.

console.log("---- const ----");
const PI = 3.14; // Valor que não muda
console.log(PI); // 3.14
PI = 3.15; // Erro: Não é permitido alterar uma const

function escopoLocal() {
    let local = "aleatorices: "; var nome =("vinicius");
    console.log(nome);
    
    console.log(local);var nome = ("vinicius")
    console.log(nome)    
}

function escopoLocal() {
    let local = "Escopo de função";
    console.log(local);
} 
escopoLocal();
console.log(local); // Erro: 'local' é inacessível fora da função

console.log("---let---")
if(true){
    let isso="isso deu certo";
    console.log(isso);
}

console.log("---const---")
if(true){
    let isso="isso tambem deu certo"
    console.log(isso)
    isso="isso nao da certo"
    console.log(isso)
}