const INPUT = [1,2,4,5,5,5,2,1,3,1,4,3,2,1,5,5,1,2,3,4,4,1,2,3,2,1,4,4,1,5,5,1,3,4,4,4,1,2,2,5,1,5,5,3,2,3,1,1,3,5,1,1,2,4,2,3,1,1,2,1,3,1,2,1,1,2,1,2,2,1,1,1,1,5,4,5,2,1,3,2,4,1,1,3,4,1,4,1,5,1,4,1,5,3,2,3,2,2,4,4,3,3,4,3,4,4,3,4,5,1,2,5,2,1,5,5,1,3,4,2,2,4,2,2,1,3,2,5,5,1,3,3,4,3,5,3,5,5,4,5,1,1,4,1,4,5,1,1,1,4,1,1,4,2,1,4,1,3,4,4,3,1,2,2,4,3,3,2,2,2,3,5,5,2,3,1,5,1,1,1,1,3,1,4,1,4,1,2,5,3,2,4,4,1,3,1,1,1,3,4,4,1,1,2,1,4,3,4,2,2,3,2,4,3,1,5,1,3,1,4,5,5,3,5,1,3,5,5,4,2,3,2,4,1,3,2,2,2,1,3,4,2,5,2,5,3,5,5,1,1,1,2,2,3,1,4,4,4,5,4,5,5,1,4,5,5,4,1,1,5,3,3,1,4,1,3,1,1,4,1,5,2,3,2,3,1,2,2,2,1,1,5,1,4,5,2,4,2,2,3];
const MAXAGE = 8;
const DAYS = 80;
const DAYSB = 256;

// Generate map of fish, or generate new day cycle map
function generateMap(input, advance = false) {
    let map = Array(MAXAGE + 1).fill(0);

    for (let i = 0; i < input.length; i++) {
        if (advance) {
            if (i === 0) {
                map[MAXAGE] += input[i];
                map[6] += input[i];
            } else {
                map[i - 1] += input[i];
            }
        } else {
            map[input[i]]++;
        }
    }

    return map;
}

// Sum the values (This could be done as a one-liner, but it looks tidier this way)
function sumMap(input) {
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }

    return sum;
}

// Just DO IT!
function runSimulation(input, days) {
    let map = generateMap(input);

    for (let i = 0; i < days; i++) {
        map = generateMap(map, true);
    }

    return map;
}

document.body.innerHTML += ('<div>Number of lanternfish after ' + DAYS + ' days: ' + sumMap(runSimulation(INPUT, DAYS)) + '</div>');
document.body.innerHTML += ('<div>Number of lanternfish after ' + DAYSB + ' days: ' + sumMap(runSimulation(INPUT, DAYSB)) + '</div>');