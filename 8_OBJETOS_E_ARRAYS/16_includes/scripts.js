let carros = ["BMW", "Fiat", "VW", "Renault", "Audi"];

//console.log(carros.includes("Fiat"));
//console.log(carros.includes("Ford"));

if(carros.includes("Fiat") == true){
    console.log("o carro que você deseja está disponível");
}

else{
    console.log("não conseguimos encontrar o seu carro! tente novamente");
}