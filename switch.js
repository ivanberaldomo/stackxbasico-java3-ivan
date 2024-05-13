// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    if (number >= 1 && number <= 7) {
        return diasSemana[number - 1];
    } else {
        return "Número inválido";
    }
}
// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    switch (code) {
        case 'A':
            return 10.99;
        case 'B':
            return 5.99;
        case 'C':
            return 7.5;
        default:
            return "Código inválido";
    }
}

// Retorna a categoria do produto com base no tipo de produto
function retornaCategoriaProduto(type) {
    switch (type) {
        case 'Eletrônicos':
            return 'Tecnologia';
        case 'Roupas':
            return 'Moda';
        case 'Alimentos':
            return 'Alimentação';
        default:
            return 'Categoria desconhecida';
    }
}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };