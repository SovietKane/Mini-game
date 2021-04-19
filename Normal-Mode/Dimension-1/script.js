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
    if(num < 0.2 ){
        num += 0.5;
        upgradeLevel.innerHTML = "Fortnite Kid";
    }
    if(num >= 0.2){
        num += 0.75
        upgradeLevel.innerHTML = "Fortnite Kid + Streaming"
    }
    if(num >= 1){
        num += 50
        upgradeLevel.innerHTML = "Fortnite Kid + Streaming + Donation"
    }
    if(num >= 10){
        num += 500
        upgradeLevel.innerHTML = "Giuppi I"
    }
    if(num >= 500){
        num += 2000
        upgradeLevel.innerHTML = "Giuppi II"
    }
    if(num >= 4000){
        num += 10000
        upgradeLevel.innerHTML = "Giuppi III"
    }
    if(num >= 30000){
        num += 50000
        upgradeLevel.innerHTML = "Giuppi IV"
    }
    if(num >= 200000){
        num += 100000
        upgradeLevel.innerHTML = "Giuppi V"
    }
    if(num >= 500000){
        num += 500000
        upgradeLevel.innerHTML = "Nicolas I"
    }
    if(num >= 5000000){
        num += 1000000
        upgradeLevel.innerHTML = "Nicolas II"
    }
    if(num >= 100000000){
        num += 50000000
        upgradeLevel.innerHTML = "Nicolas III"
    }
    if(num >= 5500000000){
        num += 500000000
        upgradeLevel.innerHTML = "Nicolas IV"
    }
    if(num >= 75000000000){
        num += 1000000000
        upgradeLevel.innerHTML = "Nicolas V"
    }
    if(num >= 200000000000){
        num += 75000000000
        upgradeLevel.innerHTML = "La Piano"
    }
    if(num >= 37500000000000000){
        num += 555000000000000
        upgradeLevel.innerHTML = "Hitler"
    }
        
    if (num >= 5550000000000000000){
        num += 1000000000000000000
        upgradeLevel.innerHTML = "Stalin"
    } 
    if(num >= 3000000000000000000000){
        num >= 15000000000000000000000
        upgradeLevel.innerHTML = "Illuminato I"
    }

    if(num >= 75000000000000000000000000000){
        num >= 100000000000000000000000
        upgradeLevel.innerHTML = "Illuminato II"
    }
    
    if(num >= 1000000000000000000000000000000){
        num >= 	100000000000000000000000000000000
        upgradeLevel.innerHTML = "Illuminato III"
    }
    
    if(num >= 10000000000000000000000000000000000){
        num >= 	1000000000000000000000000000000000
        upgradeLevel.innerHTML = "Illuminato IV"
    }
    
    if(num >= 10000000000000000000000000000000000000000){
        num >= 1000000000000000000000000000000000000
        upgradeLevel.innerHTML = "Illuminato V"
    }
    if(num >= 10000000000000000000000000000000000000000000){
        num += 1000000000000000000000000000000000000000000000000000000000
        upgradeLevel.innerHTML = "Nuova Dimensione Sbloccata!"
        upgradeDimesion.innerHTML = "Clicca qui!"
    }

}
