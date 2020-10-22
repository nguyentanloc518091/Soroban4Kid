

String.prototype.toHHMMSS = function () {
    var pad = function(num, size) { return ('000' + num).slice(size * -1); };
    var sec_num = parseInt(this); // don't forget the second param
    sec_num = parseFloat(sec_num).toFixed(3);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    var milliseconds = sec_num.slice(-3);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
}

function sec2time(timeInSeconds) {
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    time = parseFloat(timeInSeconds).toFixed(3),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60),
    milliseconds = time.slice(-3);

    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);
}

function phepchia(){
    var kq = 0;
    var e = 0;
    var numbers = [];
    for(var i = 0; i < 1 ; i++){
        var s1 = generateRandomInteger(2, 10);
        var s2 = 0;
        for(var y = 0; y < 10000; y++){
            s2 = generateRandomInteger(1, 10);
        }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if(cached.indexOf(strCached) === -1){
            numbers[e++] =  "  " + kq + ":" + s1;
            cached.push(strCached);
        }
        

    }

    return {
        numbers: numbers,
        s: s2
    }
}


function phepnhan(){
    var kq = 0;
    var e = 0;
    var numbers = [];
    for(var i = 0; i < 1 ; i++){
        var s1 = generateRandomInteger(2, 10);
        var s2 = 0;
        for(var y = 0; y < 10000; y++){
            s2 = generateRandomInteger(1, 10);
        }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if(cached.indexOf(strCached) === -1){
            numbers[e++] =  " ......... x ......... ";
            cached.push(strCached);
        }
        

    }

    return {
        numbers: numbers,
        s: kq
    }
}

function phepnhan2(){
    var kq = 0;
    var e = 0;
    var numbers = [];
    for(var i = 0; i < 1 ; i++){
        var s1 = generateRandomInteger(2, 10);
        var s2 = 0;
        for(var y = 0; y < 10000; y++){
            s2 = generateRandomInteger(1, 10);
        }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if(cached.indexOf(strCached) === -1){
            numbers[e++] =  "   " + s1 + " x ............. ";
            cached.push(strCached);
        }
        

    }

    return {
        numbers: numbers,
        s: kq
    }
}

// 24 x 4 = ?  < 100
function phepnhan3(){
    var kq = 0;
    var e = 0;
    var numbers = [];
    var break_ = false;

    while(kq <= 100 && !break_){
        var s1 = generateRandomInteger(11, 50);
        var s2 = 0;
        for(var y = 0; y < 100000; y++){
            s2 = generateRandomInteger(2, 9);
        }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if(cached.indexOf(strCached) === -1 && kq <= 100){
            numbers[e++] =  "   " + s1 + " x " + s2;
            cached.push(strCached);
            break_ = true;
        }
    }

    return {
        numbers: numbers,
        s: kq
    }
}

function phepchia2(){
    var kq = 0;
    var e = 0;
    var numbers = [];
    for(var i = 0; i < 1 ; i++){
        var s1 = generateRandomInteger(2, 10);
        var s2 = 0;
        for(var y = 0; y < 10000; y++){
            s2 = generateRandomInteger(1, 10);
        }

        kq = s1 * s2;

        var strCached = kq + "" + s1 + "" + s2;
        if(cached.indexOf(strCached) === -1){
            numbers[e++] =  "  " + kq + " : ............. ";
            cached.push(strCached);
        }
        

    }

    return {
        numbers: numbers,
        s: s2
    }
}