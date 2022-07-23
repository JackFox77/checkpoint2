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
        startprice:100,
        price:100,
        quantity: 0,
        multiplier: autoupgrades.drone.multiplier*2
    },
    autoupsminer: {
        startprice:100,
        price:100,
        quantity: 0,
        multiplier: autoupgrades.miner.multiplier*2
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

// function buyDrone() {
//     let drone = autoupgrades.drone.quantity
//     let droneprice = autoupgrades.drone.price
//     if(cheese>= droneprice){
//         autoupgrades.drone.quantity += 1
//         cheese -= droneprice
//         let tax = autoupgrades.drone.startprice*.25
//         autoupgrades.drone.price+=tax
//     }
//     else (window.alert('not enough mozzarella'))
//     console.log('drone')
//     drawDrone()
//     drawCheese()
//     drawtotalCollected()
// }

// function buyMiner() {
//     let quantity = autoupgrades.miner.quantity
//     let price = autoupgrades.miner.price
//     if (cheese >= price) {
//         autoupgrades.miner.quantity += 1
//         cheese -= price
//         let tax = autoupgrades.miner.startprice*.25
//         autoupgrades.miner.price+=tax
//     }
//     else (window.alert('not enough monterey'))
//     console.log('miner');
//     drawMiner()
//     drawCheese()
//     drawtotalCollected()
// }

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
        let tax = efficiencyUp.autoupsdrone.startprice * 5
        autoupgrades.drone.multiplier *= autoupgrades.drone.multiplier * 1.125
        // note ParseInt(2.675.toFixed(2))
    }
    else (window.alert('not enough gouda'))
    update()
}




// function buyColony() {
//     let quantity = clickupgrades.colony.quantity
//     let price = clickupgrades.colony.price
//     if (cheese >= price) {
//         clickupgrades.colony.quantity += 1
//         cheese -= price
//         let tax = clickupgrades.colony.startprice*.25
//         clickupgrades.colony.price+=tax
//     }
//     else (window.alert('not enough gouda'))
//     console.log('colony')
//     drawColony()
//     drawCheese()
//     drawPerclick()
// }



// function buyDrill() {
//     let drill = clickupgrades.drill.quantity
//     let drillprice = clickupgrades.drill.price
//     if (cheese >= drillprice) {
//         clickupgrades.drill.quantity += 1
//         cheese -= drillprice
//         let tax = clickupgrades.drill.startprice*.25
//         clickupgrades.drill.price+=tax
//     }
//     else (window.alert('not enough cheddar'))
//     console.log('drill');
//     drawDrill()
//     drawCheese()
//     drawPerclick()
// }




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

function drawPrice() {
    document.getElementById('droneprice').innerText = autoupgrades.drone.price
    document.getElementById('drillprice').innerText = clickupgrades.drill.price
    document.getElementById('colonyprice').innerText = clickupgrades.colony.price
    document.getElementById('minerprice').innerText = autoupgrades.miner.price

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