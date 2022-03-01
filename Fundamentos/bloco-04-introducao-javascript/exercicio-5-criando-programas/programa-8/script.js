// Variáveis para calculo de lucro------------------------------------------------------
    let valorCusto = -500;
    let valorVenda = 1000;
    let quantidadeVendas = 12;


// Estrutura condicional -------------------------------------------------------
    if (valorCusto >= 0 && valorVenda >= 0 && quantidadeVendas >= 0){

        const valorImposto = ((valorCusto * 20) / 100);
        const valorCustoTotal = valorCusto + valorImposto;
        const lucro = valorVenda - valorCustoTotal;
        const lucroTotal = quantidadeVendas * lucro;

        console.log("Seu lucro foi de " + lucroTotal + "!" );

    }
    else {

        console.log("ERRO, Vocẽ possui algum valor impossível.");

    }