let Day1a = (indata) => {
    let increases = 0;

    indata.forEach((datapoint, index, arr) => {
        if (index) {
            if (datapoint > arr[index - 1]) {
                increases++;
            }
        }
    });

    return increases;
}

let Day1b = (indata) => {
    let increases = 0;

    indata.forEach((datapoint, index, arr) => {
        if (index && index < (arr.length - 2)) {
            let thisValue = arr[index] + arr[index + 1] + arr[index + 2];
            let prevValue = arr[index - 1] + arr[index] + arr[index + 1];

            if (thisValue > prevValue) {
                increases++;
            }
        }
    });

    return increases;
}

document.body.innerHTML += ('<div>Part A increases: ' + Day1a(Day1data) + '</div>');
document.body.innerHTML += ('<div>Part B increases: ' + Day1b(Day1data) + '</div>');