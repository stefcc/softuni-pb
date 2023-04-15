function solve(time, partOfDay) {
    time = Number(time);
    if (time >= 10 && time < 18) {
        switch (partOfDay) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
                console.log('open');
                break;
            case 'Sunday':
                console.log('closed');
                break;
            default:
                console.log('closed');
                break;
        }
    } else {
        console.log('closed');
    }
}
solve(["10", "Monday"]);