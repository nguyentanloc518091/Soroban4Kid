var Level2 = {
    checkABN: function (s, number){
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
    },
    B: function(numb){
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

                if((0 <= s1 + number && s1 + number <= limit) && (0 <= s2 + number2 && s2 + number2 <= limit) && ((number >= 0 && number2 > 0) || (number <= 0 && number2 < 0))){
                    if(!Level2.checkABN(s1, number) && !Level2.checkABN(s2, number2)){
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
}