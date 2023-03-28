function lunchBreak(input) {
    let movieName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    
    let lunchTime = (1 / 8) * breakDuration;
    let leisureTime = (1 / 4) * breakDuration;

    let totalTakenTime = lunchTime + leisureTime;
    let timeLeft = breakDuration - totalTakenTime;

    if(timeLeft >= episodeDuration) {
        let finalTime = Math.ceil(timeLeft - episodeDuration);
        console.log(`You have enough time to watch ${movieName} and left with ${finalTime} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil(episodeDuration - timeLeft);
        console.log(`You don't have enough time to watch ${movieName}, you need ${timeNeeded} more minutes.`)
    }

}

lunchBreak(["Game of Thrones", "60", "96"])