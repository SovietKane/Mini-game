//initial number of cookies    
var num = 0;

var cookie = document.getElementById("cookie");

function cookieClick() { 
    num += 0;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");

    var upgradeDimesion = document.getElementById("upgradeDimension");
    
    numbers.innerHTML = num + "€";      
    //automatic tik-toker to 0.5x
    if(num < 2 ){
        num += 0.5;
        upgradeLevel.innerHTML = "Tik-toker";
    }
    if(num >= 0.2){
        num += 1
        upgradeLevel.innerHTML = "Youtuber"
    }
    if(num >= 0.6){
        num += 2
        upgradeLevel.innerHTML = "Streamer"
    }
    if(num >= 3){
        num +=5
        upgradeLevel.innerHTML = "Streamer + Donation"
    }
    if(num >= 10){
        num +=10
        upgradeLevel.innerHTML = "Streamer Famoso"
    }
    if(num >= 50){
        num +=50
        upgradeLevel.innerHTML = "Streamer Famoso + Donation"
    }
    if(num >= 500){
        num +=100
        upgradeLevel.innerHTML = "Contadino"
    }
    if(num >= 2000){
        num +=500
        upgradeLevel.innerHTML = "Cuoco"
    }
    if(num >= 25000){
        num += 1000
        upgradeLevel.innerHTML = "Dipendente(Industia)"
    }
    if(num >= 400000){
        num += 100000
        upgradeLevel.innerHTML = "Capo di PH"
    }
    if(num >= 500000000){
        num += 1000000
        upgradeLevel.innerHTML = "Capo di NH"
    }
    if(num >= 750000000){
        num += 1000000000
        upgradeLevel.innerHTML = "Mojang"
    }
    if(num >= 1000000000000){
        num += 2500000000
        upgradeLevel.innerHTML = "Marco I"
    }
    if(num >= 3750000000000){
        num += 5000000000
        upgradeLevel.innerHTML = "Marco II"
    }
    if(num >= 30000000000000){
        num += 10000000000
        upgradeLevel.innerHTML = "Marco III"
    }
    if (num >= 1000000000000000000000){
        num += 100000000000000000
        upgradeLevel.innerHTML = "Marco IV"
    } 
    if(num >= 100000000000000000000000000){
        num += 1000000000000000000000000000000000000000000000000000000000
        upgradeLevel.innerHTML = "Nuova Dimensione Sbloccata!"
        upgradeDimesion.innerHTML = "Clicca qui!"
    }

}
//fine funzione