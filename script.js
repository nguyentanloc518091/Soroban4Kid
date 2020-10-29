
var audiotts = document.createElement('audio');

console.log("lythuyet", lythuyet(8, 9, "ABLKH"));
function lythuyet(a, b, type = 'ABN') {
    var result = null;
    var lt = [
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

    ]

    if (checkABLKetHop(a, b)) {
        lt.forEach(element => {
            var name = element.name;
            if (name == 'ABLKH' && (a + "" + b) == element.index) {
                result = element;
            }
        });
        if(result != null){
            return result;
        }
        
    }

    // console.error("checkABN_2",checkABL(a, b), a, b)
    if (checkABN_2(a, b)) {
        console.log("anh bạn nhỏ", a, b)
        lt.forEach(element => {
            var name = element.name;
            if (name == 'ABN' && b == element.index) {
                if (type == 'chuc') {
                    element.data = element.data.replace("4", "40").replace("3", "30").replace("2", "20").replace("1", "10");
                    element.result = element.result.replace("5", "50").replace("4", "40").replace("3", "30").replace("2", "20").replace("1", "10");
                }
                result = element;
            }
        });
        if(result != null){
            return result;
        }
    }

    if (!checkABL(a, b)) {
        lt.forEach(element => {
            var name = element.name;
            if (name == 'ABL' && b == element.index) {
                result = element;
            }
        });
        if(result != null){
            return result;
        }
    }

    

    return result;
}


function Sound(source, volume, loop) {
    this.source = source;
    this.volume = volume;
    this.loop = loop;
    var son;
    this.son = son;
    this.finish = false;
    this.stop = function () {
        document.body.removeChild(this.son);
    }
    this.start = function () {
        if (this.finish) return false;
        this.son = document.createElement("embed");
        this.son.setAttribute("src", this.source);
        this.son.setAttribute("hidden", "true");
        this.son.setAttribute("volume", this.volume);
        this.son.setAttribute("autostart", "true");
        this.son.setAttribute("loop", this.loop);
        document.body.appendChild(this.son);
    }
    this.remove = function () {
        document.body.removeChild(this.son);
        this.finish = true;
    }
    this.init = function (volume, loop) {
        this.finish = false;
        this.volume = volume;
        this.loop = loop;
    }
}


function readtts(sentence, mute, speakEnglish = false) {
    if (mute) {
        console.log(sentence, parseInt(sentence), Number.isInteger(parseInt(sentence)));

        if (!!sentence) {
            // sentence = sentence.replace("- ", "-");
            sentence = sentence.replace("- ", "trừ").replace("+ ", "cộng").replace("-", "trừ").replace("+", "cộng").replace(":", "chia");
            console.error(sentence);
            if (speakEnglish) {
                audiotts.src = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=' + sentence;
            } else {
                sentence = sentence.replace("- ", "-").replace("+", "cộng ");
                audiotts.src = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=vi-VN&client=tw-ob&q=' + sentence;
            }

            audiotts.play();
        } else {
            if (sentence.indexOf("=") != 1) {
                if (speakEnglish) {
                    audiotts.src = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=' + sentence;
                } else {
                    audiotts.src = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=vi-VN&client=tw-ob&q=' + sentence;
                }

                audiotts.play();
            }
        }


    }

}

function getNumberFromABS2(i, number, flag = true) {

    if (flag) {
        return ("x ") + Math.abs(number);
    }

    return number;
}

// 1 số
function randSorobanABLLevel1_phai(numb){
    var lt1 = [];
    var lt2 = [];
    var lt3 = [];
    var lt4 = [];

    var s = generateRandomInteger(1, 9);
    var numbers = [];
    var i = 0;
    var overi = 0;
    numbers[i++] = s;
    while (true && i < numb && overi < 50000) {
        var number = generateRandomInteger(-9, 9);
        if (number != 0) {
            if(checkNumberSorobanLevel1(s, number) && s + number >= 0 && s + number <= 9){
                lt1[i] = lythuyet(s, number, "ABN");
                s += number;
                numbers[i++] = getNumberFromABS(i, number, enable_word);
            }
            overi++;
        }


        
    }

    return {
        numbers: numbers,
        s: s,
        lt1: lt1,
        lt2: lt2,
        lt3: lt3,
        lt4: lt4
    }
}

function randSorobanABLLevel1_trai(numb){
    var lt1 = [];
    var lt2 = [];
    var lt3 = [];
    var lt4 = [];

    var s = generateRandomInteger(1, 9);
    var numbers = [];
    var i = 0;
    var overi = 0;
    numbers[i++] = s;
    while (true && i < numb && overi < 50000) {
        var number = generateRandomInteger(-9, 9);
        if (number != 0) {
            if( checkNumberSorobanLevel1(s, number) && s + number >= 0 && s + number <= 9){
                lt1[i] = lythuyet(s, number, "CHUC");
                s += number * 10;
                numbers[i++] = getNumberFromABS(i, number, enable_word);
            }
            overi++;
            
        }


       
    }

    return {
        numbers: numbers,
        s: s,
        lt1: lt1,
        lt2: lt2,
        lt3: lt3,
        lt4: lt4
    }
}

function randSorobanABLLevel1_tong(numb){
    var lt1 = [];
    var lt2 = [];
    var lt3 = [];
    var lt4 = [];

    var s = generateRandomInteger(1, 9);
    var numbers = [];
    var i = 0;
    var overi = 0;
    numbers[i++] = s;
    while (true && i < numb && overi < 50000) {
        var s1 = s % 10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        var abc = number2 * 10 + number;
        if (abc > 0 && (s + abc) < 99) {
            if( checkNumberSorobanLevel1(s1, number)  && checkNumberSorobanLevel1(s1, number2) && ((s1 + number >= 0 && s1 + number <= 9) && (s2 + number2 >= 0 && s2 + number2 <= 9))){
                lt1[i] = lythuyet(s1, number, "");
                lt2[i] = lythuyet(s2, number2, "");
                s += abc;
                numbers[i++] = getNumberFromABS(i, abc, false);
            }
            overi++;
            
        }
       
    }

    return {
        numbers: numbers,
        s: s,
        lt1: lt1,
        lt2: lt2,
        lt3: lt3,
        lt4: lt4
    }
}

// phep nhan - binh phuong

var cached = [];
function splitNumber(s) {
    return {
        donvi: s % 10,
        chuc: Math.floor((s / 10) % 10),
        tram: Math.floor((s / 100) % 10), 
        ngan: Math.floor((s / 1000) % 10),
        chucngan: Math.floor((s / 10000) % 10)
    }
}

function checkConditionSorobanMulti(s1, s2, length = 2) {
    var result = false;
    var number1s = splitNumber(s1);
    var number2s = splitNumber(s2);
    if (length == 2) {
        var memory = number1s.donvi * number2s.donvi;
        var memorizes = splitNumber(memory);


        if ((number1s.chuc * number2s.donvi + number1s.donvi * number2s.chuc + memorizes.chuc <= 99)) {
            result = true;
        }
    }

    return result;
}


function randMultiSorobanBasic(numb, length = 0) {
    var s1 = generateRandomInteger(11, 99);
    var numbers = [];
    var i = 0;
    var overi = 0;
    var s = 0;


    numbers[i] = s1;
    while (true && i < 1 && overi < 2) {
        var s2 = generateRandomInteger(11, 99);

        if (checkConditionSorobanMulti(s1, s2, 2)) {
            numbers[++i] = getNumberFromABS2(i, (s2), enable_word);
            // cached.push(s);
            s = s1 * s2;
        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randMulti13(numb, length = 0) {
    var s = generateRandomInteger(1001, 9999);

    var numbers = [];
    var i = 0;
    var overi = 0;
    var donvi = s % 10;
    var chuc = Math.floor((s / 10) % 10);
    var cham = Math.floor((s / 100) % 10);
    var ngan = Math.floor((s / 1000) % 10);
    var chucngan = Math.floor((s / 10000) % 10);


    numbers[i] = s;
    while (true && i < 1 && overi < 2) {
        // console.error(cached.indexOf(abc))
        if ((chuc * 2 + donvi <= 9) && cached.indexOf(s) === -1) {
            console.error(donvi, chuc, cham, ngan);
            console.error(donvi + chuc, chuc + cham, cham + ngan)
            numbers[++i] = getNumberFromABS2(i, (12), enable_word);
            cached.push(s);
            s = s * 12;
        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randMulti12(numb, length = 0) {
    var s = generateRandomInteger(1001, 9999);

    var numbers = [];
    var i = 0;
    var overi = 0;
    var donvi = s % 10;
    var chuc = Math.floor((s / 10) % 10);
    var cham = Math.floor((s / 100) % 10);
    var ngan = Math.floor((s / 1000) % 10);
    var chucngan = Math.floor((s / 10000) % 10);


    numbers[i] = s;
    while (true && i < 1 && overi < 2) {
        // console.error(cached.indexOf(abc))
        if ((chuc * 2 + donvi <= 9) && (cham * 2 + chuc <= 9) && (ngan * 2 + cham <= 9) && cached.indexOf(s) === -1) {
            console.error(donvi, chuc, cham, ngan);
            console.error(donvi + chuc, chuc + cham, cham + ngan)
            numbers[++i] = getNumberFromABS2(i, (12), enable_word);
            cached.push(s);
            s = s * 12;
        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randMulti11(numb, length = 0) {
    var s = generateRandomInteger(1001, 9999);

    var numbers = [];
    var i = 0;
    var overi = 0;
    var donvi = s % 10;
    var chuc = Math.floor((s / 10) % 10);
    var cham = Math.floor((s / 100) % 10);
    var ngan = Math.floor((s / 1000) % 10);
    var chucngan = Math.floor((s / 10000) % 10);


    numbers[i] = s;
    while (true && i < 1 && overi < 2) {
        // console.error(cached.indexOf(abc))
        if ((chuc + donvi <= 9) && (chuc + cham <= 9) && (cham + ngan <= 9) && cached.indexOf(s) === -1) {
            console.error(donvi, chuc, cham, ngan);
            console.error(donvi + chuc, chuc + cham, cham + ngan)
            numbers[++i] = getNumberFromABS2(i, (11), enable_word);
            cached.push(s);
            s = s * 11;
        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randMultiEndTheSample(numb, end = 0) {
    var s = generateRandomInteger(1, 9);

    if (end == 0) {
        end = generateRandomInteger(1, 9);
    }


    var numbers = [];
    var i = 1;
    var overi = 0;
    numbers[i++] = (s * 10 + end);
    while (true && i <= 2 && overi < 5000) {
        var number = generateRandomInteger(1, 9);
        var abc = (s * 10 + end) * (number * 10 + end);
        // console.error(cached.indexOf(abc))
        if ((s + number == 10) && cached.indexOf(s + "x" + number) === -1) {
            console.error("red", end, s, number, cached)
            cached.push(s + "x" + number);
            s = abc;
            numbers[i++] = getNumberFromABS2(i, (number * 10 + end), enable_word);

        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randMultiEndTheSample(numb, end = 0) {
    var s = generateRandomInteger(1, 9);

    if (end == 0) {
        end = generateRandomInteger(1, 9);
    }


    var numbers = [];
    var i = 1;
    var overi = 0;
    numbers[i++] = (s * 10 + end);
    while (true && i <= 2 && overi < 5000) {
        var number = generateRandomInteger(1, 9);
        var abc = (s * 10 + end) * (number * 10 + end);
        // console.error(cached.indexOf(abc))
        if ((s + number == 10) && cached.indexOf(abc) === -1) {
            console.error("red", end, s, number, cached)
            cached.push(s + "x" + number);
            s = abc;
            numbers[i++] = getNumberFromABS2(i, (number * 10 + end), enable_word);

        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randMultiStartTheSample(numb, first = 0) {
    var s = generateRandomInteger(1, 9);

    if (first == 0) {
        first = generateRandomInteger(1, 9);
    }


    var numbers = [];
    var i = 1;
    var overi = 0;
    numbers[i++] = (first * 10 + s);
    while (true && i <= 2 && overi < 5000) {
        var number = generateRandomInteger(1, 9);
        var abc = (first * 10 + s) * (first * 10 + number);
        // console.error(cached.indexOf(abc))
        if ((s + number == 10) && cached.indexOf(abc) === -1) {
            console.error("red", first, s, number, cached)
            cached.push(s + "x" + number);
            s = abc;
            numbers[i++] = getNumberFromABS2(i, (first * 10 + number), enable_word);

        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randMultiBy5(numb) {
    var s = generateRandomInteger(1, 9);

    var numbers = [];
    var i = 1;
    var overi = 0;
    numbers[i++] = (s * 10 + 5);
    while (true && i <= 2 && overi < 5000) {
        var number = generateRandomInteger(1, 9);
        var abc = (s * 10 + 5) * (number * 10 + 5);
        // console.error(cached.indexOf(abc))
        if ((s + number == 10) && cached.indexOf(s + "x" + number) === -1) {
            console.error("red", s, number, cached)
            cached.push(s + "x" + number);
            s = abc;
            numbers[i++] = getNumberFromABS2(i, (number * 10 + 5), enable_word);

        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function getNumberFromABS2(i, number, flag = true) {

    if (flag) {
        return ("x ") + Math.abs(number);
    }

    return number;
}


function getNumberFromABS(i, number, flag = true) {

    if (flag) {
        return (i != 0 ? (number > 0 ? " + " : " - ") : " ") + Math.abs(number);
    }

    return number;
}

var enable_word = true;

//randSorobanABLKH_ABN_CONG
function randSorobanABLKH_ABN_CONG(numb) {

    var lt1 = [];
    var lt2 = [];
    var lt3 = [];
    var lt4 = [];

    var s = generateRandomInteger(10, 30);
    var numbers = [];
    var i = 0;
    var overi = 0;
    numbers[i++] = s;
    while (true && i < numb && overi < 50000) {
        var number = generateRandomInteger(-9, 9);
        if (number != 0) {
            var a = s % 10;
            var b = number % 10;
            if ((checkABLKetHop(a, b) || checkABN(a, b)) && 0 < (s + number) && (s + number) < 99) {
                lt1[i] = lythuyet(a, b, "ABLKH");
                // lt2[i] = lythuyet(s2, number2);

                s += number;
                numbers[i++] = getNumberFromABS(i, number, enable_word);
            }
        }


        overi++;
    }

    return {
        numbers: numbers,
        s: s,
        lt1: lt1,
        lt2: lt2,
        lt3: lt3,
        lt4: lt4
    }
}

function randSorobanABLKH_ABN_CONG_DUONG(numb) {

    var s = generateRandomInteger(5, 10);
    var numbers = [];
    var i = 0;
    var overi = 0;
    numbers[i++] = s;
    while (true && i < numb && overi < 50000) {
        var number = generateRandomInteger(-9, 9);
        if (number != 0) {
            var a = s % 10;
            var b = number % 10;
            if ((checkABLKetHop(a, b) || checkABN(a, b)) && 0 < (s + number) && (s + number) < 99) {
                s += number;
                numbers[i++] = getNumberFromABS(i, number, enable_word);
            }
        }


        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randSorobanABLKH_ABN_CONG_AM(numb) {

    var s = generateRandomInteger(10, 30);
    var numbers = [];
    var i = 0;
    var overi = 0;
    numbers[i++] = s;
    while (true && i < numb && overi < 50000) {
        var number = generateRandomInteger(-9, 9);
        if (number != 0) {
            var a = s % 10;
            var b = number % 10;
            if ((checkABLKetHop(a, b) || checkABN(a, b)) && 0 < (s + number) && (s + number) < 99) {
                s += number;
                numbers[i++] = getNumberFromABS(i, number, enable_word);
            }
        }


        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}
var dd = parseInt((6%100)/10);
var s2temp = parseInt((60%100)/10);
var abc = lythuyet(s2temp, -1, "chuc");

console.log("==============", dd, s2temp, abc)

function randSorobanABL1(numb) {

    var lt1 = [];
    var lt2 = [];
    var lt3 = [];
    var lt4 = [];

    var s = generateRandomInteger(70, 99);
    var numbers = [];
    var i = 0;
    var overi = 0;
    numbers[i++] = s;
    while (true && i < numb && overi < 50000) {
        var number_ = generateRandomInteger(-49, -1);
        if(number_ != 0){
            var a = s % 10;
            var b = number_ % 10;
            if (!checkABLKetHop(a, b) && (s + number_) < 99 && (s + number_) >= 0) {

                var s1 = s % 10;
                var number = number_ % 10;

                var s2 = parseInt((s%100)/10);
                var number2 = parseInt((number_%100)/10);

                lt1[i] = lythuyet(s1, number, "ABL");
                lt2[i] = lythuyet(s2, number2, "chuc");

                lt3[i] = null;

                var stemp = s + (number2 * 10);
                var s2temp = parseInt((stemp%100)/10);
                if (s2temp - 1 <= 5 && s2 + number2 < 0 ) {
                    lt3[i] = lythuyet(s2temp, 1, "chuc");
                    console.error("lon >= 10", s2temp, 1)
                }


                s += number_;
                numbers[i++] = getNumberFromABS(i, number_, enable_word);
            }

            overi++;
        }
        
    }

    return {
        numbers: numbers,
        s: s,
        lt1: lt1,
        lt2: lt2,
        lt3: lt3,
        lt4: lt4
    }
}


function randSorobanABL2(numb) {
    var lt1 = [];
    var lt2 = [];
    var lt3 = [];
    var lt4 = [];

    var s = generateRandomInteger(10, 30);
    var numbers = [];
    var i = 0;
    var overi = 0;
    numbers[i++] = s;
    while (true && i < numb && overi < 50000) {
        var number_ = generateRandomInteger(1, 49);
        if(number_ != 0){
            var a = s % 10;
            var b = number % 10;
            if (!checkABLKetHop(a, b) && (s + number_) < 99 && (s + number_) >= 0) {

                var s1 = s % 10;
                var number = number_ % 10;

                var s2 = parseInt((s%100)/10);
                var number2 = parseInt((number_%100)/10);;

                lt1[i] = lythuyet(s1, number, "ABL");
                lt2[i] = lythuyet(s2, number2, "chuc");

                lt3[i] = null;
                var stemp = s + (number2 * 10);
                var s2temp = parseInt((stemp%100)/10);
                if (s2temp + 1 > 9) {
                    lt3[i] = lythuyet(s2temp, 1, "ABL");
                    console.error("lon >= 10", s2temp, 1)
                }


                s += number_;
                numbers[i++] = getNumberFromABS(i, number_, enable_word);
            }

            overi++;
        }
        
    }

    return {
        numbers: numbers,
        s: s,
        lt1: lt1,
        lt2: lt2,
        lt3: lt3,
        lt4: lt4
    }
}

function randSorobanABL3(numb) {

    var allownumber = [5, 6, 7, 8];
    var index = generateRandomInteger(0, 3);
    var s = allownumber[index];
    var numbers = [];
    var i = 0;
    var overi = 0;
    numbers[i] = s;
    while (true && i < numb && overi < 50000) {
        var b = generateRandomInteger(-9, 9);
        if (b != 0) {
            var a = s % 10;
            if (checkABLKetHop(a, b) && (s + b) >= 0 && (s + b) < 99) {
                s += b;
                numbers[i++] = getNumberFromABS(i, b, enable_word);
            } else if (checkNumberSorobanLevel1(a, b) && index > 1 && (s + b) >= 0 && (s + b) < 99) {
                s += b;
                numbers[i++] = getNumberFromABS(i, b, enable_word);
            }
        }


        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function checkABL(s, number) {
    var result = false;
    if(s + number >= 0){
        if ((s == 0) && (jQuery.inArray(number, [1, 2, 3, 4, 5, 6, 7, 8, 9]) != -1)) {
            result = true;
            return result;
        } else if ((s == 5 || s == 0) && (jQuery.inArray(number, [-5, 1, 2, 3, 4, 0]) != -1)) {
            result = true;
            return result;
        } else if ((s == 6 || s == 0) && (jQuery.inArray(number, [1, 2, 3, -1, -5, -6, 0]) != -1)) {
            result = true;
            return result;
        } else if ((s == 7 || s == 0) && (jQuery.inArray(number, [1, 2, -1, -2, -5, -6, -7, 0]) != -1)) {
            result = true;
            return result;
        } else if ((s == 8 || s == 0) && (jQuery.inArray(number, [1, -1, -2, -3, -5, -6, -7, -8, 0]) != -1)) {
            result = true;
            return result;
        } else if ((s == 9 || s == 0) && (jQuery.inArray(number, [-1, -2, -3, -4, -5, -6, -7, -8, -9, 0]) != -1)) {
            result = true;
            return result;
        } else if ((s == 4 || s == 0) && (jQuery.inArray(number, [-1, -2, -3, -4, 5, 0]) != -1)) {
            result = true;
            return result;
        } else if ((s == 3 || s == 0) && (jQuery.inArray(number, [-1, 1, -2, -3, 5, 6, 0]) != -1)) {
            result = true;
            return result;
        } else if ((s == 2 || s == 0) && (jQuery.inArray(number, [-1, 1, -2, 2, 5, 6, 7, 0]) != -1)) {
            result = true;
            return result;
        } else if ((s == 1 || s == 0) && (jQuery.inArray(number, [-1, 1, 2, 3, 5, 6, 7, 8, 0]) != -1)) {
            result = true;
            return result;
        }
    }
    
    return result;
}


function checkABN(s, number) {
    var result = false;
    if ((s == 5 || s == 0) && (jQuery.inArray(number, [-5, 1, 2, 3, 4, 0]) != -1)) {
        result = true;
    } else if ((s == 6 || s == 0) && (jQuery.inArray(number, [1, 2, 3, -1, -5, -6, 0]) != -1)) {
        result = true;
    } else if ((s == 7 || s == 0) && (jQuery.inArray(number, [1, 2, -1, -2, -5, -6, -7, 0]) != -1)) {
        result = true;
    } else if ((s == 8 || s == 0) && (jQuery.inArray(number, [1, -1, -2, -3, -5, -6, -7, -8, 0]) != -1)) {
        result = true;
    } else if ((s == 9 || s == 0) && (jQuery.inArray(number, [-1, -2, -3, -4, -5, -6, -7, -8, -9, 0]) != -1)) {
        result = true;
    } else if ((s == 4 || s == 0) && (jQuery.inArray(number, [-1, -2, -3, -4, 5, 0]) != -1)) {
        result = true;
    } else if ((s == 3 || s == 0) && (jQuery.inArray(number, [-1, 1, -2, -3, 5, 6, 0]) != -1)) {
        result = true;
    } else if ((s == 2 || s == 0) && (jQuery.inArray(number, [-1, 1, -2, 2, 5, 6, 7, 0]) != -1)) {
        result = true;
    } else if ((s == 1 || s == 0) && (jQuery.inArray(number, [-1, 1, 2, 3, 5, 6, 7, 8, 0]) != -1)) {
        result = true;
    }
    return result;
}

function checkABN_2(s, number) {
    var result = false;

    
    if(s + number > 0){
        console.error("++++++", s, number)
        if ((s == 5) && (jQuery.inArray(number, [-1, -2, -3, -4]) != -1)) {
            result = true;
        } else if ((s == 6) && (jQuery.inArray(number, [-4, -3, -2]) != -1)) {
            result = true;
        } else if ((s == 7) && (jQuery.inArray(number, [-4, -3]) != -1)) {
            result = true;
        } else if ((s == 8) && (jQuery.inArray(number, [-4]) != -1)) {
            result = true;
        } else if ((s == 4) && (jQuery.inArray(number, [1, 2, 3, 4]) != -1)) {
            result = true;
        } else if ((s == 3) && (jQuery.inArray(number, [2, 3, 4]) != -1)) {
            result = true;
        } else if ((s == 2) && (jQuery.inArray(number, [3, 4]) != -1)) {
            result = true;
        } else if ((s == 1) && (jQuery.inArray(number, [4]) != -1)) {
            result = true;
        }
    }
    
    return result;
}

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
function checkABLKetHop(a, b) {
    if (a == 5 && (b == 9 || b == 8 || b == 7 || b == 6)) {
        return true;
    } else if (a == 6 && (b == 6 || b == 7 || b == 8)) {
        return true;
    } else if (a == 7 && (b == 6)) {
        return true;
    } else if (a == 8 && (b == 6)) {
        return true;
    } else if (a == 4 && (b == -9 || b == -8 || b == -7 || b == -6)) {
        return true;
    }

    console.log(a, b)
    return false;
}

function randSorobanlevel1AA(numb) {
    var s1 = generateRandomInteger(1, 9);
    var number = generateRandomInteger(-9, 9);

    var s = 0;
    var numbers = [];
    var rands = [];
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 50000) {
        if (number != 0) {
            if ((s1 % 10 + number == 5)) {
                var rannums = [-5, 1, 2, 3, 4];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            } else if ((s1 % 10 + number == 6)) {
                var rannums = [1, 2, 3, -1, -5, -6];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            } else if ((s1 % 10 + number == 7)) {
                var rannums = [1, 2, -1, -2, -5, -6, -7];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            } else if ((s1 % 10 + number == 8)) {
                var rannums = [1, -1, -2, -3, -5, -8];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            } else if ((s1 % 10 + number == 9)) {
                var rannums = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            } else if ((s1 % 10 + number == 4)) {
                var rannums = [-1, -2, -3, -4, 5];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            } else if ((s1 % 10 + number == 3)) {
                var rannums = [-1, 1, -2, -3, 5, 6];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            } else if ((s1 % 10 + number == 2)) {
                var rannums = [-1, 1, -2, 2, 5, 6, 7];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            } else if ((s1 % 10 + number == 1)) {
                var rannums = [-1, 1, 2, 3, 5, 6, 7, 8];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            }
        }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s
    }
}

function randSorobanlevel1A(numb, limit = 9) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 500000) {
        var number = generateRandomInteger(-9, 9);

        if (number != 0) {
            console.log("ham nay")
            if (0 < s + number && s + number < limit) {
                if ((s == 5 || s == 0) && (jQuery.inArray(number, [-5, 1, 2, 3, 4]) != -1)) {
                    s += number;
                    numbers[i] = getNumberFromABS(i, number, enable_word);
                    i++;
                } else if ((s == 6 || s == 0) && (jQuery.inArray(number, [1, 2, 3, -1, -5, -6]) != -1)) {
                    s += number;
                    numbers[i] = getNumberFromABS(i, number, enable_word);
                    i++;

                } else if ((s == 7 || s == 0) && (jQuery.inArray(number, [1, 2, -1, -2, -5, -6, -7]) != -1)) {
                    s += number;
                    numbers[i] = getNumberFromABS(i, number, enable_word);
                    i++;
                } else if ((s == 8 || s == 0) && (jQuery.inArray(number, [1, -1, -2, -3, -5, -8]) != -1)) {
                    s += number;
                    numbers[i] = getNumberFromABS(i, number, enable_word);
                    i++;
                } else if ((s == 9 || s == 0) && (jQuery.inArray(number, [-1, -2, -3, -4, -5, -6, -7, -8, -9]) != -1)) {
                    s += number;
                    numbers[i] = getNumberFromABS(i, number, enable_word);
                    i++;
                } else if ((s == 4 || s == 0) && (jQuery.inArray(number, [-1, -2, -3, -4, 5]) != -1)) {
                    s += number;
                    numbers[i] = getNumberFromABS(i, number, enable_word);
                    i++;
                } else if ((s == 3 || s == 0) && (jQuery.inArray(number, [-1, 1, -2, -3, 5, 6]) != -1)) {
                    s += number;
                    numbers[i] = getNumberFromABS(i, number, enable_word);
                    i++;
                } else if ((s == 2 || s == 0) && (jQuery.inArray(number, [-1, 1, -2, 2, 5, 6, 7]) != -1)) {
                    s += number;
                    numbers[i] = getNumberFromABS(i, number, enable_word);
                    i++;
                } else if ((s == 1 || s == 0) && (jQuery.inArray(number, [-1, 1, 2, 3, 5, 6, 7, 8]) != -1)) {
                    s += number;
                    numbers[i] = getNumberFromABS(i, number, enable_word);
                    i++;
                }

            }
        }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s
    }
}

function checkNumberSorobanLevel1(s, number) {
    var result = false;
    if ((s == 5 || s == 0) && (jQuery.inArray(number, [-5, 1, 2, 3, 4, 0]) != -1)) {
        result = true;
    } else if ((s == 6 || s == 0) && (jQuery.inArray(number, [1, 2, 3, -1, -5, -6, 0]) != -1)) {
        result = true;
    } else if ((s == 7 || s == 0) && (jQuery.inArray(number, [1, 2, -1, -2, -5, -6, -7, 0]) != -1)) {
        result = true;
    } else if ((s == 8 || s == 0) && (jQuery.inArray(number, [1, -1, -2, -3, -5, -8, 0]) != -1)) {
        result = true;
    } else if ((s == 9 || s == 0) && (jQuery.inArray(number, [-1, -2, -3, -4, -5, -6, -7, -8, -9, 0]) != -1)) {
        result = true;
    } else if ((s == 4 || s == 0) && (jQuery.inArray(number, [-1, -2, -3, -4, 5, 0]) != -1)) {
        result = true;
    } else if ((s == 3 || s == 0) && (jQuery.inArray(number, [-1, 1, -2, -3, 5, 6, 0]) != -1)) {
        result = true;
    } else if ((s == 2 || s == 0) && (jQuery.inArray(number, [-1, 1, -2, 2, 5, 6, 7, 0]) != -1)) {
        result = true;
    } else if ((s == 1 || s == 0) && (jQuery.inArray(number, [-1, 1, 2, 3, 5, 6, 7, 8, 0]) != -1)) {
        result = true;
    }
    return result;
}

function checkABNManual(s1, number) {
    var result = false;
    if ((s1 == 9 && number == 2) || (s1 == 3 && number == 2)) {

    }
    return result;
}

function randSorobanlevel2B_(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;
    var lt1 = [];
    var lt2 = [];
    var lt3 = [];
    var lt4 = [];
    while (true && i < numb && overi < 500000) {

        var s1 = s % 10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        // if(number != 0 && number2 != 0){
        // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
        //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
        //         s += number * 10 + number2;
        //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
        //         i++;
        //     }
        // }

        if ((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))) {
            // if(checkABN(s1, number) && checkABN(s2, number2)){
            lt1[i] = lythuyet(s1, number);
            lt2[i] = lythuyet(s2, number2);
            s += (number2 * 10 + number);
            numbers[i] = getNumberFromABS(i, (number2 * 10 + number), enable_word);
            i++;
            // }
        }
        // }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s,
        lt1: lt1,
        lt2: lt2,
        lt3: lt3,
        lt4: lt4
    }
}

function randSorobanlevel2B_phai(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;
    var lt1 = [];
    var lt2 = [];
    var lt3 = [];
    var lt4 = [];
    while (true && i < numb && overi < 5000) {

        var s1 = s % 10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        // if(number != 0 && number2 != 0){
        // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
        //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
        //         s += number * 10 + number2;
        //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
        //         i++;
        //     }
        // }

        if ((0 < s1 + number && s1 + number < limit) && number != 0) {
            // if(checkABN(s1, number) && checkABN(s2, number2)){
            lt1[i] = lythuyet(s % 10, number);
            s += number;
            numbers[i] = getNumberFromABS(i, (number), enable_word);
            i++;
            // }
        }
        // }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s,
        lt1: lt1,
        lt2: lt2,
        lt3: lt3,
        lt4: lt4
    }
}

function randSorobanlevel2B_trai(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;
    var lt1 = [];
    var lt2 = [];
    var lt3 = [];
    var lt4 = [];
    while (true && i < numb && overi < 500000) {

        var s1 = s % 10;
        var number = 0;

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        // if(number != 0 && number2 != 0){
        // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
        //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
        //         s += number * 10 + number2;
        //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
        //         i++;
        //     }
        // }

        if ((0 <= s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number >= 0 && number2 > 0) || (number <= 0 && number2 < 0))) {
            // if(checkABN(s1, number) && checkABN(s2, number2)){
            console.log("=====", Math.floor((s / 10) % 10))
            lt2[i] = lythuyet(Math.floor((s / 10) % 10), number2, 'chuc');
            s += (number2 * 10 + number);
            numbers[i] = getNumberFromABS(i, (number2 * 10 + number), enable_word);
            i++;
            // }
        }
        // }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s,
        lt1: lt1,
        lt2: lt2,
        lt3: lt3,
        lt4: lt4
    }
}

function randSorobanlevel3B(numb, observer) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;

    var lt1 = [];
    var lt2 = [];
    var lt3 = [];
    var lt4 = [];

    while (true && i < numb && overi < 500000) {

        var s1 = s % 10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        // if(number != 0 && number2 != 0){
        // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
        //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
        //         s += number * 10 + number2;
        //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
        //         i++;
        //     }
        // }    
        if ((0 <= s1 + number && s1 + number <= limit) && (0 <= s2 + number2 && s2 + number2 <= limit) && ((number >= 0 && number2 > 0) || (number <= 0 && number2 < 0))) {
            if (checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)) {

                lt1[i] = lythuyet(s1, number);
                lt2[i] = lythuyet(s2, number2);
                lt3[i] = null;
                s += (number2 * 10 + number);
                numbers[i] = getNumberFromABS(i, (number2 * 10 + number), enable_word);
                i++;

            }

        } else if ((0 <= s1 + number && s1 + number > limit) && (0 <= s2 + number2 && s2 + number2 <= limit) && ((number >= 0 && number2 > 0) || (number <= 0 && number2 < 0)) && (s + (number2 * 10 + number)) <= 99) {
            console.error(s % 10, (number2 * 10 + number) % 10);
            if ((!checkABLKetHop(s % 10, (number2 * 10 + number) % 10))) {

                lt1[i] = lythuyet(s1, number, "ABL");
                lt2[i] = lythuyet(s2, number2, "chuc");
                lt3[i] = null;
                if (s1 + number > 9) {
                    var stemp = s + (number2 * 10);
                    var s2temp = Math.floor((stemp / 10) % 10);
                    lt3[i] = lythuyet(s2temp, 1, "chuc");
                    console.error("lon >= 10", s2temp, 1)
                }


                s += (number2 * 10 + number);
                numbers[i] = getNumberFromABS(i, (number2 * 10 + number), enable_word);
                i++;
                observer("bài này khá khó");
            }



        }
        // }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s,
        lt1: lt1,
        lt2: lt2,
        lt3: lt3,
        lt4: lt4
    }
}

function randSorobanlevel1B(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;

    var lt1 = [];
    var lt2 = [];
    var lt3 = [];
    var lt4 = [];

    while (true && i < numb && overi < 500000) {

        var s1 = s % 10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        // if(number != 0 && number2 != 0){
        // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
        //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
        //         s += number * 10 + number2;
        //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
        //         i++;
        //     }
        // }

        if ((0 <= s1 + number && s1 + number <= limit) && (0 <= s2 + number2 && s2 + number2 <= limit) && ((number >= 0 && number2 > 0) || (number <= 0 && number2 < 0))) {
            if (checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)) {
                s += (number2 * 10 + number);
                numbers[i] = getNumberFromABS(i, (number2 * 10 + number), enable_word);
                i++;
            }
        }
        // }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s,
        lt1: lt1,
        lt2: lt2,
        lt3: lt3,
        lt4: lt4
    }
}

function randSorobanlevel1C_(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 500000) {

        var s1 = s % 10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s / 100) % 10);
        var number3 = generateRandomInteger(-9, 9);


        // if(number != 0 && number2 != 0){
        // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
        //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
        //         s += number * 10 + number2;
        //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
        //         i++;
        //     }
        // }

        if ((0 <= s1 + number && s1 + number <= limit) && (0 <= s2 + number2 && s2 + number2 <= limit) && (0 <= s3 + number3 && s3 + number3 <= limit) && ((number >= 0 && number2 >= 0 && number3 > 0) || (number <= 0 && number2 <= 0 && number3 < 0))) {
            // if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)  && checkNumberSorobanLevel1(s3, number3)){
            s += (number3 * 100 + number2 * 10 + number);
            numbers[i] = getNumberFromABS(i, (number3 * 100 + number2 * 10 + number), enable_word);
            i++;
            // }
        }
        // }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s
    }
}

function randSorobanlevel1C(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 500000) {

        var s1 = s % 10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s / 100) % 10);
        var number3 = generateRandomInteger(-9, 9);


        // if(number != 0 && number2 != 0){
        // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
        //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
        //         s += number * 10 + number2;
        //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
        //         i++;
        //     }
        // }

        if ((0 <= s1 + number && s1 + number <= limit) && (0 <= s2 + number2 && s2 + number2 <= limit) && (0 <= s3 + number3 && s3 + number3 <= limit) && ((number >= 0 && number2 >= 0 && number3 > 0) || (number <= 0 && number2 <= 0 && number3 < 0))) {
            if (checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2) && checkNumberSorobanLevel1(s3, number3)) {
                s += (number3 * 100 + number2 * 10 + number);
                numbers[i] = getNumberFromABS(i, (number3 * 100 + number2 * 10 + number), enable_word);
                i++;
            }
        }
        // }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s
    }
}

function randSorobanlevel1D_(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 500000) {

        var s1 = s % 10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s / 100) % 10);
        var number3 = generateRandomInteger(-9, 9);

        var s4 = Math.floor((s / 1000) % 10);
        var number4 = generateRandomInteger(-9, 9);

        // if(number != 0 && number2 != 0){
        // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
        //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
        //         s += number * 10 + number2;
        //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
        //         i++;
        //     }
        // }

        if ((0 <= s1 + number && s1 + number <= limit) &&
            (0 <= s2 + number2 && s2 + number2 <= limit) &&
            (0 <= s3 + number3 && s3 + number3 <= limit) &&
            (0 <= s4 + number4 && s4 + number4 <= limit) &&
            ((number >= 0 && number2 >= 0 && number3 >= 0 && number4 > 0) || (number <= 0 && number2 <= 0 && number3 <= 0 && number4 < 0))) {
            // if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2) && checkNumberSorobanLevel1(s3, number3)  && checkNumberSorobanLevel1(s4, number4)){
            s += (number4 * 1000 + number3 * 100 + number2 * 10 + number);
            numbers[i] = getNumberFromABS(i, (number4 * 1000 + number3 * 100 + number2 * 10 + number), enable_word);
            i++;
            // }
        }
        // }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s
    }
}

function randSorobanlevel1D(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 500000) {

        var s1 = s % 10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s / 100) % 10);
        var number3 = generateRandomInteger(-9, 9);

        var s4 = Math.floor((s / 1000) % 10);
        var number4 = generateRandomInteger(-9, 9);

        // if(number != 0 && number2 != 0){
        // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
        //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
        //         s += number * 10 + number2;
        //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
        //         i++;
        //     }
        // }

        if ((0 <= s1 + number && s1 + number <= limit) &&
            (0 <= s2 + number2 && s2 + number2 <= limit) &&
            (0 <= s3 + number3 && s3 + number3 <= limit) &&
            (0 <= s4 + number4 && s4 + number4 <= limit) &&
            ((number >= 0 && number2 >= 0 && number3 >= 0 && number4 > 0) || (number <= 0 && number2 <= 0 && number3 <= 0 && number4 < 0))) {
            if (checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2) && checkNumberSorobanLevel1(s3, number3) && checkNumberSorobanLevel1(s4, number4)) {
                s += (number4 * 1000 + number3 * 100 + number2 * 10 + number);
                numbers[i] = getNumberFromABS(i, (number4 * 1000 + number3 * 100 + number2 * 10 + number), enable_word);
                i++;
            }
        }
        // }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s
    }
}

function randSorobanlevel1E(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 500000) {

        var s1 = s % 10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s / 100) % 10);
        var number3 = generateRandomInteger(-9, 9);

        var s4 = Math.floor((s / 1000) % 10);
        var number4 = generateRandomInteger(-9, 9);

        var s5 = Math.floor((s / 10000) % 10);
        var number5 = generateRandomInteger(-9, 9);

        // if(number != 0 && number2 != 0){
        // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
        //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
        //         s += number * 10 + number2;
        //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
        //         i++;
        //     }
        // }

        if ((0 <= s1 + number && s1 + number < limit) &&
            (0 <= s2 + number2 && s2 + number2 <= limit) &&
            (0 <= s3 + number3 && s3 + number3 <= limit) &&
            (0 <= s4 + number4 && s4 + number4 <= limit) &&
            (0 <= s5 + number5 && s5 + number5 <= limit) &&
            ((number >= 0 && number2 >= 0 && number3 >= 0 && number4 >= 0 && number5 > 0) || (number <= 0 && number2 <= 0 && number3 <= 0 && number4 <= 0 && number5 < 0))) {

            if (checkNumberSorobanLevel1(s1, number) &&
                checkNumberSorobanLevel1(s2, number2) &&
                checkNumberSorobanLevel1(s3, number3) &&
                checkNumberSorobanLevel1(s4, number4) &&
                checkNumberSorobanLevel1(s5, number5)) {

                s += (number5 * 10000 + number4 * 1000 + number3 * 100 + number2 * 10 + number);
                numbers[i] = getNumberFromABS(i, (number5 * 10000 + number4 * 1000 + number3 * 100 + number2 * 10 + number), enable_word);
                i++;
            }
        }
        // }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s
    }
}

function randSorobanlevel1F(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 500000) {

        var s1 = s % 10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s / 10) % 10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s / 100) % 10);
        var number3 = generateRandomInteger(-9, 9);

        var s4 = Math.floor((s / 1000) % 10);
        var number4 = generateRandomInteger(-9, 9);

        var s5 = Math.floor((s / 10000) % 10);
        var number5 = generateRandomInteger(-9, 9);

        var s6 = Math.floor((s / 10000) % 10);
        var number6 = generateRandomInteger(-9, 9);

        // if(number != 0 && number2 != 0){
        // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
        //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
        //         s += number * 10 + number2;
        //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
        //         i++;
        //     }
        // }

        if ((0 <= s1 + number && s1 + number <= limit) &&
            (0 <= s2 + number2 && s2 + number2 <= limit) &&
            (0 <= s3 + number3 && s3 + number3 <= limit) &&
            (0 <= s4 + number4 && s4 + number4 <= limit) &&
            (0 <= s5 + number5 && s5 + number5 <= limit) &&
            (0 <= s6 + number6 && s6 + number6 <= limit) &&
            ((number >= 0 && number2 >= 0 && number3 >= 0 && number4 >= 0 && number5 >= 0 && number6 > 0) || (number <= 0 && number2 <= 0 && number3 <= 0 && number4 <= 0 && number5 <= 0 && number6 < 0))) {

            if (checkNumberSorobanLevel1(s1, number) &&
                checkNumberSorobanLevel1(s2, number2) &&
                checkNumberSorobanLevel1(s3, number3) &&
                checkNumberSorobanLevel1(s4, number4) &&
                checkNumberSorobanLevel1(s5, number5) &&
                checkNumberSorobanLevel1(s6, number6)) {

                s += (number6 * 100000 + number5 * 10000 + number4 * 1000 + number3 * 100 + number2 * 10 + number);
                numbers[i] = getNumberFromABS(i, (number6 * 100000 + number5 * 10000 + number4 * 1000 + number3 * 100 + number2 * 10 + number), enable_word);
                i++;
            }
        }
        // }
        overi++;
    }

    console.log(numbers)
    return {
        numbers: numbers,
        s: s
    }
}

//
function randSorobanLeve2A(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 5;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 5000) {
        var number = generateRandomInteger(-9, 9);
        if (number != 0) {
            if (0 < s + number && s + number <= limit) {
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            }
        }
        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randSorobanLeve2B(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 5000) {
        var number = generateRandomInteger(-9, 9);
        if (number != 0) {
            if (0 < s + number && s + number <= limit) {
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            }
        }
        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randSorobanLeve2C(numb, max = 20) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = max;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 5000) {
        var number = generateRandomInteger(-max, max);
        if (number != 0) {
            if (0 < s + number && s + number <= limit) {
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            }
        }
        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randSorobannhan22(numb, max) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = max || 20;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 5000) {
        var number = generateRandomInteger(1, max);
        if (number != 0) {
            if (0 < s + number && s + number <= limit) {
                s *= number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            }
        }
        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randSoroban33(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 99;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 5000) {
        var number = generateRandomInteger(-99, 99);
        // var number2 = generateRandomInteger(10,  99);
        // var rand = [number, number2];
        // console.log(rand,generateRandomInteger(0,1),rand[generateRandomInteger(0,1)])
        // number = rand[generateRandomInteger(1,2)];
        var n1ddigit = number % 10;
        var n2ddigit = Math.floor((number / 10) % 10);

        var s1 = s % 10;
        var s2 = Math.floor((s / 10) % 10);


        if (number != 0) {
            if ((0 <= s1 + n1ddigit && s1 + n1ddigit <= 9) && (0 <= s2 + n2ddigit && s2 + n2ddigit <= 9)) {
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            }
        }
        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randSoroban333(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 99;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 5000) {
        var number = generateRandomInteger(-999, 999);
        // var number2 = generateRandomInteger(10,  99);
        // var rand = [number, number2];
        // console.log(rand,generateRandomInteger(0,1),rand[generateRandomInteger(0,1)])
        // number = rand[generateRandomInteger(1,2)];
        var n1ddigit = number % 10;
        var n2ddigit = Math.floor((number / 10) % 10);
        var n3ddigit = Math.floor((number / 100) % 10);

        var s1 = s % 10;
        var s2 = Math.floor((s / 10) % 10);
        var s3 = Math.floor((s / 100) % 10);


        if (number != 0) {
            if ((0 <= s1 + n1ddigit && s1 + n1ddigit <= 9) && (0 <= s2 + n2ddigit && s2 + n2ddigit <= 9) && (0 <= s3 + n3ddigit && s3 + n3ddigit <= 9)) {
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            }
        }
        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randSoroban3333(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 99;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 5000) {
        var number = generateRandomInteger(1000, 9999);
        var number2 = generateRandomInteger(-9999, -1000);
        // var rand = [number, number2];
        // console.log(rand,generateRandomInteger(0,1),rand[generateRandomInteger(0,1)])
        // number = rand[generateRandomInteger(1,2)];

        number = generateRandomInteger(number2, number);
        console.log(number);

        if (number <= -1000 || number >= 1000) {
            var n1ddigit = number % 10;
            var n2ddigit = Math.floor((number / 10) % 10);
            var n3ddigit = Math.floor((number / 100) % 10);
            var n4ddigit = Math.floor((number / 1000) % 10);

            var s1 = s % 10;
            var s2 = Math.floor((s / 10) % 10);
            var s3 = Math.floor((s / 100) % 10);
            var s4 = Math.floor((s / 1000) % 10);


            if (number != 0) {
                if ((0 <= s1 + n1ddigit && s1 + n1ddigit <= 9) && (0 <= s2 + n2ddigit && s2 + n2ddigit <= 9) && (0 <= s3 + n3ddigit && s3 + n3ddigit <= 9) && (0 <= s4 + n4ddigit && s4 + n4ddigit <= 9)) {
                    s += number;
                    numbers[i] = getNumberFromABS(i, number, enable_word);
                    i++;
                }
            }
        }


        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randSoroban44(numb) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 99;
    var i = 0;
    var overi = 0;
    while (true && i < numb && overi < 5000) {
        var number = generateRandomInteger(-99, 99);
        // var number2 = generateRandomInteger(10,  99);
        // var rand = [number, number2];
        // console.log(rand,generateRandomInteger(0,1),rand[generateRandomInteger(0,1)])
        // number = rand[generateRandomInteger(1,2)];
        var n1ddigit = number % 10;
        var n2ddigit = Math.floor((number / 10) % 10);

        var s1 = s % 10;
        var s2 = Math.floor((s / 10) % 10);


        if (number != 0) {
            if ((0 <= s + number && s + number <= 99)) {
                s += number;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            }
        }
        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randSoroban222(num) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    for (var i = 0; i < num; i++) {
        var rand = (s < limit ? s : limit);
        var number = Math.floor(Math.random() * (rand == 0 ? 9 : rand)) + 1;     // returns a random integer from 0 to 9
        if (s + number > limit) {
            s -= number;
            rands[i] = rand;
            numbers[i] = getNumberFromABS(i, number, enable_word);
        } else {
            s += number;
            rands[i] = rand;
            numbers[i] = getNumberFromABS(i, number, enable_word);
        }

    }

    return {
        numbers: numbers,
        s: s
    }

}

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

function randSoroban2Number() {
    var s = 0;
    var s2 = 0;
    var numbers = [];
    var numbers2 = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var times = 0;
    while (true && i < 36 && times < 5000) {
        var rand = (s < limit ? s : limit);
        var number = generateRandomInteger(10, 99);     // returns a random integer from 0 to 9

        // console.error(number)
        var n1ddigit = number % 10;
        var n2ddigit = Math.floor((number / 10) % 10);
        if ((s + n1ddigit >= limit) && (s2 + n2ddigit >= limit)) {

            if (n1ddigit - s < 0 || n2ddigit - s2 < 0) {

            } else if (s - n1ddigit >= 0 && s2 - n2ddigit >= 0) {
                // console.log(number, n2ddigit, n1ddigit);
                s -= n1ddigit;
                s2 -= n2ddigit;
                rands[i] = rand;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            }

        } else {
            if ((s + n1ddigit <= limit) && (s2 + n2ddigit <= limit)) {
                s += n1ddigit;
                s2 += n2ddigit;
                rands[i] = rand;
                numbers[i] = (i == 0 ? " " : " + ") + number;
                i++;
            } else if (s - n1ddigit >= 0 && s2 - n2ddigit >= 0) {
                // console.log(number, n2ddigit, n1ddigit);
                s -= n1ddigit;
                s2 -= n2ddigit;
                rands[i] = rand;
                numbers[i] = getNumberFromABS(i, number, enable_word);
                i++;
            }

        }

        times++;
        // if(s + number >= limit && s2 + number2 >= limit){
        //     s -= number;
        //     s2 -= number2;
        //     rands[i] = rand;
        //     numbers[i] = " - " + (number2) + ""+ number;
        //     i++;
        // }else if(s + number < limit && s2 + number2 < limit){
        //     s += number;
        //     s2 += number2;
        //     rands[i] = rand;
        //     numbers[i] = " + " + (number2) + ""+ number;
        //     i++;
        // }  

    }

    return {
        numbers: numbers,
        s: s,
        s2: s2
    }
}


function randSoroban2Number(num) {
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 99;
    var times = 0;
    var i = 0;
    while (true && i < num && times < 5000) {
        var rand = (s < limit ? s : limit);
        var number = generateRandomInteger(1, 99);     // returns a random integer from 0 to 9
        if (s + number >= limit && s - number >= 0) {
            console.error(number)
            s -= number;
            rands[i] = rand;
            numbers[i] = getNumberFromABS(i, number, enable_word);
            i++;
        } else if (s + number <= limit) {
            console.error(number)
            s += number;
            rands[i] = rand;
            numbers[i] = getNumberFromABS(i, number, enable_word);
            i++;
        }


        times++;
    }

    return {
        numbers: numbers,
        s: s
    }
}