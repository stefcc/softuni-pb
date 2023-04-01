function worldSwimmingRecord(input){

    let recordInSecs = Number(input.shift());

    let distanceInMeter = Number(input.shift());

    let timeSecsPerMeter = Number(input.shift());

    let timeNeeded = distanceInMeter*timeSecsPerMeter;

    let timeResistance = Math.floor(distanceInMeter/15).toFixed(0) * 12.5;

    let totalTime = timeNeeded+(timeResistance);

    let difference = Math.abs(totalTime - recordInSecs)

    

    if(recordInSecs>totalTime){

        console.log(`Yes, he succeeded! The new world record is `+`${totalTime.toFixed(2)} ` + `seconds.`);

        

    }else{

        console.log(`No, he failed! He was ` +`${difference.toFixed(2)} `+`seconds slower.`)

    }

}

worldSwimmingRecord(["10464", "1500", "20"])