const DATA = "COPBCNPOBKCCFFBSVHKO";
const MODEL = {"NS":'H',"FS":'O',"PO":'C',"NV":'N',"CK":'B',"FK":'N',"PS":'C',"OF":'F',"KK":'F',"PP":'S',"VS":'K',"VB":'V',"BP":'P',"BB":'K',"BF":'C',"NN":'V',"NO":'F',"SV":'C',"OK":'N',"PH":'P',"KV":'B',"PN":'O',"FN":'V',"SK":'V',"VC":'K',"BH":'P',"BO":'S',"HS":'H',"HK":'S',"HC":'S',"HF":'B',"PC":'C',"CF":'B',"KN":'H',"CS":'N',"SP":'O',"VH":'N',"CC":'K',"KP":'N',"NP":'C',"FO":'H',"FV":'N',"NC":'F',"KB":'N',"VP":'O',"KO":'F',"CP":'F',"OH":'F',"KC":'H',"NB":'F',"HO":'P',"SC":'N',"FF":'B',"PB":'H',"FB":'K',"SN":'B',"VO":'K',"OO":'N',"NF":'B',"ON":'P',"SF":'H',"FP":'H',"HV":'B',"NH":'B',"CO":'C',"PV":'P',"VV":'K',"KS":'P',"OS":'S',"SB":'P',"OC":'N',"SO":'K',"BS":'B',"CH":'V',"PK":'F',"OB":'P',"CN":'N',"CB":'N',"VF":'O',"VN":'K',"PF":'P',"SH":'H',"FH":'N',"HP":'P',"KF":'V',"BK":'H',"OP":'C',"HH":'F',"SS":'V',"BN":'C',"OV":'F',"HB":'P',"FC":'C',"BV":'H',"VK":'S',"NK":'K',"CV":'K',"HN":'K',"BC":'K',"KH":'P'};

function step(data) {
    let transformedData = "";
    values = [...data];
    values.forEach((v, i) => { transformedData += ((i === 0) ? v : (MODEL[values[i-1] + v] + v)) });
    return transformedData;
}

function findCommon(data, recievedVals = false) {
    let vals = [];
    let lc = null;
    let mc = null;

    if (recievedVals) {
        vals = recievedVals;
    } else {
        [...data].forEach(v => { vals[v] = vals[v] ? vals[v]+1 : 1 });
    }

    for (const [k, v] of Object.entries(vals)) { (lc === null) ? lc = v : (v < lc ? lc = v : lc) }
    for (const [k, v] of Object.entries(vals)) { (mc === null) ? mc = v : (v > mc ? mc = v : mc) }

    return { leastCommon: lc, mostCommon: mc };
}

function createList(data) {
    let list = []
    values = [...data];
    values.forEach((v, i) => {
        if (i !== 0) {
            list[values[i-1] + v] = list[values[i-1] + v] ? list[values[i-1] + v] + 1 : 1;
        }
    });
    return list;
}

function mutateList(data) {
    let newList = [];

    for (const [k, v] of Object.entries(data)) {
        let a = k[0] + MODEL[k];
        let b = MODEL[k] + k[1];

        newList[a] = newList[a] ? newList[a] + v : v;
        newList[b] = newList[b] ? newList[b] + v : v;
    }

    return newList;
}

function countChars(list) {
    let charList = [];

    for (const [k, v] of Object.entries(list)) {
        [...k].forEach(c => { charList[c] = charList[c] ? charList[c] + v : v });
    }

    for (const [k, v] of Object.entries(charList)) {
        charList[k] = Math.ceil(v / 2);
    }

    return charList;
}

// Step one
let workdata = DATA;
for (let i = 0; i < 10; i++) {
    workdata = step(workdata)
}
let workCommon = findCommon(workdata);
console.log("The quantity of the most common subtracted with the least common is: " + (workCommon.mostCommon - workCommon.leastCommon));

// Step two, uses a totaly different approach
let workList = createList(DATA);
for (let i = 0; i < 40; i++) {
    workList = mutateList(workList)
}
let listCommon = findCommon(workList, countChars(workList))
console.log("The quantity of the most common subtracted with the least common is (40 Passes): " + (listCommon.mostCommon - listCommon.leastCommon));
