//initial number of cookies    
var num = 0;

var cookie = document.getElementById("cookie");
var desNum = prompt("Quanto vuoi guadagnare a click (Solo Numeri!)");

function cookieClick() { 
    num += 0;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");

    var upgradeDimesion = document.getElementById("upgradeDimension");
    
    numbers.innerHTML = num + "€";      
    //automatic tik-toker to 0.5x
    if(num < 2 ){
        num += parseFloat(desNum);
        upgradeLevel.innerHTML = "Tik-toker";
    }
    if(num >= 2){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Youtuber"
    }
    if(num >= 6){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Streamer"
    }
    if(num >= 30){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Streamer + Donation"
    }
    if(num >= 100){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Streamer Famoso"
    }
    if(num >= 500){
        num + parseFloat(desNum)
        upgradeLevel.innerHTML = "Streamer Famoso + Donation"
    }
    if(num >= 5000){
        num + parseFloat(desNum)
        upgradeLevel.innerHTML = "Contadino"
    }
    if(num >= 20000){
        num + parseFloat(desNum)
        upgradeLevel.innerHTML = "Cuoco"
    }
    if(num >= 250000){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Dipendente(Industia)"
    }
    if(num >= 4000000){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Capo di PH"
    }
    if(num >= 5000000000){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Capo di NH"
    }
    if(num >= 7500000000){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Mojang"
    }
    if(num >= 10000000000000){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Marco I"
    }
    if(num >= 37500000000000){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Marco II"
    }
    if(num >= 300000000000000){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Marco III"
    }
    if (num >= 10000000000000000000000){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Marco IV"
    } 
    if(num >= 1000000000000000000000000000){
        num += parseFloat(desNum)
        upgradeLevel.innerHTML = "Nuova Dimensione Sbloccata!"
        upgradeDimesion.innerHTML = "Clicca qui!"
    }
}
//fine funzione