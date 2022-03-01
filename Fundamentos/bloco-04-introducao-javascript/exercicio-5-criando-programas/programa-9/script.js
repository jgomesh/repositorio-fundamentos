const salario = 3000;

if(salario <= 1556.94 && salario > 0){
    var inss = 0.08;
    var salarioMenosInss = salario - (salario * inss);
    if(salarioMenosInss <= 1903.98){
        var ir = 0;
        var salarioTotal = salarioMenosInss - (salarioMenosInss * ir);
        console.log(salarioTotal);
    }  
}
else if(salario >= 1556.95 && salario <= 2594.92 && salario > 0){
    var inss = 0.09;
    var salarioMenosInss = salario - (salario * inss);
    if(salarioMenosInss <= 1903.98){
        var ir = 0;
        var salarioTotal = salarioMenosInss - (salarioMenosInss * ir);
        console.log(salarioTotal);
    }
    else if(salarioMenosInss >= 1903.99 && salarioMenosInss <= 2826.65){
        var ir = 0.075;
        var parcelaReduzida = 142.80;
        var salarioTotal = salarioMenosInss - (salarioMenosInss * ir) + parcelaReduzida;
        console.log(salarioTotal);
    }
    
}
else if(salario >= 2594.93 && salario <= 5189.82 && salario > 0){
    var inss = 0.11;
    var salarioMenosInss = salario - (salario * inss);
    if(salarioMenosInss >= 1903.99 && salarioMenosInss <= 2826.65){
        var ir = 0.075;
        var parcelaReduzida = 142.80;
        var salarioTotal = salarioMenosInss - (salarioMenosInss * ir) + parcelaReduzida;
        console.log(salarioTotal)
    }
    else if(salarioMenosInss >= 2826.66 && salarioMenosInss <= 3751,05){
        var ir = 0.15;
        var parcelaReduzida = 354.80;
        var salarioTotal = salarioMenosInss - (salarioMenosInss * ir) + parcelaReduzida;
        console.log(salarioTotal);
    }
    else if(salarioMenosInss >= 3751.06 && salarioMenosInss <= 4664.68){
        var ir = 0.225;
        var parcelaReduzida = 636.13;
        var salarioTotal = salarioMenosInss - (salarioMenosInss * ir) + parcelaReduzida;
        console.log(salarioTotal);
    }
}
else if(salario > 5189.82 && salario > 0){
    var inss = 570.88;
    var salarioMenosInss = salario - inss;
    if(salarioMenosInss >= 3751.06 && salarioMenosInss <= 4664.68){
        var ir = 0.225;
        var parcelaReduzida = 636.13;
        var salarioTotal = salarioMenosInss - (salarioMenosInss * ir) + parcelaReduzida;
        console.log(salarioTotal);
    }
    else if(salarioMenosInss > 4664.68){
        var ir = 0.275;
        var parcelaReduzida = 869.36;
        var salarioTotal = salarioMenosInss - (salarioMenosInss * ir) + parcelaReduzida;
        console.log(salarioTotal);
    }
}
else{
    console.log("Valor imposivel!")
}






