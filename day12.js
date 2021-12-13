const d = ["KF-sr","OO-vy","start-FP","FP-end","vy-mi","vy-KF","vy-na","start-sr","FP-lh","sr-FP","na-FP","end-KF","na-mi","lh-KF","end-lh","na-start","wp-KF","mi-KF","vy-sr","vy-lh","sr-mi"]

function createSystem(data) {
    let caveSystem = [];

    data.forEach(v => {
        let connection = v.split('-');
        connection.forEach(c => {
            if (!caveSystem[c]) {
                caveSystem[c] = {start: (c == "start"), end: (c == "end"), large: (c.match(/^[A-Z]*$/) != null), connections: []};
            }
        });
    });

    data.forEach(v => {
        let connection = v.split('-');
        caveSystem[connection[0]].connections.push(connection[1]);
        caveSystem[connection[1]].connections.push(connection[0]);
    });

    return caveSystem;
}

function getPaths(system) {
    let openPaths = ["start"];
    let trashedPaths = [];
    let closedPaths = [];

    while(openPaths.length) {
        let activePaths = [];

        openPaths.forEach(path => {
            let pointer = path.split(',')[path.split(',').length-1]

            system[pointer].connections.forEach(connection => {
                if (connection == "end") {
                    closedPaths.push(path + ",end");
                } else if (connection == "start") {
                    trashedPaths.push(path + ",start");
                } else if ((connection.match(/^[a-z]*$/) != null) && path.indexOf(connection) != -1) {
                    trashedPaths.push(path + ',' + connection);
                } else {
                    activePaths.push(path + ',' + connection);
                }
            });
        });

        openPaths = activePaths;
    }
    
    return { open: openPaths, closed: closedPaths, trashed: trashedPaths };
}

console.log("The number of possible paths while not visiting smaller caves multiple times are: " + getPaths(createSystem(d)).closed.length);