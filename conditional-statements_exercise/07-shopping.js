
function shopping(input) {
 
    let peterBudget = Number(input[0]);
    let numberGPUs = Number(input[1]);
    let numberCPUs = Number(input[2]);
    let numberRAMs = Number(input[3]);
 
    let gpusPrice = numberGPUs * 250;
    let cpusPrice = gpusPrice * 0.35;
    let ramsPrice = gpusPrice * 0.10;
    let ramQuantWanted = ramsPrice * numberRAMs;
    let total = gpusPrice + ((cpusPrice) * (numberCPUs)) + ramQuantWanted;
 
    if (numberGPUs >= numberCPUs) {
        total = total * 0.85;   
    }
 
    if (total <= peterBudget) {
        console.log(`You have ${(peterBudget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - peterBudget).toFixed(2)} leva more!`);
    }
 
}

shopping(["920.45",
"3",
"1",
"1"])