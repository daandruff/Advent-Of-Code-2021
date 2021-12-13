const d = [[7,2,3,2,3,7,4,3,1,4],[8,5,3,1,1,1,3,7,8,6],[3,4,1,1,7,8,7,8,2,8],[5,4,8,2,2,4,1,3,4,4],[5,8,5,6,8,2,7,7,4,2],[7,6,1,4,5,3,2,7,6,4],[5,3,1,1,3,2,1,7,5,8],[1,2,5,5,1,1,6,1,8,7],[5,8,2,1,2,7,7,7,1,4],[2,6,2,3,8,3,4,7,8,8]];

function energizeIfValid(d, x, y) {
    if (d[y]) {
        if (d[y][x] !== -1 && d[y][x] !== undefined) {
            d[y][x]++;
        }
    }
}

function doStep(d) {
    let allDone = false;
    let numBlinks = 0;

    // Energize all one level
    d.forEach((l, y) => {
        l.forEach((c, x) => {
            d[y][x]++;
        });
    });

    // Blink and re-energize until blinks are done
    while (!allDone) {
        let blinksBefore = numBlinks;
        d.forEach((l, y) => {
            l.forEach((c, x) => {
                if (c > 9 && c !== -1) {
                    d[y][x] = -1;
                    numBlinks++;
                    energizeIfValid(d, x-1, y-1);
                    energizeIfValid(d, x, y-1);
                    energizeIfValid(d, x+1, y-1);
                    energizeIfValid(d, x-1, y);
                    energizeIfValid(d, x+1, y);
                    energizeIfValid(d, x-1, y+1);
                    energizeIfValid(d, x, y+1);
                    energizeIfValid(d, x+1, y+1);
                }
            });
        });

        if (numBlinks == blinksBefore) {
            allDone = true;
        }
    }

    // Reset
    d.forEach((l, y) => {
        l.forEach((c, x) => {
            d[y][x] = (c == -1 ? 0 : c);
        });
    });

    return numBlinks;
}

let totalSum = 0;
let firstSyncronizedStep = -1;
for (let s = 0; s < 1000; s++) {
    let thisStep = doStep(d);
    totalSum += thisStep;

    if (firstSyncronizedStep == -1 && thisStep == 100) {
        firstSyncronizedStep = s + 1;
    }
}
console.log("Total number of flashes after 100 steps: " + totalSum);
console.log("First syncronize step: " + firstSyncronizedStep);
