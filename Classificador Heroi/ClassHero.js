//Classificador de Nível de heroi
let nomehero = "Joao";
let exphero = 6584;
let nivel;


switch (true) {
    case exphero < 1000:
        nivel = "Nível Ferro";
        break;
    case exphero >=1000 && exphero <2000:
        nivel = "Nível Bronze";
        break;
    case exphero >=2000 && exphero <5000:
        nivel = "Nível Prata";
        break;
    case exphero >=5000 && exphero <7000:
        nivel = "Nível Ouro";
        break;
    case exphero >=7000 && exphero <8000:
        console.log("Nível Platina");
        break;
    case exphero >=8000 && expero <9000:
        nivel = "Nível Ascendente";
        break;
    case exphero >=9000 && exphero <10000:
        nivel = "Nível Imortal";
        break;
    case exphero >= 10000:
        nivel = "Nível Radiante";
        break;
}

console.log("O Heroi " + nomehero + " está no " + nivel)

