var Oper = {
    "<": function(x,y) { return x < y; },
    "<=": function(x,y) { return x <= y; },
    ">": function(x,y) { return x > y; },
    ">=": function(x,y) { return x >= y; },
}

// var Default_ListRange = 
//     '[\n' + 
//     '    [">=", 0,   "<",  2,   "0   --->  <2   "],\n' + 
//     '    [">=", 2,   "<",  3.5, "2   --->  <3.5 "],\n' +
//     '    [">=", 3.5, "<",  5,   "3.5 --->  <5   "],\n' +
//     '    [">=", 0,   "<",  5,   "0   --->  <5   "],\n' +
//     '    [">=", 5,   "<",  6.5, "5   --->  <6.5 "],\n' +
//     '    [">=", 6.5, "<",  8,   "6.5 --->  <8   "],\n' +
//     '    [">=", 8,   "<=", 10,  "8   --->  10   "],\n' +
//     '    [">=", 5,   "<=", 10,  "5   --->  10   "]\n' +
//     ']';

var ListRange = Default_ListRange;

function GetStatistic() {
    var num = [];
    num.length = ListRange.length;
    for (let i = 0; i < num.length; ++i) {
        num[i] = 0;
    }
    var tx = document.getElementById("txarea1").value;
    var ls = tx.split('\n');
    var result = "";
    var cnt = 0;
    for (let i = 0; i < ls.length; ++i) {
        if (ls[i] == "") continue;
        else if (ls[i][0] == '#') result += ls[i] + '\n';
        else if (ls[i] == "...") {
            for (let j = 0; j < num.length; ++j) {
                result += ListRange[j][4] + ": " + num[j] + '\n';
            }
            result += "Total: " + cnt + '\n';
            result += "-----------------------------\n";
            cnt = 0;
            for (let j = 0; j < num.length; ++j) {
                num[j] = 0;
            }
        }
        else if (ls[i].length >= 2 && ls[i].substring(0,2) == "//") {
            continue;
        }
        else {
            cnt++;
            let x = Number(ls[i]);
            for (let j = 0; j < ListRange.length; ++j) {
                let rg = ListRange[j];
                if (Oper[rg[0]](x,rg[1]) && Oper[rg[2]](x,rg[3])) {
                    num[j]++;
                }
            }
        }
    }
    document.getElementById("txarea2").value = result;
}