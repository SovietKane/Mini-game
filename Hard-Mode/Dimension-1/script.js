//initial number of cookies    
var num = 0;

var cookie = document.getElementById("cookie");

function cookieClick() { 
    num += 0;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num + "€";      
    //automatic tik-toker to 0.5x
    if(num < 20 ){
        num += 0.5;
        upgradeLevel.innerHTML = "Fortnite Kid";
    }
    if(num >= 20){
        num += 0.75
        upgradeLevel.innerHTML = "Fortnite Kid + Streaming"
    }
    if(num >= 100){
        num += 50
        upgradeLevel.innerHTML = "Fortnite Kid + Streaming + Donation"
    }
    if(num >= 1000){
        num += 500
        upgradeLevel.innerHTML = "Giuppi I"
    }
    if(num >= 50000){
        num += 2000
        upgradeLevel.innerHTML = "Giuppi II"
    }
    if(num >= 400000){
        num += 10000
        upgradeLevel.innerHTML = "Giuppi III"
    }
    if(num >= 3000000){
        num += 50000
        upgradeLevel.innerHTML = "Giuppi IV"
    }
    if(num >= 20000000){
        num += 100000
        upgradeLevel.innerHTML = "Giuppi V"
    }
    if(num >= 50000000){
        num += 500000
        upgradeLevel.innerHTML = "Nicolas I"
    }
    if(num >= 500000000){
        num += 1000000
        upgradeLevel.innerHTML = "Nicolas II"
    }
    if(num >= 10000000000){
        num += 50000000
        upgradeLevel.innerHTML = "Nicolas III"
    }
    if(num >= 550000000000){
        num += 500000000
        upgradeLevel.innerHTML = "Nicolas IV"
    }
    if(num >= 7500000000000){
        num += 1000000000
        upgradeLevel.innerHTML = "Nicolas V"
    }
    if(num >= 20000000000000){
        num += 75000000000
        upgradeLevel.innerHTML = "La Piano"
    }
    if(num >= 3750000000000000000){
        num += 555000000000000
        upgradeLevel.innerHTML = "Hitler"
    }
        
    if (num >= 555000000000000000000){
        num += 1000000000000000000
        upgradeLevel.innerHTML = "Stalin"
    } 
    if(num >= 300000000000000000000000){
        num >= 15000000000000000000000
        upgradeLevel.innerHTML = "Illuminato I"
    }

    if(num >= 7500000000000000000000000000000){
        num >= 100000000000000000000000
        upgradeLevel.innerHTML = "Illuminato II"
    }
    
    if(num >= 100000000000000000000000000000000){
        num >= 	100000000000000000000000000000000
        upgradeLevel.innerHTML = "Illuminato III"
    }
    
    if(num >= 1000000000000000000000000000000000000){
        num >= 	1000000000000000000000000000000000
        upgradeLevel.innerHTML = "Illuminato IV"
    }
    
    if(num >= 1000000000000000000000000000000000000000000){
        num >= 1000000000000000000000000000000000000
        upgradeLevel.innerHTML = "Illuminato V"
    }
    if(num >= 1000000000000000000000000000000000000000000000){
        num += 1000000000000000000000000000000000000000000000000000000000
        upgradeLevel.innerHTML = "Nuova Dimensione Sbloccata!"
        upgradeDimesion.innerHTML = "Clicca qui!"
    }

}
