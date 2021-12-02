let Day2a = (indata) => {
    let position = 0;
    let depth = 0;
    
    indata.forEach((instruction) => {
        let splitInstruction = instruction.split(' ');
        let direction = splitInstruction[0];
        let distance = parseInt(splitInstruction[1]);

        switch (direction) {
            case 'forward':
                position += distance;
                break;
            case 'down':
                depth += distance;
                break;
            case 'up':
                depth -= distance;
                break;
            default:
                console.warn('Instruction not clear: ' + instruction);
        }
    });

    return position * depth;
};

let Day2b = (indata) => {
    let position = 0;
    let depth = 0;
    let aim = 0;
    
    indata.forEach((instruction) => {
        let splitInstruction = instruction.split(' ');
        let direction = splitInstruction[0];
        let distance = parseInt(splitInstruction[1]);

        switch (direction) {
            case 'forward':
                position += distance;
                depth += aim * distance;
                break;
            case 'down':
                aim += distance;
                break;
            case 'up':
                aim -= distance;
                break;
            default:
                console.warn('Instruction not clear: ' + instruction);
        }
    });

    return position * depth;
};

document.body.innerHTML += ('<div>The multiplied value of navigation version A is: ' + Day2a(Day2data) + '</div>');
document.body.innerHTML += ('<div>The multiplied value of navigation version B is: ' + Day2b(Day2data) + '</div>');