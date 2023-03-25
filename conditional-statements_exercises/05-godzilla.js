function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clothPricePerActor = Number(input[2]);

    let decorPrice = 0.1 * budget;
    let totalClothPrice = actorsCount * clothPricePerActor;

    if (actorsCount > 150 ) {
        totalClothPrice = 0.9 * totalClothPrice;
    }

    let totalPrice = decorPrice + totalClothPrice;

    if (budget >= totalPrice) {
        let moneyLeft = budget - totalPrice;
        console.log('Action!');
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log('Not enough money!');
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }

}

godzillaVsKong(["20000", "120", "55.5"])