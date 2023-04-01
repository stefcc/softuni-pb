function bonusPoints(input) {

    let startingPoints = Number(input[0]);
    let bonusPoints = 0;

    if (startingPoints <= 100) {
        bonusPoints = 5;

    } else if (startingPoints <= 1000) {
        bonusPoints = 0.2 * startingPoints; 
                                                                                                    
    } else {
        bonusPoints = 0.1 * startingPoints;
    }

    if (startingPoints % 2 === 0){
        bonusPoints = bonusPoints + 1;
    }   else if (startingPoints % 10 === 5) {
            bonusPoints = bonusPoints + 2;
        }
    
    console.log(bonusPoints);
    console.log(startingPoints + bonusPoints);
    
    }


bonusPoints(["15875"]);