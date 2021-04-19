//initial number of cookies    
var num = 0;

var cookie = document.getElementById("cookie");
var sosNum = prompt("Quanto vuoi guadagnare a click (Solo Numeri!)");

function cookieClick() { 
    num += 0;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num + "€";      
    //automatic tik-toker to 0.5x
    if(num < 20 ){
        num += parseFloat(sosNum);
        upgradeLevel.innerHTML = "Fortnite Kid";
    }
    if(num >= 20){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Fortnite Kid + Streaming"
    }
    if(num >= 100){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Fortnite Kid + Streaming + Donation"
    }
    if(num >= 1000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Giuppi I"
    }
    if(num >= 50000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Giuppi II"
    }
    if(num >= 400000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Giuppi III"
    }
    if(num >= 3000000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Giuppi IV"
    }
    if(num >= 20000000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Giuppi V"
    }
    if(num >= 50000000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Nicolas I"
    }
    if(num >= 500000000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Nicolas II"
    }
    if(num >= 10000000000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Nicolas III"
    }
    if(num >= 550000000000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Nicolas IV"
    }
    if(num >= 7500000000000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Nicolas V"
    }
    if(num >= 20000000000000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "La Piano"
    }
    if(num >= 3750000000000000000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Hitler"
    }
        
    if (num >= 555000000000000000000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Stalin"
    } 
    if(num >= 300000000000000000000000){
        num >= parseFloat(sosNum)
        upgradeLevel.innerHTML = "Illuminato I"
    }

    if(num >= 7500000000000000000000000000000){
        num >= parseFloat(sosNum)
        upgradeLevel.innerHTML = "Illuminato II"
    }
    
    if(num >= 100000000000000000000000000000000){
        num >= 	parseFloat(sosNum)
        upgradeLevel.innerHTML = "Illuminato III"
    }
    
    if(num >= 1000000000000000000000000000000000000){
        num >= 	parseFloat(sosNum)
        upgradeLevel.innerHTML = "Illuminato IV"
    }
    
    if(num >= 1000000000000000000000000000000000000000000){
        num >= parseFloat(sosNum)
        upgradeLevel.innerHTML = "Illuminato V"
    }
    if(num >= 1000000000000000000000000000000000000000000000){
        num += parseFloat(sosNum)
        upgradeLevel.innerHTML = "Nuova Dimensione Sbloccata!"
        upgradeDimesion.innerHTML = "Clicca qui!"
    }

}
