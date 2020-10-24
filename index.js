$(document).ready(function () {

    var Topics = function (name, value, type = 'basic', description = '') {
        this.name = name;
        this.value = value;
        this.type = type;
        this.description = description;
    };

    var ViewModel = function (first, last) {
        var self = this;

        this.isSetting = ko.observable(true);
        this.number_temp = ko.observableArray();
        var random_color = ko.observableArray(['#fcba03', '#ff3700', '#a2ff00', '#00d154', '#377a52', '#366075', '#1b4357', '#6b7c85', '#23346b', '#2e4ba6', '#6d1bbf']);
        this.image_loading = ko.observable();

        this.colorText = ko.observable("black");

        this.timer = ko.observable(3);
        this.numberrange = ko.observable(4);
        this.level = ko.observable(0);

        this.soroban = ko.observable();
        this.isLoading = ko.observable(true);
        this.isLastNumber = ko.observable(false);
        var interval_timer = null;
        this.sentence = ko.observable(0);

        this.mute = ko.observable(false);

        this.history = ko.observable("");

        this.percent = ko.observable(0);

        this.handleft = ko.observable();
        this.handright = ko.observable();

        this.stepbystep = ko.observable();

        this.speakEnglish = ko.observable(false);

        this.isUseSoroban = ko.observable(false);
        this.isUseHistory = ko.observable(false);

        this.abacusCol1 = ko.observable();
        this.abacusCol2 = ko.observable();
        this.abacusCol3 = ko.observable();
        this.abacusCol4 = ko.observable();


        this.abacusCol1_GUIDE = ko.observable("");
        this.abacusCol2_GUIDE = ko.observable("");
        this.abacusCol3_GUIDE = ko.observable("");
        this.abacusCol4_GUIDE = ko.observable("");

        function calcuShowHand(number) {
            console.error("---------", number)
            var donvi = number % 10;
            var chuc = Math.floor((number / 10) % 10);
            self.handleft("img/finger/left/f" + chuc + "0.png")
            self.handright("img/finger/right/f" + donvi + ".png")


            abacus(number);
        }

        function formatted_string(pad, user_str, pad_pos) {
            if (typeof user_str === 'undefined')
                return pad;
            if (pad_pos == 'l') {
                return (pad + user_str).slice(-pad.length);
            }
            else {
                return (user_str + pad).substring(0, pad.length);
            }
        }

        function abacus(number) {
            var donvi = number % 10;
            var chuc = Math.floor((number / 10) % 10);
            var tram = Math.floor((number / 100) % 10);
            var ngan = Math.floor((number / 1000) % 10);
            self.abacusCol1("img/soroban/s" + donvi + ".png")
            self.abacusCol2("img/soroban/s" + formatted_string(chuc, '0', 'l') + ".png")
            self.abacusCol3("img/soroban/s" + formatted_string(tram, '00', 'l') + ".png")
            self.abacusCol4("img/soroban/s" + formatted_string(ngan, '00', 'l') + ".png")
        }


        this.lythuyet = ko.observableArray([
            new Topics(4, 0),

        ])


        this.availableTopics = ko.observableArray([
            new Topics("2 SỐ - KHÔNG HẾT HỢP", 0),

            new Topics("---------------------------------", -1),

            new Topics("2 SỐ - ANH BẠN NHỎ & BÊN PHẢI", 8),
            new Topics("2 SỐ - ANH BẠN NHỎ & BÊN TRÁI", 9),
            new Topics("2 SỐ - ANH BẠN NHỎ", 3),

            new Topics("---------------------------------", -1),

            new Topics("2 SỐ - CHỈ CÓ ANH BẠN LỚN +", 10),
            new Topics("2 SỐ - CHỈ CÓ ANH BẠN LỚN -", 11),
            new Topics("2 SỐ - ANH BẠN NHỎ & ANH BẠN LỚN", 6),

            new Topics("---------------------------------", -1),

            new Topics("2 SỐ - CHỈ CÓ ANH BẠN LỚN KẾT HỢP & ANH BẠN NHỎ", 12),

            new Topics("---------------------------------", -1),

            new Topics("3 SỐ - KHÔNG HẾT HỢP", 1),
            new Topics("3 SỐ - ANH BẠN NHỎ", 4),

            new Topics("---------------------------------", -1),

            new Topics("4 SỐ - KHÔNG HẾT HỢP", 2),
            new Topics("4 SỐ - ANH BẠN NHỎ", 5),

            new Topics("---------------------------------", -1),

            new Topics("PHÉP CHIA 0 - 99", 7),

            new Topics("---------------------------------", -1),
            new Topics("LÝ THUYẾT - ANH BẠN NHỎ", -1),
            new Topics("LÝ THUYẾT - ANH BẠN LỚN", -2),
            new Topics("LÝ THUYẾT - ANH BẠN KẾT HỢP", -3),
        ]);

        function tinhtientrinh(timer = 0, second = 5000) {
            var solan = second / 100;
            self.percent(100);
            var abc = setInterval(function () {
                self.percent(100 - (100 / solan) * timer);
                if (self.percent() <= 0 || timer >= solan) {

                    clearInterval(abc);
                }
                timer += 1;
            }, 100)
        }



        this.nextNumber = function () {
            self.colorText(random_color()[generateRandomInteger(0, 10)]);
            var firstElement = self.number_temp.shift();
            if (self.number_temp().length >= 0 && !!firstElement) {
                if (!!firstElement) {
                    self.sentence(self.sentence() + 1);
                    readtts(firstElement, self.mute());
                    self.soroban(firstElement)

                    self.history(self.history() + firstElement.replace("=?", " = "));
                }
            } else {
                self.history(self.history() + " = ");
            }
        }

        var sum = 0;
        var index_storage_result = 0;
        this.tick = function () {
            console.log("tick")
            playAudio();
            self.colorText(random_color()[generateRandomInteger(0, 10)]);
            var firstElement = self.number_temp.shift();
            
            if (self.number_temp().length >= 0 && !!firstElement) {
                

                console.error(storage_result);
                if(storage_result.lt1.length){
                    if(storage_result.lt1[index_storage_result] != null){
                        self.abacusCol1_GUIDE("Phải: " + storage_result.lt1[index_storage_result].data + " = " + storage_result.lt1[index_storage_result].result);
                    }else{
                        self.abacusCol1_GUIDE("Phải: ----------------");
                    }
                }

                if(storage_result.lt2.length){
                    if(storage_result.lt2[index_storage_result] != null){
                        self.abacusCol2_GUIDE("Trái: " + storage_result.lt2[index_storage_result].data + " = " + storage_result.lt2[index_storage_result].result);
                    }else{
                        self.abacusCol2_GUIDE("Trái: ----------------");
                    }
                }

                if(storage_result.lt3.length){
                    if(storage_result.lt3[index_storage_result] != null){
                        self.abacusCol3_GUIDE("Trái: " + storage_result.lt3[index_storage_result].data + " = " + storage_result.lt3[index_storage_result].result);
                    }else{
                        self.abacusCol3_GUIDE("Trái: ----------------");
                    }
                }

                if(storage_result.lt4.length){
                    if(storage_result.lt4[index_storage_result] != null){
                        self.abacusCo4_GUIDE("Phải: " + storage_result.lt4[index_storage_result].data + " = " + storage_result.lt4[index_storage_result].result);
                    }else{
                        self.abacusCol4_GUIDE("Phải: ----------------");
                    }
                }
                
                
                
                // self.abacusCol3_GUIDE(storage_result.lt3[index_storage_result]);
                // self.abacusCol4_GUIDE(storage_result.lt4[index_storage_result]);

                index_storage_result++;
                if (!!firstElement) {
                    self.sentence(self.sentence() + 1);
                    readtts(firstElement, self.mute(), self.speakEnglish());
                    self.soroban(firstElement)
                } else {
                    self.isLastNumber(true);
                    clearInterval(interval_timer);
                }
                self.history(self.history() + firstElement.replace("=?", " = "));

                if (firstElement.indexOf("=") == -1) {
                    sum += parseInt(firstElement.replace("- ", "-").replace("+ ", ""));
                    calcuShowHand(sum);
                }


            } else {
                self.isLastNumber(true);
                clearInterval(interval_timer);
            }

            if (self.number_temp().length == 0) {
                self.isLastNumber(true);
                clearInterval(interval_timer);
                self.backgroundblack(false);
            }

            if (self.timers() == "00:00:00,000") {
                var startTime = Date.now();
                timerFinal = setInterval(function () {
                    var elapsedTime = Date.now() - startTime;
                    self.timers(sec2time(elapsedTime / 1000));
                }, 100);
            }
        };

        var isResult = false;
        var fireworksField = null;
        this.onResultAll = function () {
            self.history();
            if (self.stepbystep()) {
                if (self.isLastNumber() && !isResult) {
                    self.soroban(final_number);

                    self.backgroundblack(true);
                    readtts("Bằng " + final_number, true);

                    self.history(self.history() + final_number);
                    isResult = true;
                    clearInterval(timerFinal);
                } else {
                    self.tick();
                }

            } else {

                if (self.isLastNumber() && !isResult) {

                    self.soroban(final_number);

                    readtts("Bằng " + final_number, true);

                    self.history(self.history() + final_number);
                    isResult = true;

                    clearInterval(timerFinal);
                    isResult = true;
                    runtimer = setTimeout(function () {

                        readtts('Các bạn hãy cố gắng lên nào, mình sắp về đích rồi', false);

                        // fireworksField = $('.notloading').fireworks({
                        //     sound:true,// sound effect
                        //     opacity: 0.9,
                        //     width:'100%',
                        //     height:'100%'
                        // });


                        // setTimeout(function(){
                        //     $('#fireworksField').on("click", function(){
                        //         fireworksField.destroy()
                        //         $(this).remove();
                        //     })
                        // }, 1000)
                    }, 2500)


                }
            }



        }

        var timerFinal = null;
        var runtimer = null;
        var startTick = null;
        var soudStart = null;
        this.timers = ko.observable("00:00:00,000");
        this.isTimer = ko.observable(false);
        this.hard = ko.observable("bài này khá dễ");

        var final_number = 0;
        var storage_result = [];
        this.onViewResult = function () {

            var results = randSorobanlevel1B(self.numberrange());
            if (self.level().value == 0) { //2 SỐ - KHÔNG HẾT HỢP
                result = randSorobanlevel1B(self.numberrange(), self.hard)

            } else if (self.level().value == 1) { //3 SỐ - KHÔNG HẾT HỢP
                results = randSorobanlevel1C(self.numberrange(), self.hard);

            } else if (self.level().value == 2) { //4 SỐ - KHÔNG HẾT HỢP
                results = randSorobanlevel1D(self.numberrange(), self.hard);

            } else if (self.level().value == 3) { //2 SỐ - ANH BẠN NHỎ
                results = randSorobanlevel2B_(self.numberrange(), self.hard);

            } else if (self.level().value == 4) { //3 SỐ - ANH BẠN NHỎ
                results = randSorobanlevel2C_(self.numberrange(), self.hard);

            } else if (self.level().value == 5) { //4 SỐ - ANH BẠN NHỎ
                results = randSorobanlevel1D_(self.numberrange(), self.hard);

            } else if (self.level().value == 6) { //2 SỐ - ANH BẠN NHỎ & ANH BẠN LỚN
                results = randSorobanlevel3B(self.numberrange(), self.hard);

            } else if (self.level().value == 7) {  //PHÉP CHIA 0 - 99
                results = phepchia(self.numberrange(), 99);

            } else if (self.level().value == 8) { //2 SỐ - ANH BẠN NHỎ & BÊN PHẢI
                results = randSorobanlevel2B_phai(self.numberrange(), 99);

            } else if (self.level().value == 9) { //2 SỐ - ANH BẠN NHỎ & BÊN TRÁI
                results = randSorobanlevel2B_trai(self.numberrange(), 99);

            } else if (self.level().value == 10) { //2 SỐ - CHỈ CÓ ANH BẠN LỚN +
                results = randSorobanABL2(self.numberrange(), 99);

            } else if (self.level().value == 11) { //2 SỐ - CHỈ CÓ ANH BẠN LỚN -
                results = randSorobanABL1(self.numberrange(), 99);

            } else if (self.level().value == 12) { //2 SỐ - CHỈ CÓ ANH BẠN LỚN KẾT HỢP & ANH BẠN NHỎ
                results = randSorobanABLKH_ABN_CONG(self.numberrange(), 99);

            } else if (self.level().value == -2) {
                // lý thuyết anh bạn nhỏ

            } else if (self.level().value == -3) {
                // lý thuyết anh bạn lớn

            } else if (self.level().value == -4) {
                // lý thuyết anh bạn lớn kết hợp

            }

            storage_result = results;


            //reset
            sum = 0;
            console.log(self.level())
            self.isSetting(false);
            self.isLoading(true);
            self.isLastNumber(false);
            self.sentence(0);
            isResult = false;
            self.number_temp.removeAll();
            self.history("");
            self.timers("00:00:00,000")
            index_storage_result = 0;

            self.hard("bài này khá dễ");

            self.image_loading("img/img" + generateRandomInteger(1, 31) + ".gif");



            console.log(results)
            for (var i = 0; i < results.numbers.length; i++) {
                self.number_temp.push((results.numbers[i] > 0 ? "+" : "") + results.numbers[i]);
            }

            self.number_temp.push("=?");
            final_number = results.s;


            clearInterval(interval_timer);
            clearInterval(runtimer);
            clearInterval(timerFinal);
            clearInterval(startTick);
            clearInterval(soudStart);

            if (self.stepbystep()) {
                tinhtientrinh(0, 2000);
                soudStart = setTimeout(function () {
                    readtts('Các bạn hãy tập trung nào', true);
                }, 10);
                setTimeout(function () {
                    self.isLoading(false);
                    self.tick();
                }, 2000)
            } else {
                tinhtientrinh(6, 5000);
                soudStart = setTimeout(function () {
                    readtts(self.hard() + ', Các bạn hãy tập trung nào', true);
                }, 400);
                startTick = setTimeout(function () {
                    self.isLoading(false);
                    self.tick();
                    interval_timer = setInterval(self.tick, self.timer() * 1000);
                    tinhtientrinh(0, self.timer() * 1000 * self.number_temp().length + 4000);

                }, 5000);
            }



        }

        this.backgroundblack = ko.observable(false);

        this.onClickHideGuideFingerMath = function () {
            self.isUseSoroban(false);
            self.backgroundblack(!self.backgroundblack());
        }

        this.onClickHideGuideSoroban = function () {
            self.backgroundblack(!self.backgroundblack());
            self.isUseSoroban(true);
        }

        this.onClickHideGuideHistory = function () {
            self.isUseHistory(!self.isUseHistory())
        }

        this.onEventBackground = function () {
            if (self.backgroundblack()) {
                $("[data-role='page'], .ui-slider-track .ui-btn.ui-slider-handle").css({
                    'background-color': '#4a4845',
                    'color': 'white'
                })
            } else {
                $("[data-role='page'], .ui-slider-track .ui-btn.ui-slider-handle").css({
                    'background-color': 'white',
                    'color': 'black'
                })
            }
        }

        this.onViewBack = function () {
            self.isSetting(true);
            if (fireworksField != null) {
                fireworksField.destroy()
            }

            clearInterval(interval_timer);
            clearInterval(runtimer);
            clearInterval(timerFinal);
            clearInterval(startTick);

            audiotts.pause();

        }




        var length = 4;
        var index = 0;

        var excersize = false;
        var ketqua = [];
        for (var i = 0; i < 0; i++) {

            var inte = generateRandomInteger(1, 9);
            result = randSorobanABLKH_ABN_CONG(length, 20)
            console.log(result)
            if ((result.numbers.length) == length) {
                var str = "" + (index + 1);
                var pad = "000"

                if (excersize) {
                    var ans = pad.substring(0, pad.length - str.length) + str
                    var template = "<div>" + (ans) + "." + result.numbers.join(" ") + " = ..................... </div>"
                    if (index % 2 == 0) {
                        template = "<div><b><i>" + (ans) + "." + result.numbers.join(" ") + " = </i></b> ..................... </div>"
                    }
                    ketqua[index] = result.s;
                    index++;
                } else {
                    var ans = pad.substring(0, pad.length - str.length) + str
                    var template = "<div>" + (ans) + "." + result.numbers.join(" ") + " = " + result.s + "</div>"
                    // if(index%2 == 0){
                    //     template = "<div><b><i><u>" + (ans) + "." + result.numbers.join(" ") + " = " + result.s + "</u></i></b></div>"
                    // }
                    index++;
                }

                $(".result").append(template);
            }

            console.log("55555", i);
        }

        if (excersize) {
            for (var i = 0; i < ketqua.length; i++) {
                var str = "" + (i + 1);
                var pad = "000";
                var ans = pad.substring(0, pad.length - str.length) + str
                var template = "<div>" + (ans) + ". " + ketqua[i] + " </div>";
                $(".result").append(template);

            }
        }



    };

    ko.applyBindings(new ViewModel()); // This makes Knockout get to work
})