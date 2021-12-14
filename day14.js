const DATA = "COPBCNPOBKCCFFBSVHKO";
const MODEL = {"NS":'H',"FS":'O',"PO":'C',"NV":'N',"CK":'B',"FK":'N',"PS":'C',"OF":'F',"KK":'F',"PP":'S',"VS":'K',"VB":'V',"BP":'P',"BB":'K',"BF":'C',"NN":'V',"NO":'F',"SV":'C',"OK":'N',"PH":'P',"KV":'B',"PN":'O',"FN":'V',"SK":'V',"VC":'K',"BH":'P',"BO":'S',"HS":'H',"HK":'S',"HC":'S',"HF":'B',"PC":'C',"CF":'B',"KN":'H',"CS":'N',"SP":'O',"VH":'N',"CC":'K',"KP":'N',"NP":'C',"FO":'H',"FV":'N',"NC":'F',"KB":'N',"VP":'O',"KO":'F',"CP":'F',"OH":'F',"KC":'H',"NB":'F',"HO":'P',"SC":'N',"FF":'B',"PB":'H',"FB":'K',"SN":'B',"VO":'K',"OO":'N',"NF":'B',"ON":'P',"SF":'H',"FP":'H',"HV":'B',"NH":'B',"CO":'C',"PV":'P',"VV":'K',"KS":'P',"OS":'S',"SB":'P',"OC":'N',"SO":'K',"BS":'B',"CH":'V',"PK":'F',"OB":'P',"CN":'N',"CB":'N',"VF":'O',"VN":'K',"PF":'P',"SH":'H',"FH":'N',"HP":'P',"KF":'V',"BK":'H',"OP":'C',"HH":'F',"SS":'V',"BN":'C',"OV":'F',"HB":'P',"FC":'C',"BV":'H',"VK":'S',"NK":'K',"CV":'K',"HN":'K',"BC":'K',"KH":'P'};

function step(data) {
    let transformedData = "";
    values = [...data];
    values.forEach((v, i) => { transformedData += ((i === 0) ? v : (MODEL[values[i-1] + v] + v)) });
    return transformedData;
}

function findCommon(data) {
    let vals = []
    let lc = null;
    let mc = null;

    [...data].forEach(v => { vals[v] = vals[v] ? vals[v]+1 : 1 });
    for (const [k, v] of Object.entries(vals)) { (lc === null) ? lc = v : (v < lc ? lc = v : lc) }
    for (const [k, v] of Object.entries(vals)) { (mc === null) ? mc = v : (v > mc ? mc = v : mc) }

    return { leastCommon: lc, mostCommon: mc };
}

let workdata = DATA;
for (let i = 0; i < 10; i++) {
    workdata = step(workdata)
}
let workCommon = findCommon(workdata);
console.log("The quantity of the most common subtracted with the least common is: " + (workCommon.mostCommon - workCommon.leastCommon));