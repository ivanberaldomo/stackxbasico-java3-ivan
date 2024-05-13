// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {

    let perimetro = 2 * (retangulo.largura + retangulo.altura);
    let area = retangulo.largura * retangulo.altura;
    return { perimetro, area };
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    if (pessoa.idade >= 18)
        ehAdulto = true
    else
        ehAdulto = false
    return ehAdulto;
}


// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    let resultado = '';
    for (let key in obj) {
        resultado += obj[key] + ' ';
    }
    return resultado.trim();
}
module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
