const autoupgrades = {
    drone: {
        startprice:10,
        price: 10,
        quantity: 0,
        multiplier: 1,
        
        
    },
    miner: {
        startprice:100,
        price: 100,
        quantity: 0,
        multiplier: 10,
    },
    factory: {
        startprice: 1000,
        price: 1000,
        quantity: 0,
        multiplier: 75
    },
    transport:{
        startprice: 5000,
        price: 5000,
        quantity: 0,
        multiplier: 300
    }
}

const clickupgrades = {
    drill: {
        startprice:50,
        price: 50,
        quantity: 0,
        multiplier:0.25

    },
    colony: {
        startprice:100,
        price: 100,
        quantity: 0,
        multiplier:3
    },
    spaceship: {
        startprice:300,
        price: 300,
        quantity: 0,
        multiplier:10
    },
    assistant: {
        startprice:1000,
        price: 1000,
        quantity: 0,
        multiplier:25
    }
}

const efficiencyUp={
    autoupsdrone: { 
        startprice:1000,
        price:1000,
        quantity: 0,
    },
    autoupsminer: {
        startprice:3000,
        price:3000,
        quantity: 0,
    }
}

const clickeffup = {
    clickupdrill:{
        startprice: 1500,
        price: 1500,
        quantity: 0,
    },
    clickupcolony: {
        startprice: 4000,
        price: 4000,
        quantity:0
    }
}


let cheese=0

function clickCheese() {
    cheese += 1+clickupgrades.drill.multiplier*clickupgrades.drill.quantity+clickupgrades.colony.multiplier*clickupgrades.colony.quantity
    drawCheese()
}

function buyAutoUp(name) {
    // debugger
    let upgrade = autoupgrades[name]
    // console.log(name)
    if (cheese >= upgrade.price) {
        upgrade.quantity += 1
        cheese -= upgrade.price
        let tax = upgrade.startprice * .25
        upgrade.price+=tax
    }
    else (window.alert('not enough cheddar'))
    // console.log('clickerbot')
    update()
}


function buyClickUp(name) {
    let upgrade = clickupgrades[name]
    console.log(name)
    if (cheese >= upgrade.price) {
        upgrade.quantity += 1
        cheese -= upgrade.price
        let tax = upgrade.startprice * .25
        upgrade.price+=tax
    }
    else (window.alert('not enough cheddar'))
    update()
    drawPerclick()
}

function incEfficiencydrone() {
    if (cheese >= efficiencyUp.autoupsdrone.price) {
        efficiencyUp.autoupsdrone.quantity += 1
        cheese -= efficiencyUp.autoupsdrone.price
        let tax = efficiencyUp.autoupsdrone.startprice * 15
        efficiencyUp.autoupsdrone.price+=tax
        autoupgrades.drone.multiplier *= 1.125
        // note ParseInt(2.675.toFixed(2))
    }
    else (window.alert('not enough gouda'))
    update()
}

function incEfficiencyminer() {
    if (cheese >= efficiencyUp.autoupsminer.price) {
        efficiencyUp.autoupsminer.quantity += 1
        cheese -= efficiencyUp.autoupsminer.price
        let tax = efficiencyUp.autoupsminer.price * 15
        efficiencyUp.autoupsminer.price += tax
        autoupgrades.miner.multiplier*=1.125
    }
    else (window.alert('not enough gouda'))
    update()
}

function incEfficiencydrill() {
    if (cheese >= clickeffup.clickupdrill.price) {
        clickeffup.clickupdrill.quantity += 1
        cheese -= clickeffup.clickupdrill.price
        let tax = clickeffup.clickupdrill.price * 15
        clickeffup.clickupdrill.price += tax
         clickupgrades.drill.multiplier *= 1.125
    }
    else (window.alert('not enough gouda'))
    update()
    drawPerclick()
}

function incEfficiencycolony() {
    if (cheese >= clickeffup.clickupcolony.price) {
        clickeffup.clickupcolony.quantity += 1
        cheese -= clickeffup.clickupcolony.price
        let tax = clickeffup.clickupcolony.price * 15
        clickeffup.clickupcolony.price+=tax
        clickupgrades.colony.multiplier*=1.125
    }
    else (window.alert('not enough gouda'))
    update()
    drawPerclick()
}

function drawCheese() {
    document.getElementById('cheesemined').innerText = cheese
    
}

function drawDrone() {
    document.getElementById('drone').innerText = autoupgrades.drone.quantity
}

function drawMiner() {
    document.getElementById('miner').innerText = autoupgrades.miner.quantity
}

function drawDrill() {
    document.getElementById('drill').innerText= clickupgrades.drill.quantity
}

function drawColony() {
    document.getElementById('colony').innerText= clickupgrades.colony.quantity
}

function drawEff1() {
    document.getElementById('droneeff').innerText = efficiencyUp.autoupsdrone.quantity
    document.getElementById('minereff').innerText = efficiencyUp.autoupsminer.quantity
    document.getElementById('drilleff').innerText = clickeffup.clickupdrill.quantity
    document.getElementById('colonyeff').innerText= clickeffup.clickupcolony.quantity
}



function drawPrice() {
    document.getElementById('droneprice').innerText = autoupgrades.drone.price
    document.getElementById('drillprice').innerText = clickupgrades.drill.price
    document.getElementById('colonyprice').innerText = clickupgrades.colony.price
    document.getElementById('minerprice').innerText = autoupgrades.miner.price
    document.getElementById('droneff').innerText = efficiencyUp.autoupsdrone.price
    document.getElementById('minerff').innerText = efficiencyUp.autoupsminer.price
    document.getElementById('drillff').innerText = clickeffup.clickupdrill.price
    document.getElementById('colonyff').innerText= clickeffup.clickupcolony.price

}

function drawtotalCollected() {
    autototal = (autoupgrades.miner.multiplier * autoupgrades.miner.quantity) + (autoupgrades.drone.multiplier * autoupgrades.drone.quantity),
    document.getElementById('autoSec').innerText = autototal
    
}

function drawPerclick(){
    total = 1 + (clickupgrades.colony.multiplier * clickupgrades.colony.quantity) + (clickupgrades.drill.multiplier * clickupgrades.drill.quantity)
    document.getElementById('persec').innerText = total
    update()
}

function update() {
    drawColony()
    drawDrill()
    drawMiner()
    drawDrone()
    drawPrice()
    drawtotalCollected()
    drawCheese()
    drawEff1()
}
drawPerclick()
update()

function collectAutodrone() {
    total = autoupgrades.drone.multiplier * autoupgrades.drone.quantity
    cheese += total
    drawCheese()
}

function collectAutominer() {
    total = autoupgrades.miner.multiplier * autoupgrades.miner.quantity
    cheese += total
    drawCheese()
}


setInterval(collectAutodrone, 3000)
setInterval(collectAutominer, 3000)
setInterval(update,1000)