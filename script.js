
var audiotts = document.createElement('audio');

function readtts(sentence , mute){
    if(!mute){
        console.log(sentence, parseInt(sentence), Number.isInteger(parseInt(sentence)))
        audiotts.src = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=vi-VN&client=tw-ob&q=' + sentence;
	    audiotts.play();
        
    }
    
}

// phep nhan - binh phuong

var cached = [];
function splitNumber(s){
    return {
        donvi: s%10,
        chuc: Math.floor((s/10)%10),
        tram: Math.floor((s/100)%10),
        ngan: Math.floor((s/1000)%10),
        chucngan: Math.floor((s/10000)%10)
    }
}

function checkConditionSorobanMulti(s1, s2, length = 2){
    var result = false;
    var number1s = splitNumber(s1);
    var number2s = splitNumber(s2);
    if(length == 2) {
        var memory = number1s.donvi * number2s.donvi;
        var memorizes = splitNumber(memory);

        
        if((number1s.chuc * number2s.donvi + number1s.donvi * number2s.chuc  + memorizes.chuc<= 99)){
            result = true;
        }
    }

    return result;
}


function randMultiSorobanBasic(numb, length = 0){
    var s1 = generateRandomInteger(11, 99);
    var numbers = [];
    var i  = 0;
    var overi = 0;
    var s = 0;

    
    numbers[i] = s1;
    while(true && i < 1 && overi < 2){
        var s2 = generateRandomInteger(11, 99);

        if(checkConditionSorobanMulti(s1, s2, 2)){
            numbers[++i] =  getNumberFromABS2(i, (s2), enable_word);
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

function randMulti13(numb, length = 0){
    var s = generateRandomInteger(1001, 9999);
    
    var numbers = [];
    var i  = 0;
    var overi = 0;
    var donvi = s%10;
    var chuc = Math.floor((s/10)%10);
    var cham = Math.floor((s/100)%10);
    var ngan = Math.floor((s/1000)%10);
    var chucngan = Math.floor((s/10000)%10);

    
    numbers[i] = s;
    while(true && i < 1 && overi < 2){
        // console.error(cached.indexOf(abc))
        if((chuc * 2 + donvi <= 9) && cached.indexOf(s) === -1 ){
            console.error(donvi, chuc, cham, ngan);
            console.error(donvi + chuc, chuc + cham, cham + ngan)
            numbers[++i] =  getNumberFromABS2(i, (12), enable_word);
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

function randMulti12(numb, length = 0){
    var s = generateRandomInteger(1001, 9999);
    
    var numbers = [];
    var i  = 0;
    var overi = 0;
    var donvi = s%10;
    var chuc = Math.floor((s/10)%10);
    var cham = Math.floor((s/100)%10);
    var ngan = Math.floor((s/1000)%10);
    var chucngan = Math.floor((s/10000)%10);

    
    numbers[i] = s;
    while(true && i < 1 && overi < 2){
        // console.error(cached.indexOf(abc))
        if((chuc * 2 + donvi <= 9) && (cham * 2 + chuc <= 9) && (ngan * 2 + cham <= 9) && cached.indexOf(s) === -1 ){
            console.error(donvi, chuc, cham, ngan);
            console.error(donvi + chuc, chuc + cham, cham + ngan)
            numbers[++i] =  getNumberFromABS2(i, (12), enable_word);
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

function randMulti11(numb, length = 0){
    var s = generateRandomInteger(1001, 9999);
    
    var numbers = [];
    var i  = 0;
    var overi = 0;
    var donvi = s%10;
    var chuc = Math.floor((s/10)%10);
    var cham = Math.floor((s/100)%10);
    var ngan = Math.floor((s/1000)%10);
    var chucngan = Math.floor((s/10000)%10);

    
    numbers[i] = s;
    while(true && i < 1 && overi < 2){
        // console.error(cached.indexOf(abc))
        if((chuc + donvi <= 9) && (chuc + cham <= 9) && (cham + ngan <= 9)  && cached.indexOf(s) === -1 ){
            console.error(donvi, chuc, cham, ngan);
            console.error(donvi + chuc, chuc + cham, cham + ngan)
            numbers[++i] =  getNumberFromABS2(i, (11), enable_word);
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

function randMultiEndTheSample(numb, end = 0){
    var s = generateRandomInteger(1, 9);

    if(end == 0){
        end =  generateRandomInteger(1, 9);  
    }
    

    var numbers = [];
    var i  = 1;
    var overi = 0;
    numbers[i++] = (s * 10 + end);
    while(true && i <= 2 && overi < 5000){
        var number = generateRandomInteger(1, 9);
        var abc = (s * 10 + end) * (number * 10 + end);
        // console.error(cached.indexOf(abc))
        if((s + number == 10) && cached.indexOf(s + "x" + number) === -1 ){
            console.error("red", end, s, number, cached)
            cached.push(s + "x" + number);
            s = abc;
            numbers[i++] =  getNumberFromABS2(i, (number * 10 + end), enable_word);
            
        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randMultiEndTheSample(numb, end = 0){
    var s = generateRandomInteger(1, 9);

    if(end == 0){
        end =  generateRandomInteger(1, 9);  
    }
    

    var numbers = [];
    var i  = 1;
    var overi = 0;
    numbers[i++] = (s * 10 + end);
    while(true && i <= 2 && overi < 5000){
        var number = generateRandomInteger(1, 9);
        var abc = (s * 10 + end) * (number * 10 + end);
        // console.error(cached.indexOf(abc))
        if((s + number == 10) && cached.indexOf(abc) === -1 ){
            console.error("red", end, s, number, cached)
            cached.push(s + "x" + number);
            s = abc;
            numbers[i++] =  getNumberFromABS2(i, (number * 10 + end), enable_word);
            
        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randMultiStartTheSample(numb, first = 0){
    var s = generateRandomInteger(1, 9);

    if(first == 0){
        first =  generateRandomInteger(1, 9);  
    }
    

    var numbers = [];
    var i  = 1;
    var overi = 0;
    numbers[i++] = (first * 10 + s);
    while(true && i <= 2 && overi < 5000){
        var number = generateRandomInteger(1, 9);
        var abc = (first * 10 + s) * (first * 10 + number);
        // console.error(cached.indexOf(abc))
        if((s + number == 10) && cached.indexOf(abc) === -1 ){
            console.error("red", first, s, number, cached)
            cached.push(s + "x" + number);
            s = abc;
            numbers[i++] =  getNumberFromABS2(i, (first * 10 + number), enable_word);
            
        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randMultiBy5(numb){
    var s = generateRandomInteger(1, 9);

    var numbers = [];
    var i  = 1;
    var overi = 0;
    numbers[i++] = (s * 10 + 5);
    while(true && i <= 2 && overi < 5000){
        var number = generateRandomInteger(1, 9);
        var abc = (s * 10 + 5) * (number * 10 + 5);
        // console.error(cached.indexOf(abc))
        if((s + number == 10) && cached.indexOf(s + "x" + number) === -1 ){
            console.error("red", s, number, cached)
            cached.push(s + "x" + number);
            s = abc;
            numbers[i++] =  getNumberFromABS2(i, (number * 10 + 5), enable_word);
            
        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function getNumberFromABS2(i, number, flag = true){
    
    if(flag){
        return ("x ") + Math.abs(number);
    }

    return number;
}


function getNumberFromABS(i, number, flag = true){
    
    if(flag){
        return (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(number);
    }

    return number;
}

var enable_word = true;

function randSorobanABL2(numb){

    var s = generateRandomInteger(10, 30);
    var numbers = [];
    var i  = 1;
    var overi = 0;
    numbers[i++] = s;
    while(true && i < numb && overi < 50000){
        var number = generateRandomInteger(1, 19);
        var a = s%10;
        if(!checkABLKetHop(a, number)  && (s + number) < 99){
            s += number;
            numbers[i++] =  getNumberFromABS(i, number, enable_word);
        }

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function randSorobanABL3(numb){

    var allownumber = [5, 6, 7, 8];
    var index = generateRandomInteger(0, 3);
    var s = allownumber[index];
    var numbers = [];
    var i  = 0;
    var overi = 0;
    numbers[i++] =  s;
    while(true && i < numb && overi < 50000){
        var b = generateRandomInteger(-9, 9);
        if(b != 0){
            var a = s%10;
            if(checkABLKetHop(a, b) && (s + b) >= 0 && (s + b) < 99){
                s += b;
                numbers[i++] =  getNumberFromABS(i, b, enable_word);
            }else if(checkNumberSorobanLevel1(a, b) && index > 1  && (s + b) >= 0 &&(s + b) < 99){
                s += b;
                numbers[i++] =  getNumberFromABS(i, b, enable_word);
            }
        }
        

        overi++;
    }

    return {
        numbers: numbers,
        s: s
    }
}

function checkABN(s, number){
    var result = false;
    if((s == 5 || s==0) && (jQuery.inArray( number, [-5,1,2,3,4,0] ) != -1)){
        result = true;
    }else if((s == 6 || s==0) && (jQuery.inArray( number, [1,2,3, -1, -5, -6,0] ) != -1)){
        result = true;
    }else if((s == 7 || s==0) && (jQuery.inArray( number, [1,2, -1, -2, -5, -6, -7,0] ) != -1)){
        result = true;
    }else if((s == 8 || s==0) && (jQuery.inArray( number, [1, -1, -2, -3, -5, -8,0] ) != -1)){
        result = true;
    }else if((s == 9 || s==0) && (jQuery.inArray( number,  [-1,-2,-3,-4, -5, -6,-7,-8,-9,0]) != -1)){
        result = true;
    }else if((s == 4 || s==0) && (jQuery.inArray( number,  [-1, -2, -3, -4, 5,0]) != -1)){
        result = true;
    }else if((s == 3 || s==0) && (jQuery.inArray( number,  [-1, 1, -2, -3, 5,6,0]) != -1)){
        result = true;
    }else if((s == 2 || s==0) && (jQuery.inArray( number,  [-1, 1, -2, 2, 5,6,7,0]) != -1)){
        result = true;
    }else if((s == 1 || s==0) && (jQuery.inArray( number,  [-1, 1, 2, 3, 5, 6, 7, 8,0]) != -1)){
        result = true;
    }
    return result;
}

function checkABN(s, number){
    var result = false;
    if((s == 5 || s==0) && (jQuery.inArray( number, [-5,1,2,3,4,0] ) != -1)){
        result = true;
    }else if((s == 6 || s==0) && (jQuery.inArray( number, [1,2,3, -1, -5, -6,0] ) != -1)){
        result = true;
    }else if((s == 7 || s==0) && (jQuery.inArray( number, [1,2, -1, -2, -5, -6, -7,0] ) != -1)){
        result = true;
    }else if((s == 8 || s==0) && (jQuery.inArray( number, [1, -1, -2, -3, -5, -8,0] ) != -1)){
        result = true;
    }else if((s == 9 || s==0) && (jQuery.inArray( number,  [-1,-2,-3,-4, -5, -6,-7,-8,-9,0]) != -1)){
        result = true;
    }else if((s == 4 || s==0) && (jQuery.inArray( number,  [-1, -2, -3, -4, 5,0]) != -1)){
        result = true;
    }else if((s == 3 || s==0) && (jQuery.inArray( number,  [-1, 1, -2, -3, 5,6,0]) != -1)){
        result = true;
    }else if((s == 2 || s==0) && (jQuery.inArray( number,  [-1, 1, -2, 2, 5,6,7,0]) != -1)){
        result = true;
    }else if((s == 1 || s==0) && (jQuery.inArray( number,  [-1, 1, 2, 3, 5, 6, 7, 8,0]) != -1)){
        result = true;
    }
    return result;
}


// 5 + 9 =>  +10 - 5 + 4
// 5 + 8 =>  +10 - 5 + 3
// 5 + 7 =>  +10 - 5 + 2
// 5 + 6 =>  +10 - 5 + 1


// 6 + 6 =>  +10 - 5 + 1
// 6 + 7 =>  +10 - 5 + 2
// 6 + 8 =>  +10 - 5 + 3

// 7 + 6 =>  +10 - 5 + 1

// 8 + 6 =>  10 - 5 + 1
function checkABLKetHop(a, b){
    if(a == 5 && (b == 9 || b == 8 || b == 7 || b == 6)){
        return true;
    } else if(a == 6 && (b == 6 || b == 7 || b == 8)){
        return true;
    } else if(a == 7 && (b == 6)){
        return true;
    } else if(a == 8 && (b == 6)){
        return true;
    }
    return false;
}

function randSorobanlevel1AA(numb ){
    var s1 = generateRandomInteger(1, 9);
    var number = generateRandomInteger(-9, 9);
    
    var s = 0;
    var numbers = [];
    var rands = [];
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 50000){
        if(number != 0){
            if((s1%10 + number == 5 )){
                var rannums = [-5,1,2,3,4];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word);
                i++;
            }else if((s1%10 + number == 6)){
                var rannums = [1,2,3, -1, -5, -6];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word);
                i++;
            }else if((s1%10 + number == 7)){
                var rannums = [1,2, -1, -2, -5, -6, -7];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word);
                i++;
            }else if((s1%10 + number == 8)){
                var rannums = [1, -1, -2, -3, -5, -8];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word);
                i++;
            }else if((s1%10 + number == 9)){
                var rannums = [-1,-2,-3,-4, -5, -6,-7,-8,-9];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word);
                i++;
            }else if((s1%10 + number == 4)){
                var rannums = [-1, -2, -3, -4, 5];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word);
                i++;
            }else if((s1%10 + number == 3)){
                var rannums = [-1, 1, -2, -3, 5,6];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word);
                i++;
            }else if((s1%10 + number == 2)){
                var rannums = [-1, 1, -2, 2, 5,6,7];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word);
                i++;
            }else if((s1%10 + number == 1) ){
                var rannums = [-1, 1, 2, 3, 5, 6, 7, 8];
                var number = rannums[Math.floor(Math.random() * rannums.length)];
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word);
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

function randSorobanlevel1A(numb, limit = 9){
    var s = 0;
    var numbers = [];
    var rands = [];
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 500000){
        var number = generateRandomInteger(-9, 9);
        
        if(number != 0){
            console.log("ham nay")
            if( 0 < s + number && s + number < limit){
                if((s == 5 || s==0) && (jQuery.inArray( number, [-5,1,2,3,4] ) != -1)){
                    s += number;
                    numbers[i] =  getNumberFromABS(i, number, enable_word);
                    i++;
                }else if((s == 6 || s==0) && (jQuery.inArray( number, [1,2,3, -1, -5, -6] ) != -1)){
                    s += number;
                    numbers[i] =  getNumberFromABS(i, number, enable_word);
                    i++;
                    
                }else if((s == 7 || s==0) && (jQuery.inArray( number, [1,2, -1, -2, -5, -6, -7] ) != -1)){
                    s += number;
                    numbers[i] =  getNumberFromABS(i, number, enable_word);
                    i++;
                }else if((s == 8 || s==0) && (jQuery.inArray( number, [1, -1, -2, -3, -5, -8] ) != -1)){
                    s += number;
                    numbers[i] =  getNumberFromABS(i, number, enable_word);
                    i++;
                }else if((s == 9 || s==0) && (jQuery.inArray( number,  [-1,-2,-3,-4, -5, -6,-7,-8,-9]) != -1)){
                    s += number;
                    numbers[i] =  getNumberFromABS(i, number, enable_word);
                    i++;
                }else if((s == 4 || s==0) && (jQuery.inArray( number,  [-1, -2, -3, -4, 5]) != -1)){
                    s += number;
                    numbers[i] =  getNumberFromABS(i, number, enable_word);
                    i++;
                }else if((s == 3 || s==0) && (jQuery.inArray( number,  [-1, 1, -2, -3, 5,6]) != -1)){
                    s += number;
                    numbers[i] =  getNumberFromABS(i, number, enable_word);
                    i++;
                }else if((s == 2 || s==0) && (jQuery.inArray( number,  [-1, 1, -2, 2, 5,6,7]) != -1)){
                    s += number;
                    numbers[i] =  getNumberFromABS(i, number, enable_word);
                    i++;
                }else if((s == 1 || s==0) && (jQuery.inArray( number,  [-1, 1, 2, 3, 5, 6, 7, 8]) != -1)){
                    s += number;
                    numbers[i] =  getNumberFromABS(i, number, enable_word);
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

function checkNumberSorobanLevel1(s, number){
    var result = false;
    if((s == 5 || s==0) && (jQuery.inArray( number, [-5,1,2,3,4,0] ) != -1)){
        result = true;
    }else if((s == 6 || s==0) && (jQuery.inArray( number, [1,2,3, -1, -5, -6,0] ) != -1)){
        result = true;
    }else if((s == 7 || s==0) && (jQuery.inArray( number, [1,2, -1, -2, -5, -6, -7,0] ) != -1)){
        result = true;
    }else if((s == 8 || s==0) && (jQuery.inArray( number, [1, -1, -2, -3, -5, -8,0] ) != -1)){
        result = true;
    }else if((s == 9 || s==0) && (jQuery.inArray( number,  [-1,-2,-3,-4, -5, -6,-7,-8,-9,0]) != -1)){
        result = true;
    }else if((s == 4 || s==0) && (jQuery.inArray( number,  [-1, -2, -3, -4, 5,0]) != -1)){
        result = true;
    }else if((s == 3 || s==0) && (jQuery.inArray( number,  [-1, 1, -2, -3, 5,6,0]) != -1)){
        result = true;
    }else if((s == 2 || s==0) && (jQuery.inArray( number,  [-1, 1, -2, 2, 5,6,7,0]) != -1)){
        result = true;
    }else if((s == 1 || s==0) && (jQuery.inArray( number,  [-1, 1, 2, 3, 5, 6, 7, 8,0]) != -1)){
        result = true;
    }
    return result;
}

function checkABNManual(s1, number){
    var result = false;
    if((s1== 9 && number == 2) || (s1== 3 && number == 2)){

    }
    return result;
}

function randSorobanlevel2B_(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 500000){

        var s1 = s%10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s/10)%10);
        var number2 = generateRandomInteger(-9, 9);
        
        // if(number != 0 && number2 != 0){
            // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
            //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
            //         s += number * 10 + number2;
            //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
            //         i++;
            //     }
            // }

            if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
                // if(checkABN(s1, number) && checkABN(s2, number2)){
                    s += (number2 * 10 + number);
                    numbers[i] =  getNumberFromABS(i, (number2 * 10 + number), enable_word); 
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

function randSorobanlevel1B(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 500000){

        var s1 = s%10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s/10)%10);
        var number2 = generateRandomInteger(-9, 9);
        
        // if(number != 0 && number2 != 0){
            // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
            //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
            //         s += number * 10 + number2;
            //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
            //         i++;
            //     }
            // }

            if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
                if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
                    s += (number2 * 10 + number);
                    numbers[i] =  getNumberFromABS(i, (number2 * 10 + number), enable_word); 
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

function randSorobanlevel1C_(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 500000){

        var s1 = s%10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s/10)%10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s/100)%10);
        var number3 = generateRandomInteger(-9, 9);
        
        
        // if(number != 0 && number2 != 0){
            // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
            //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
            //         s += number * 10 + number2;
            //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
            //         i++;
            //     }
            // }

            if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && (0 < s3 + number3 && s3 + number3 < limit) && ((number > 0 && number2 > 0&& number3 > 0) || (number < 0 && number2 < 0 && number3 < 0))){
                // if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)  && checkNumberSorobanLevel1(s3, number3)){
                    s += (number3 * 100 + number2 * 10 + number);
                    numbers[i] =  getNumberFromABS(i, (number3 * 100 + number2 * 10 + number), enable_word);
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

function randSorobanlevel1C(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 500000){

        var s1 = s%10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s/10)%10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s/100)%10);
        var number3 = generateRandomInteger(-9, 9);
        
        
        // if(number != 0 && number2 != 0){
            // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
            //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
            //         s += number * 10 + number2;
            //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
            //         i++;
            //     }
            // }

            if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && (0 < s3 + number3 && s3 + number3 < limit) && ((number > 0 && number2 > 0&& number3 > 0) || (number < 0 && number2 < 0 && number3 < 0))){
                if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)  && checkNumberSorobanLevel1(s3, number3)){
                    s += (number3 * 100 + number2 * 10 + number);
                    numbers[i] =  getNumberFromABS(i, (number3 * 100 + number2 * 10 + number), enable_word);
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

function randSorobanlevel1D_(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 500000){

        var s1 = s%10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s/10)%10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s/100)%10);
        var number3 = generateRandomInteger(-9, 9);

        var s4 = Math.floor((s/1000)%10);
        var number4 = generateRandomInteger(-9, 9);
        
        // if(number != 0 && number2 != 0){
            // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
            //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
            //         s += number * 10 + number2;
            //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
            //         i++;
            //     }
            // }

            if((0 <= s1 + number && s1 + number <= limit) && 
               (0 <= s2 + number2 && s2 + number2 <= limit) && 
               (0 <= s3 + number3 && s3 + number3 <= limit) && 
               (0 <= s4 + number4 && s4 + number4 <= limit) && 
               ((number >= 0 && number2 >= 0 && number3 >= 0 && number4 > 0) || (number <= 0 && number2 <= 0 && number3 <= 0 && number4 < 0))){
                // if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2) && checkNumberSorobanLevel1(s3, number3)  && checkNumberSorobanLevel1(s4, number4)){
                    s += (number4 * 1000 + number3 * 100 + number2 * 10 + number);
                    numbers[i] = getNumberFromABS(i, ( number4 * 1000 + number3 * 100 + number2 * 10 + number), enable_word); 
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

function randSorobanlevel1D(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 500000){

        var s1 = s%10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s/10)%10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s/100)%10);
        var number3 = generateRandomInteger(-9, 9);

        var s4 = Math.floor((s/1000)%10);
        var number4 = generateRandomInteger(-9, 9);
        
        // if(number != 0 && number2 != 0){
            // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
            //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
            //         s += number * 10 + number2;
            //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
            //         i++;
            //     }
            // }

            if((0 <= s1 + number && s1 + number <= limit) && 
               (0 <= s2 + number2 && s2 + number2 <= limit) && 
               (0 <= s3 + number3 && s3 + number3 <= limit) && 
               (0 <= s4 + number4 && s4 + number4 <= limit) && 
               ((number >= 0 && number2 >= 0 && number3 >= 0 && number4 > 0) || (number <= 0 && number2 <= 0 && number3 <= 0 && number4 < 0))){
                if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2) && checkNumberSorobanLevel1(s3, number3)  && checkNumberSorobanLevel1(s4, number4)){
                    s += (number4 * 1000 + number3 * 100 + number2 * 10 + number);
                    numbers[i] = getNumberFromABS(i, ( number4 * 1000 + number3 * 100 + number2 * 10 + number), enable_word); 
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

function randSorobanlevel1E(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 500000){

        var s1 = s%10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s/10)%10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s/100)%10);
        var number3 = generateRandomInteger(-9, 9);

        var s4 = Math.floor((s/1000)%10);
        var number4 = generateRandomInteger(-9, 9);

        var s5 = Math.floor((s/10000)%10);
        var number5 = generateRandomInteger(-9, 9);
        
        // if(number != 0 && number2 != 0){
            // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
            //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
            //         s += number * 10 + number2;
            //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
            //         i++;
            //     }
            // }

            if((0 <= s1 + number && s1 + number < limit) && 
               (0 <= s2 + number2 && s2 + number2 <= limit) && 
               (0 <= s3 + number3 && s3 + number3 <= limit) && 
               (0 <= s4 + number4 && s4 + number4 <= limit) && 
               (0 <= s5 + number5 && s5 + number5 <= limit) && 
               ((number >= 0 && number2 >= 0 && number3 >= 0 && number4 >= 0 && number5 > 0) || (number <= 0 && number2 <= 0 && number3 <= 0 && number4 <= 0 && number5 < 0))){

                if(checkNumberSorobanLevel1(s1, number) && 
                checkNumberSorobanLevel1(s2, number2) && 
                checkNumberSorobanLevel1(s3, number3)  && 
                checkNumberSorobanLevel1(s4, number4) &&
                checkNumberSorobanLevel1(s5, number5)){

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

function randSorobanlevel1F(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 500000){

        var s1 = s%10;
        var number = generateRandomInteger(-9, 9);

        var s2 = Math.floor((s/10)%10);
        var number2 = generateRandomInteger(-9, 9);

        var s3 = Math.floor((s/100)%10);
        var number3 = generateRandomInteger(-9, 9);

        var s4 = Math.floor((s/1000)%10);
        var number4 = generateRandomInteger(-9, 9);

        var s5 = Math.floor((s/10000)%10);
        var number5 = generateRandomInteger(-9, 9);

        var s6 = Math.floor((s/10000)%10);
        var number6 = generateRandomInteger(-9, 9);
        
        // if(number != 0 && number2 != 0){
            // if((0 < s1 + number && s1 + number < limit) && (0 < s2 + number2 && s2 + number2 < limit) && ((number > 0 && number2 > 0) || (number < 0 && number2 < 0))){
            //     if(checkNumberSorobanLevel1(s1, number) && checkNumberSorobanLevel1(s2, number2)){
            //         s += number * 10 + number2;
            //         numbers[i] =  (i != 0 ? (number > 0? " + ": " - "): " ") + Math.abs(s) + " (" + number + "" + number2 + ")";
            //         i++;
            //     }
            // }

            if((0 <= s1 + number  && s1 + number  <= limit) && 
               (0 <= s2 + number2 && s2 + number2 <= limit) && 
               (0 <= s3 + number3 && s3 + number3 <= limit) && 
               (0 <= s4 + number4 && s4 + number4 <= limit) && 
               (0 <= s5 + number5 && s5 + number5 <= limit) && 
               (0 <= s6 + number6 && s6 + number6 <= limit) && 
               ((number >= 0 && number2 >= 0 && number3 >= 0 && number4 >= 0 && number5 >= 0 && number6 > 0) || (number <= 0 && number2 <= 0 && number3 <= 0 && number4 <= 0 && number5 <= 0 && number6 < 0 ))){

                if(checkNumberSorobanLevel1(s1, number) && 
                checkNumberSorobanLevel1(s2, number2) && 
                checkNumberSorobanLevel1(s3, number3)  && 
                checkNumberSorobanLevel1(s4, number4) &&
                checkNumberSorobanLevel1(s5, number5) &&
                checkNumberSorobanLevel1(s6, number6)){

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
function randSorobanLeve2A(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 5;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 5000){
        var number = generateRandomInteger(-9, 9);
        if(number != 0){
            if( 0 < s + number && s + number <= limit){
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word);  
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

function randSorobanLeve2B(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 5000){
        var number = generateRandomInteger(-9, 9);
        if(number != 0){
            if( 0 < s + number && s + number <= limit){
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word); 
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

function randSorobanLeve2C(numb, max = 20){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = max;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 5000){
        var number = generateRandomInteger(-max, max);
        if(number != 0){
            if( 0 < s + number && s + number <= limit){
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

function randSorobannhan22(numb, max){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = max || 20;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 5000){
        var number = generateRandomInteger(1, max);
        if(number != 0){
            if( 0 < s + number && s + number <= limit){
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

function randSoroban33(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 99;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 5000){
        var number = generateRandomInteger(-99, 99);
        // var number2 = generateRandomInteger(10,  99);
        // var rand = [number, number2];
        // console.log(rand,generateRandomInteger(0,1),rand[generateRandomInteger(0,1)])
        // number = rand[generateRandomInteger(1,2)];
        var n1ddigit = number%10;
        var n2ddigit = Math.floor((number/10)%10);

        var s1 = s%10;
        var s2 = Math.floor((s/10)%10);


        if(number != 0){
            if((0 <= s1 + n1ddigit && s1 + n1ddigit <= 9) && (0 <= s2 + n2ddigit && s2 + n2ddigit <= 9)){
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

function randSoroban333(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 99;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 5000){
        var number = generateRandomInteger(-999, 999);
        // var number2 = generateRandomInteger(10,  99);
        // var rand = [number, number2];
        // console.log(rand,generateRandomInteger(0,1),rand[generateRandomInteger(0,1)])
        // number = rand[generateRandomInteger(1,2)];
        var n1ddigit = number%10;
        var n2ddigit = Math.floor((number/10)%10);
		var n3ddigit = Math.floor((number/100)%10);

        var s1 = s%10;
        var s2 = Math.floor((s/10)%10);
		var s3 = Math.floor((s/100)%10);


        if(number != 0){
            if((0 <= s1 + n1ddigit && s1 + n1ddigit <= 9) && (0 <= s2 + n2ddigit && s2 + n2ddigit <= 9) && (0 <= s3 + n3ddigit && s3 + n3ddigit <= 9)){
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word); 
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

function randSoroban3333(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 99;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 5000){
        var number = generateRandomInteger(1000, 9999);
        var number2 = generateRandomInteger(-9999,  -1000);
        // var rand = [number, number2];
        // console.log(rand,generateRandomInteger(0,1),rand[generateRandomInteger(0,1)])
        // number = rand[generateRandomInteger(1,2)];
		
		number = generateRandomInteger(number2,number);
		console.log(number);
		
		if( number <= -1000 || number>= 1000){
			var n1ddigit = number%10;
			var n2ddigit = Math.floor((number/10)%10);
			var n3ddigit = Math.floor((number/100)%10);
			var n4ddigit = Math.floor((number/1000)%10);

			var s1 = s%10;
			var s2 = Math.floor((s/10)%10);
			var s3 = Math.floor((s/100)%10);
			var s4 = Math.floor((s/1000)%10);


			if(number != 0){
				if((0 <= s1 + n1ddigit && s1 + n1ddigit <= 9) && (0 <= s2 + n2ddigit && s2 + n2ddigit <= 9) && (0 <= s3 + n3ddigit && s3 + n3ddigit <= 9) && (0 <= s4 + n4ddigit && s4 + n4ddigit <= 9)){
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

function randSoroban44(numb){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 99;
    var i  = 0;
    var overi = 0;
    while(true && i < numb && overi < 5000){
        var number = generateRandomInteger(-99, 99);
        // var number2 = generateRandomInteger(10,  99);
        // var rand = [number, number2];
        // console.log(rand,generateRandomInteger(0,1),rand[generateRandomInteger(0,1)])
        // number = rand[generateRandomInteger(1,2)];
        var n1ddigit = number%10;
        var n2ddigit = Math.floor((number/10)%10);

        var s1 = s%10;
        var s2 = Math.floor((s/10)%10);


        if(number != 0){
            if((0 <= s + number && s + number <= 99)){
                s += number;
                numbers[i] =  getNumberFromABS(i, number, enable_word); 
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

function randSoroban222(num){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 9;
    for(var i = 0 ; i < num; i++){
        var rand = (s < limit? s : limit );
        var number = Math.floor(Math.random() * (rand == 0 ? 9 : rand)) + 1;     // returns a random integer from 0 to 9
        if(s + number > limit){
            s -= number;
            rands[i] = rand;
            numbers[i] = getNumberFromABS(i, number, enable_word); 
        }else{
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
    return Math.floor(min + Math.random()*(max + 1 - min))
}

function randSoroban2Number(){
    var s = 0;
    var s2 = 0;
    var numbers = [];
    var numbers2 = [];
    var rands = [];
    var limit = 9;
    var i = 0;
    var times = 0;
    while(true && i < 36 && times < 5000){
        var rand = (s < limit? s : limit);
        var number = generateRandomInteger(10, 99) ;     // returns a random integer from 0 to 9

        // console.error(number)
        var n1ddigit = number%10;
        var n2ddigit = Math.floor((number/10)%10);
        if((s + n1ddigit >= limit) && (s2 + n2ddigit >= limit)){
            
            if(n1ddigit - s < 0 || n2ddigit - s2 < 0){

            }else if(s - n1ddigit >= 0 && s2 - n2ddigit >= 0){
                // console.log(number, n2ddigit, n1ddigit);
                s -= n1ddigit;
                s2 -= n2ddigit;
                rands[i] = rand;
                numbers[i] = getNumberFromABS(i, number, enable_word); 
                i++;
            }
            
        } else {
            if((s + n1ddigit <= limit) && (s2 + n2ddigit <= limit)){
                s += n1ddigit;
                s2 += n2ddigit;
                rands[i] = rand;
                numbers[i] = (i==0? " " : " + ") + number;
                i++;
            }else if(s - n1ddigit >= 0 && s2 - n2ddigit >= 0){
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


function randSoroban2Number(num){
    var s = 0;
    var numbers = [];
    var rands = [];
    var limit = 99;
    var times = 0;
    var i = 0 ;
    while(true && i < num && times < 5000){
        var rand = (s < limit? s : limit );
        var number = generateRandomInteger(1, 99) ;     // returns a random integer from 0 to 9
        if(s + number >= limit && s - number >= 0){
            console.error(number)
            s -= number;
            rands[i] = rand;
            numbers[i] = getNumberFromABS(i, number, enable_word); 
            i++;
        }else if(s + number <= limit){
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