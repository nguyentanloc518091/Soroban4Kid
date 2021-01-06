
var lt_tong = [
    { name: "ABN", index: 4, data: "+4", result: "+5-1" },
    { name: "ABN", index: 3, data: "+3", result: "+5-2" },
    { name: "ABN", index: 2, data: "+2", result: "+5-3" },
    { name: "ABN", index: 1, data: "+1", result: "+5-4" },

    { name: "ABN", index: -4, data: "-4", result: "-5+1" },
    { name: "ABN", index: -3, data: "-3", result: "-5+2" },
    { name: "ABN", index: -2, data: "-2", result: "-5+3" },
    { name: "ABN", index: -1, data: "-1", result: "-5+4" },

    { name: "ABL", index: 9, data: "+9", result: "+10 - 1" },
    { name: "ABL", index: 8, data: "+8", result: "+10 - 2" },
    { name: "ABL", index: 7, data: "+7", result: "+10 - 3" },
    { name: "ABL", index: 6, data: "+6", result: "+10 - 4" },
    { name: "ABL", index: 5, data: "+5", result: "+10 - 5" },
    { name: "ABL", index: 4, data: "+4", result: "+10 - 6" },
    { name: "ABL", index: 3, data: "+3", result: "+10 - 7" },
    { name: "ABL", index: 2, data: "+2", result: "+10 - 8" },
    { name: "ABL", index: 1, data: "+1", result: "+10 - 9" },

    { name: "ABL", index: -9, data: "-9", result: "-10 + 1" },
    { name: "ABL", index: -8, data: "-8", result: "-10 + 2" },
    { name: "ABL", index: -7, data: "-7", result: "-10 + 3" },
    { name: "ABL", index: -6, data: "-6", result: "-10 + 4" },
    { name: "ABL", index: -5, data: "-5", result: "-10 + 5" },
    { name: "ABL", index: -4, data: "-4", result: "-10 + 6" },
    { name: "ABL", index: -3, data: "-3", result: "-10 + 7" },
    { name: "ABL", index: -2, data: "-2", result: "-10 + 8" },
    { name: "ABL", index: -1, data: "-1", result: "-10 + 9" },


    { name: "ABLKH", index: "4-6", data: "4-6", result: "-10 + 5 - 1" },
    { name: "ABLKH", index: "4-7", data: "4-7", result: "-10 + 5 - 2" },
    { name: "ABLKH", index: "4-8", data: "4-8", result: "-10 + 5 - 3" },
    { name: "ABLKH", index: "4-9", data: "4-9", result: "-10 + 5 - 4" },

    { name: "ABLKH", index: "5+9", data: "5+9", result: "+10 - 5 + 4" },
    { name: "ABLKH", index: "5+8", data: "5+8", result: "+10 - 5 + 3" },
    { name: "ABLKH", index: "5+7", data: "5+7", result: "+10 - 5 + 2" },
    { name: "ABLKH", index: "5+6", data: "5+6", result: "+10 - 5 + 1" },

    { name: "ABLKH", index: "6+6", data: "6+6", result: "+10 - 5 + 1" },
    { name: "ABLKH", index: "6+7", data: "6+7", result: "+10 - 5 + 2" },
    { name: "ABLKH", index: "6+8", data: "6+8", result: "+10 - 5 + 3" },

    { name: "ABLKH", index: "7+6", data: "7+6", result: "+10 - 5 + 1" },

    { name: "ABLKH", index: "8+6", data: "8+6", result: "+10 - 5 + 1" },

    // 14 - 6 = -10 + 5 - 1
    // 14 - 7 = -10 + 5 - 2
    // 14 - 8 = -10 + 5 - 3
    // 14 - 9 = -10 + 5 - 4

    // 5 + 9 =>  +10 - 5 + 4
    // 5 + 8 =>  +10 - 5 + 3
    // 5 + 7 =>  +10 - 5 + 2
    // 5 + 6 =>  +10 - 5 + 1

    // 6 + 6 =>  +10 - 5 + 1
    // 6 + 7 =>  +10 - 5 + 2
    // 6 + 8 =>  +10 - 5 + 3

    // 7 + 6 =>  +10 - 5 + 1

    // 8 + 6 =>  10 - 5 + 1


]

function lythuyet_ANH_BAN_NHO() {
    var numbers = [];
    var s = 0;
    var cached_lt = [];

    var counter = 0;
    while (counter < 7) {
        var rand = generateRandomInteger(0, 7);
        // if (rand != 0) {
            var abc = lt_tong[rand].index;
            if (cached_lt.indexOf(abc) === -1) {
                numbers.push("Anh Bạn Nhỏ của " + lt_tong[rand].data);
                numbers.push(lt_tong[rand].data + "=" + lt_tong[rand].result);
                cached_lt.push(abc);
                counter++;
            }
        // }
    }


    return {
        numbers: numbers,
        s: s
    }
}

function lythuyet_ANH_BAN_LON() {
    var numbers = [];
    var s = 0;
    var cached_lt = [];

    var counter = 0;
    while (counter < 7) {
        var rand = generateRandomInteger(8, 25);
        // if (rand != 0) {
            var abc = lt_tong[rand].index;
            if (cached_lt.indexOf(abc) === -1) {
                numbers.push("Anh Bạn Lớn của " + lt_tong[rand].data);
                numbers.push(lt_tong[rand].data + "=" + lt_tong[rand].result);
                cached_lt.push(abc);
                counter++;
            }
        // }
    }


    return {
        numbers: numbers,
        s: s
    }
}

function lythuyet_ANH_BAN_NHO_LON() {
    var numbers = [];
    var s = 0;
    var cached_lt = [];

    var counter = 0;
    while (counter < 7) {
        var rand = generateRandomInteger(0, 25);
        // if (rand != 0) {
            var abc = lt_tong[rand].index;
            if (cached_lt.indexOf(abc) === -1) {
                if(rand < 7){
                    numbers.push("Anh Bạn Nhỏ của " + lt_tong[rand].data);
                }else{
                    numbers.push("Anh Bạn Lớn của " + lt_tong[rand].data);
                }
                
                numbers.push(lt_tong[rand].data + "=" + lt_tong[rand].result);
                cached_lt.push(abc);
                counter++;
            }
        // }
    }


    return {
        numbers: numbers,
        s: s
    }
}

String.prototype.toHHMMSS = function () {
    var pad = function (num, size) { return ('000' + num).slice(size * -1); };
    var sec_num = parseInt(this); // don't forget the second param
    sec_num = parseFloat(sec_num).toFixed(3);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var milliseconds = sec_num.slice(-3);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
}

function sec2time(timeInSeconds) {
    var pad = function (num, size) { return ('000' + num).slice(size * -1); },
        time = parseFloat(timeInSeconds).toFixed(3),
        hours = Math.floor(time / 60 / 60),
        minutes = Math.floor(time / 60) % 60,
        seconds = Math.floor(time - minutes * 60),
        milliseconds = time.slice(-3);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
}

function randSorobanPhepNhan1_99(numb) {
    var kq = 0;
    var e = 0;
    var numbers = [];
    for (var i = 0; i < numb; i++) {
        var s1 = generateRandomInteger(2, 10);
        var s2 = 0;
        for (var y = 0; y < 10000; y++) {
            s2 = generateRandomInteger(1, 10);
        }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if (cached.indexOf(strCached) === -1) {
            numbers[e++] = "  " + s1 + "x" + s2;
            numbers[e++] = "=" + kq;
            cached.push(strCached);
        }


    }

    return {
        numbers: numbers,
        s: s2
    }
}

function phepchia(number) {
    var kq = 0;
    var e = 0;
    var numbers = [];
    for (var i = 0; i < number; i++) {
        var s1 = generateRandomInteger(2, 10);
        var s2 = 0;
        for (var y = 0; y < 10000; y++) {
            s2 = generateRandomInteger(1, 10);
        }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if (cached.indexOf(strCached) === -1) {
            numbers[e++] = "  " + kq + ":" + s1;
            numbers[e++] = "=" + s2;
            cached.push(strCached);
        }


    }

    return {
        numbers: numbers,
        s: s2
    }
}

function phepchialevel1(number, a, b, c, d) {
    var kq = 0;
    var e = 0;
    var numbers = [];
    for (var i = 0; i < number; i++) {
        var s1 = generateRandomInteger(a, b);
        var s2 = generateRandomInteger(c, d);

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        console.log(kq)
        if (cached.indexOf(strCached) === -1 && kq <= 99) {
            numbers[e++] = "  " + kq + " : " + s2;
            // numbers[e++] = " = " + s1;
            cached.push(strCached);
        }


    }

    return {
        numbers: numbers,
        s: s1
    }
}

function phepchiadxnd(number, a, b, c, d) {
    var kq = 0;
    var e = 0;
    var numbers = [];
    for (var i = 0; i < number; i++) {
        var s1 = generateRandomInteger(a, b);
        var s2 = 0;
        s2 = generateRandomInteger(c, d);

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if (cached.indexOf(strCached) === -1) {
            numbers[e++] = "  " + kq + " : " + s2;
            // numbers[e++] = " = " + s1;
            cached.push(strCached);
        }


    }

    return {
        numbers: numbers,
        s: s2
    }
}

function phepchiandxnd(number, a, b, c, d) {
    var kq = 0;
    var e = 0;
    var numbers = [];
    for (var i = 0; i < number; i++) {
        var s1 = generateRandomInteger(a, b);
        var s2 = 0;
        // for(var y = 0; y < 10000; y++){
        s2 = generateRandomInteger(c, d);
        // }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if (cached.indexOf(strCached) === -1) {
            numbers[e++] = " " + formatNumber(kq) + " : " + s1;
            numbers[e++] = "=" + formatNumber(s2);
            cached.push(strCached);
        }
    }

    return {
        numbers: numbers,
        s: kq
    }
}

function phepnhanndxnd(number, a, b, c, d) {
    var kq = 0;
    var e = 0;
    var numbers = [];
    for (var i = 0; i < number; i++) {
        var s1 = generateRandomInteger(a, b);
        var s2 = 0;
        // for(var y = 0; y < 10000; y++){
        s2 = generateRandomInteger(c, d);
        // }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if (cached.indexOf(strCached) === -1) {
            numbers[e++] = " " + formatNumber(s1) + " x " + s2;
            numbers[e++] = "=" + formatNumber(kq);
            cached.push(strCached);
        }
    }

    return {
        numbers: numbers,
        s: kq
    }
}

function phepnhanndxnd_less(number, a, b, c, d) {
    var kq = 0;
    var e = 0;
    var numbers = [];
    for (var i = 0; i < number; i++) {
        var s1 = generateRandomInteger(a, b);
        var s2 = 0;
        // for(var y = 0; y < 10000; y++){
        s2 = generateRandomInteger(c, d);
        // }

        kq = s1 * s2;

        var abc = (kq + generateRandomInteger(5, 9));
        var strCached = abc + "" + s1 + "" + s2;
        if (cached.indexOf(strCached) === -1) {
            numbers[e++] = " " + s1 + " x " + "............. <= " + abc;
            // numbers[e++] = "=" + kq;
            cached.push(strCached);
        }
    }

    return {
        numbers: numbers,
        s: kq
    }
}

function phepnha2dx2d() {
    var kq = 0;
    var e = 0;
    var numbers = [];
    for (var i = 0; i < 1; i++) {
        var s1 = generateRandomInteger(11, 99);
        var s2 = 0;
        // for(var y = 0; y < 10000; y++){
        s2 = generateRandomInteger(11, 99);
        // }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if (cached.indexOf(strCached) === -1) {
            numbers[e++] = " " + s1 + " x " + s2;
            cached.push(strCached);
        }


    }

    return {
        numbers: numbers,
        s: kq
    }
}


function phepnhan() {
    var kq = 0;
    var e = 0;
    var numbers = [];
    for (var i = 0; i < 1; i++) {
        var s1 = generateRandomInteger(2, 10);
        var s2 = 0;
        for (var y = 0; y < 10000; y++) {
            s2 = generateRandomInteger(1, 10);
        }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if (cached.indexOf(strCached) === -1) {
            numbers[e++] = " ......... x ......... ";
            cached.push(strCached);
        }


    }

    return {
        numbers: numbers,
        s: kq
    }
}

function phepnhan2() {
    var kq = 0;
    var e = 0;
    var numbers = [];
    for (var i = 0; i < 1; i++) {
        var s1 = generateRandomInteger(2, 10);
        var s2 = 0;
        for (var y = 0; y < 10000; y++) {
            s2 = generateRandomInteger(1, 10);
        }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if (cached.indexOf(strCached) === -1) {
            numbers[e++] = "   " + s1 + " x ............. ";
            cached.push(strCached);
        }


    }

    return {
        numbers: numbers,
        s: kq
    }
}

// 24 x 4 = ?  < 100
function phepnhan3() {
    var kq = 0;
    var e = 0;
    var numbers = [];
    var break_ = false;

    while (kq <= 100 && !break_) {
        var s1 = generateRandomInteger(11, 50);
        var s2 = 0;
        for (var y = 0; y < 100000; y++) {
            s2 = generateRandomInteger(2, 9);
        }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if (cached.indexOf(strCached) === -1 && kq <= 100) {
            numbers[e++] = "   " + s1 + " x " + s2;
            cached.push(strCached);
            break_ = true;
        }
    }

    return {
        numbers: numbers,
        s: kq
    }
}

function phepchia2() {
    var kq = 0;
    var e = 0;
    var numbers = [];
    for (var i = 0; i < 1; i++) {
        var s1 = generateRandomInteger(2, 10);
        var s2 = 0;
        for (var y = 0; y < 10000; y++) {
            s2 = generateRandomInteger(1, 10);
        }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if (cached.indexOf(strCached) === -1) {
            numbers[e++] = "  " + kq + " : ............. ";
            cached.push(strCached);
        }


    }

    return {
        numbers: numbers,
        s: s2
    }
}