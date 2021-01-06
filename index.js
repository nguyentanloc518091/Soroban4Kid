$(document).ready(function () {


    function flipNumber(number, onFlip) {
        $("#value3").text(0);
        $("#value3").flipCounterInit({ speed: 0.7, onFlip: onFlip });
        $("#value3").flipCounterUpdate(number);
    }

    var Topics = function (name, value, type = 'basic', description = '') {
        this.name = name;
        this.value = value;
        this.type = type;
        this.description = description;
    };

    var ViewModel = function (first, last) {
        var self = this;

        //numpad
        this.numpad = ko.observable();

        this.btnNumpad = function(number){
            alert(number);
        }

        this.isSetting = ko.observable(true);
        this.number_temp = ko.observableArray();
        // var random_color = ko.observableArray(['#fcba03', '#ff3700', '#a2ff00', '#00d154', '#377a52', '#366075', '#1b4357', '#6b7c85', '#23346b', '#2e4ba6', '#6d1bbf']);
        var random_color = ko.observableArray(['#1be51b']);
        this.image_loading = ko.observable();

        this.colorText = ko.observable("black");

        this.timer = ko.observable(2);
        this.numberrange = ko.observable(10);
        this.level = ko.observable(0);

        this.soroban = ko.observable();
        this.isLoading = ko.observable(true);
        this.isLastNumber = ko.observable(false);
        this.nextSentence = ko.observable(false);
        var interval_timer = null;
        this.sentence = ko.observable(0);

        this.mute = ko.observable(false);
        this.mute2 = ko.observable(false);

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
        this.abacusCol5 = ko.observable();
        this.abacusCol6 = ko.observable();
        this.abacusCol7 = ko.observable();


        this.abacusCol1_GUIDE = ko.observable("");
        this.abacusCol2_GUIDE = ko.observable("");
        this.abacusCol3_GUIDE = ko.observable("");
        this.abacusCol4_GUIDE = ko.observable("");
        this.isFlashEffect = ko.observable(false);
        this.isShowAll = ko.observable(true);
        var _isShowAll = true;
        this.number_temp_all = ko.observableArray();


        this.replaceABC = function(soroban){
            
            if(!!soroban() && soroban().replace){
                console.log(soroban())
                return soroban().replace('+','');
            }   
            return '';
            
        }

        this.level.subscribe(function (newValue) {

            if (newValue.value <= -1) {
                self.stepbystep(true);
                $('#cblevel').prop('checked', true).checkboxradio('refresh');
            }
        });

        window.addEventListener("keydown", function (e) {
            //tested in IE/Chrome/Firefox
            // document.getElementById("key").innerHTML = e.key;
            // document.getElementById("keyCode").innerHTML = e.keyCode;
            // document.getElementById("eventCode").innerHTML = e.code;
            if (e.keyCode == 39) { //ArrowRight
                self.onResultAll();
            } else if (e.keyCode == 37) { //ArrowLeft
                self.onClickHideGuideHistory();
            } else if (e.keyCode == 38) { //ArrowUp
                self.onClickHideGuideSoroban();
            } else if (e.keyCode == 40) { //ArrowDown - set by set
                self.isTimer(false)
                self.stepbystep(true);
                self.onViewResult();
            } else if (e.keyCode == 179) { //Play
                self.mute(true);
                self.mute2(false);

            } else if (e.keyCode == 33) { //page up
                self.onViewBack();
            } else if (e.keyCode == 34) { //page down - auto
                self.isTimer(true)
                self.stepbystep(false);
                self.onViewResult();
            } else if (e.keyCode == 8) { //mute reset
                self.onViewResult();
            }
        })


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
            var ngan5 = Math.floor((number / 10000) % 10);
            var ngan6 = Math.floor((number / 100000) % 10);
            var ngan7 = Math.floor((number / 1000000) % 10);

            self.abacusCol1("img/soroban/s" + donvi + ".png");
            // self.abacusCol2("img/soroban/s" + chuc + ".png")
            // self.abacusCol3("img/soroban/s" + tram + ".png")
            // self.abacusCol4("img/soroban/s" + ngan + ".png")
            // self.abacusCol5("img/soroban/s" + ngan5 + ".png")
            // self.abacusCol6("img/soroban/s" + ngan6 + ".png")
            // self.abacusCol7("img/soroban/s" + ngan7 + ".png")

            self.abacusCol2("img/soroban/s" + formatted_string(chuc, '0', 'l') + ".png")
            self.abacusCol3("img/soroban/s" + formatted_string(tram, '00', 'l') + ".png")
            self.abacusCol4("img/soroban/s" + formatted_string(ngan, '000', 'l') + ".png")
            self.abacusCol5("img/soroban/s" + formatted_string(ngan5, '0000', 'l') + ".png")
            self.abacusCol6("img/soroban/s" + formatted_string(ngan6, '00000', 'l') + ".png")
            self.abacusCol7("img/soroban/s" + formatted_string(ngan7, '000000', 'l') + ".png")
        }


        this.lythuyet = ko.observableArray([
            new Topics(4, 0),

        ])


        this.availableTopics = ko.observableArray([  //36
            new Topics("2 SỐ -  CỘNG & TRỪ", 18),
            new Topics("1 SỐ -  CỘNG & TRỪ", 34),
            new Topics("3 SỐ -  CỘNG & TRỪ", 19),
            new Topics("4 SỐ -  CỘNG & TRỪ", 20),
            new Topics("5 SỐ -  CỘNG & TRỪ", 21),
            new Topics("6 SỐ -  CỘNG & TRỪ", 22),

            new Topics("---------------------------------", -1),

            new Topics("1 SỐ - KHÔNG ANH BẠN NHỎ - BÊN PHẢI", 13),
            new Topics("1 SỐ - KHÔNG ANH BẠN NHỎ - BÊN TRÁI", 14),
            new Topics("2 SỐ - KHÔNG ANH BẠN NHỎ", 15),

            new Topics("---------------------------------", -1),

            new Topics("2 SỐ - KHÔNG HẾT HỢP", 0),

            new Topics("---------------------------------", -1),

            new Topics("2 SỐ - ANH BẠN NHỎ & BÊN PHẢI", 8),
            new Topics("2 SỐ - ANH BẠN NHỎ & BÊN TRÁI", 9),
            new Topics("2 SỐ - ANH BẠN NHỎ", 3),

            new Topics("---------------------------------", -1),

            new Topics("2 SỐ - CHỈ CÓ ANH BẠN LỚN + (dễ)", 16),
            new Topics("2 SỐ - CHỈ CÓ ANH BẠN LỚN - (dễ)", 17),

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

            new Topics("2 SỐ -  CỘNG & TRỪ < 100", 39),

            new Topics("---------------------------------", -1),

            new Topics("1 SỐ - PHÉP CHIA 2",   -51),
            new Topics("2 SỐ - PHÉP CHIA 20",  -52),
            new Topics("2 SỐ - PHÉP CHIA 2X",  -53),
            new Topics("3 SỐ - PHÉP CHIA 2XX", -54),

            new Topics("---------------------------------", -1),

            new Topics("1 SỐ - PHÉP CHIA 3",   -55),
            new Topics("2 SỐ - PHÉP CHIA 30",  -56),
            new Topics("2 SỐ - PHÉP CHIA 3X",  -57),
            new Topics("3 SỐ - PHÉP CHIA 3XX", -58),

            new Topics("---------------------------------", -1),

            new Topics("1 SỐ - PHÉP CHIA 4",   -59),
            new Topics("2 SỐ - PHÉP CHIA 40",  -60),
            new Topics("2 SỐ - PHÉP CHIA 4X",  -61),
            new Topics("3 SỐ - PHÉP CHIA 4XX", -62),

            new Topics("---------------------------------", -1),

            new Topics("1 SỐ - PHÉP CHIA 5",   -63),
            new Topics("2 SỐ - PHÉP CHIA 50",  -64),
            new Topics("2 SỐ - PHÉP CHIA 5X",  -65),
            new Topics("3 SỐ - PHÉP CHIA 5XX", -66),

            new Topics("---------------------------------", -1),

            new Topics("1 SỐ - PHÉP CHIA 6",   -67),
            new Topics("2 SỐ - PHÉP CHIA 60",  -68),
            new Topics("2 SỐ - PHÉP CHIA 6X",  -69),
            new Topics("3 SỐ - PHÉP CHIA 6XX", -70),

            new Topics("---------------------------------", -1),

            new Topics("1 SỐ - PHÉP CHIA 7",   -71),
            new Topics("2 SỐ - PHÉP CHIA 70",  -72),
            new Topics("2 SỐ - PHÉP CHIA 7X",  -73),
            new Topics("3 SỐ - PHÉP CHIA 7XX", -74),

            new Topics("---------------------------------", -1),

            new Topics("1 SỐ - PHÉP CHIA 8",   -75),
            new Topics("2 SỐ - PHÉP CHIA 80",  -76),
            new Topics("2 SỐ - PHÉP CHIA 8X",  -77),
            new Topics("3 SỐ - PHÉP CHIA 8XX", -78),

            new Topics("---------------------------------", -1),

            new Topics("1 SỐ - PHÉP CHIA 9",   -79),
            new Topics("2 SỐ - PHÉP CHIA 90",  -80),
            new Topics("2 SỐ - PHÉP CHIA 9X",  -81),
            new Topics("3 SỐ - PHÉP CHIA 9XX", -82),

            new Topics("---------------------------------", -1),


            new Topics("1 SỐ -  CỘNG", 38),
            new Topics("2 SỐ -  CỘNG", 23),
            new Topics("3 SỐ -  CỘNG", 24),
            new Topics("4 SỐ -  CỘNG", 25),
            new Topics("5 SỐ -  CỘNG", 26),
            new Topics("6 SỐ -  CỘNG", 27),

            new Topics("---------------------------------", -1),

            new Topics("1 SỐ -  TRỪ", 36),
            new Topics("2 SỐ -  TRỪ", 28),
            new Topics("3 SỐ -  TRỪ", 29),
            new Topics("4 SỐ -  TRỪ", 30),
            new Topics("5 SỐ -  TRỪ", 31),
            new Topics("6 SỐ -  TRỪ", 32),

            new Topics("---------------------------------", -1),

            new Topics("2 SỐ -  BÌNH THƯỜNG", 33),
            new Topics("3 SỐ -  BÌNH THƯỜNG", 34),
            new Topics("4 SỐ -  BÌNH THƯỜNG", 35),

            new Topics("---------------------------------", -1),

            new Topics("PHÉP NHÂN 1 - 99", -16),
            new Topics("PHÉP CHIA 1 - 99", -26),

            new Topics("---------------------------------", -1),

            new Topics("PHÉP NHÂN 2Dx1D", -17),
            new Topics("PHÉP NHÂN 3Dx1D", -18),
            new Topics("PHÉP NHÂN 4Dx1D", -19),
            new Topics("PHÉP NHÂN 5Dx1D", -40),
            new Topics("PHÉP NHÂN 6Dx1D", -41),
            new Topics("PHÉP NHÂN 7Dx1D", -42),
            new Topics("PHÉP NHÂN 8Dx1D", -43),
            new Topics("PHÉP NHÂN 9Dx1D", -44),
            new Topics("PHÉP NHÂN 10Dx1D", -45),
            new Topics("PHÉP NHÂN 11Dx1D", -46),
            new Topics("PHÉP NHÂN 12Dx1D", -47),
            new Topics("PHÉP NHÂN 13Dx1D", -48),
            new Topics("PHÉP NHÂN 14Dx1D", -49),
            new Topics("PHÉP NHÂN 15Dx1D", -50),


            new Topics("---------------------------------", -1),

            new Topics("PHÉP NHÂN 2Dx2D", -20),
            new Topics("PHÉP NHÂN 3Dx2D", -21),
            new Topics("PHÉP NHÂN 4Dx2D", -22),

            new Topics("---------------------------------", -1),

            new Topics("PHÉP NHÂN 3Dx3D", -23),
            new Topics("PHÉP NHÂN 4Dx3D", -24),

            new Topics("---------------------------------", -1),
            new Topics("PHÉP NHÂN 4Dx4D", -25),

            new Topics("---------------------------------", -1),
            new Topics("NHÂN 2 SỐ ĐẦU GIỐNG NHAU", -26),
            new Topics("NHÂN 2 SỐ CUỐI GIỐNG NHAU", -27),
            new Topics("NHÂN 2dx55", -28),
            new Topics("NHÂN 102x109", -29),
            new Topics("NHÂN 4dx55", -29),
            new Topics("NHÂN 4dx5", -30),

            new Topics("---------------------------------", -1),

            new Topics("PHÉP CHIA 3Dx1D", -31),
            new Topics("PHÉP CHIA 4Dx1D", -32),
            new Topics("PHÉP CHIA 5Dx1D", -33),

            new Topics("---------------------------------", -1),

            new Topics("PHÉP NHÂN 4Dx2D", -34),
            new Topics("PHÉP NHÂN 5Dx2D", -35),
            new Topics("PHÉP NHÂN 6Dx2D", -36),

            new Topics("---------------------------------", -1),

            new Topics("PHÉP NHÂN 6Dx3D", -37),
            new Topics("PHÉP NHÂN 7Dx3D", -38),

            new Topics("---------------------------------", -1),
            new Topics("PHÉP NHÂN 8Dx4D", -39),

            new Topics("---------------------------------", -1),
            new Topics("LÝ THUYẾT - ANH BẠN NHỎ", -2),
            new Topics("LÝ THUYẾT - ANH BẠN LỚN", -3),
            new Topics("LÝ THUYẾT - ANH BẠN KẾT HỢP", -4),
        ]);

        var status_tien_trinh = 0;
        function tinhtientrinh(timer = 0, second = 5000) {
            var solan = second / 100;
            self.percent(100);
            console.error("-------------", timer, second);
            status_tien_trinh = setInterval(function () {
                self.percent(100 - (100 / solan) * timer);
                if (self.percent() <= 0 || timer >= solan) {
                    clearInterval(status_tien_trinh);
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
        this.index_number_temp_all = ko.observable(-1);

        this.tick = function () {
            var color = random_color()[self.number_temp().length % 2];
            playAudio();
            self.colorText(color);
            var firstElement = self.number_temp.shift();
            
            if (self.level().value < -1) { // ly thuyet
                console.log(firstElement)
                index_storage_result++;
                if (!!firstElement) {
                    self.sentence(self.sentence() + 1);
                    readtts(firstElement, self.mute(), self.speakEnglish());
                    self.soroban(firstElement);
                } else {
                    self.isLastNumber(true);
                    self.nextSentence(true);
                    clearInterval(timerFinal);
                    clearInterval(interval_timer);
                }

                if (self.timers() == "00:00:00,000") {
                    var startTime = Date.now();
                    timerFinal = setInterval(function () {
                        var elapsedTime = Date.now() - startTime;
                        self.timers(sec2time(elapsedTime / 1000));
                    }, 100);
                }

                return;
            }

            if (self.number_temp().length >= 0 && !!firstElement) {

                console.error(storage_result);
                if (!!storage_result.lt1 && storage_result.lt1.length) {
                    if (storage_result.lt1[index_storage_result] != null) {
                        self.abacusCol1_GUIDE("Phải: " + storage_result.lt1[index_storage_result].data + " = " + storage_result.lt1[index_storage_result].result);
                    } else {
                        self.abacusCol1_GUIDE("Phải: ----------------");
                    }
                }

                if (!!storage_result.lt2 && storage_result.lt2.length) {
                    if (storage_result.lt2[index_storage_result] != null) {
                        self.abacusCol2_GUIDE("Trái: " + storage_result.lt2[index_storage_result].data + " = " + storage_result.lt2[index_storage_result].result);
                    } else {
                        self.abacusCol2_GUIDE("Trái: ----------------");
                    }
                }

                if (!!storage_result.lt3 && storage_result.lt3.length) {
                    if (storage_result.lt3[index_storage_result] != null) {
                        self.abacusCol3_GUIDE("Trái: " + storage_result.lt3[index_storage_result].data + " = " + storage_result.lt3[index_storage_result].result);
                    } else {
                        self.abacusCol3_GUIDE("Trái: ----------------");
                    }
                }

                if (!!storage_result.lt4 && storage_result.lt4.length) {
                    if (storage_result.lt4[index_storage_result] != null) {
                        self.abacusCo4_GUIDE("Phải: " + storage_result.lt4[index_storage_result].data + " = " + storage_result.lt4[index_storage_result].result);
                    } else {
                        self.abacusCol4_GUIDE("Phải: ----------------");
                    }
                }



                // self.abacusCol3_GUIDE(storage_result.lt3[index_storage_result]);
                // self.abacusCol4_GUIDE(storage_result.lt4[index_storage_result]);

                index_storage_result++;
                if (!!firstElement) {
                    self.sentence(self.sentence() + 1);
                    readtts(firstElement, self.mute(), self.speakEnglish());
                    self.soroban(firstElement);

                    if (self.isFlashEffect()) {
                        if (firstElement.indexOf("=") == -1) {
                            setTimeout(function () {
                                self.soroban("");
                            }, self.timer() * 1000 - 150);
                        }
                    }



                } else {
                    self.isShowAll(false);
                    self.isLastNumber(true);
                    clearInterval(interval_timer);
                }
                self.history(self.history() + firstElement.replace("=?", " = "));

                if (firstElement.indexOf("=") == -1) {
                    
                    
                    sum += parseInt(firstElement.replace("- ", "-").replace("+ ", ""));
                    calcuShowHand(sum);
                }

                if(firstElement.indexOf("=") != -1){
                    playAudio2();
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

            var index__= self.index_number_temp_all() + 1;
            self.index_number_temp_all(index__);
        };

        var isResult = false;
        var fireworksField = null;
        this.onResultAll = function () {
            self.history();
            if (self.stepbystep()) {
                if (self.nextSentence()) {
                    final_number = -0001;
                    self.onViewResult();
                    self.nextSentence(false);

                    return;
                }

                if (self.isLastNumber() && !isResult && self.level().value > -1) {

                    self.soroban(final_number);
                    self.isShowAll(false);

                    var final_number_copy = final_number;
                    flipNumber(final_number, function () {
                        readtts("Bằng " + final_number_copy, self.mute2());
                    })

                    // self.backgroundblack(true);


                    self.history(self.history() + final_number);
                    isResult = true;
                    self.nextSentence(true);
                    clearInterval(timerFinal);
                    final_number = -0001;

                } else {
                    self.tick();
                }



            } else {

                if (self.isLastNumber() && final_number == -0001) {
                    self.onViewResult();
                    self.nextSentence(false);
                }

                if (self.isLastNumber() && !isResult) {
                    self.isShowAll(false);
                    self.soroban(final_number);
                    var final_number_copy = final_number;
                    flipNumber(final_number, function () {
                        readtts("Bằng " + final_number_copy, self.mute2());
                    })
                    $(".mask").animate({
                        width: "70%",
                        opacity: 0.4,
                        marginLeft: "0.6in",
                        fontSize: "3em",
                        borderWidth: "10px"
                    }, 1500);

                    readtts("Bằng " + final_number, self.mute2());

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
                    final_number = -0001;
                    clearInterval(status_tien_trinh)

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

        var final_number = -0001;
        var storage_result = [];
        this.onViewResult = function () {

            playAudio2();

            //reset
            sum = 0;
            console.log(self.level())
            self.isSetting(false);
            self.isLoading(true);
            self.isLastNumber(false);
            self.sentence(0);
            isResult = false;
            self.number_temp.removeAll();
            self.number_temp_all.removeAll();
            self.history("");
            self.timers("00:00:00,000")
            index_storage_result = 0;
            self.index_number_temp_all(-1);
            self.isShowAll($('#checkbox-0-Guest').prop("checked"));

            if (!self.isLastNumber() && !isResult && final_number != -0001) {
                self.isLoading(false);
                self.isShowAll(false);


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

                final_number = -0001;
                return;
            }

            var results;
            if (self.level().value == 0) { //2 SỐ - KHÔNG HẾT HỢP
                results = randSorobanlevel1B(self.numberrange(), self.hard)

            } else if (self.level().value == 1) { //3 SỐ - KHÔNG HẾT HỢP
                results = randSorobanlevel1C(self.numberrange(), self.hard);

            } else if (self.level().value == 2) { //4 SỐ - KHÔNG HẾT HỢP
                results = randSorobanlevel1D(self.numberrange(), self.hard);

            } else if (self.level().value == 3) { //2 SỐ - ANH BẠN NHỎ, chua làm
                results = randSorobanlevel2B_(self.numberrange(), self.hard);

            } else if (self.level().value == 4) { //3 SỐ - ANH BẠN NHỎ
                results = randSorobanlevel2C_(self.numberrange(), self.hard);

            } else if (self.level().value == 5) { //4 SỐ - ANH BẠN NHỎ
                results = randSorobanlevel1D_(self.numberrange(), self.hard);

            } else if (self.level().value == 6) { //2 SỐ - ANH BẠN NHỎ & ANH BẠN LỚN
                results = randSorobanlevel3B(self.numberrange(), self.hard);

            } else if (self.level().value == -26) {  //PHÉP CHIA 0 - 99
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

            } else if (self.level().value == 13) { //1 SỐ không anh bạn nhỏ phai
                results = randSorobanABLLevel1_phai(self.numberrange(), 99);

            } else if (self.level().value == 14) { //1 SỐ không anh bạn nhỏ trai
                results = randSorobanABLLevel1_trai(self.numberrange(), 99);

            } else if (self.level().value == 15) { //2 số không anh bạn nhỏ
                results = randSorobanABLLevel1_tong(self.numberrange(), 99);

            } else if (self.level().value == 16) { //2 SỐ - CHỈ CÓ ANH BẠN LỚN + (dễ)
                results = randSorobanABL2(self.numberrange(), 1, 9, 1, 9);

            } else if (self.level().value == 17) { //2 SỐ - CHỈ CÓ ANH BẠN LỚN - (dễ)
                results = randSorobanABL1(self.numberrange(), 99, 90, -9, -1);

            } else if (self.level().value == 18) { //2 SỐ - CỘNG TRỪ
                results = randSorobanlevelN(self.numberrange(), 50, 99, -99, 99);

            } else if (self.level().value == 19) { //3 SỐ - CỘNG TRỪ
                results = randSorobanlevelN(self.numberrange(), 500, 999, -999, 999);

            } else if (self.level().value == 20) { //4 SỐ - CỘNG TRỪ
                results = randSorobanlevelN(self.numberrange(), 5000, 9999, -9999, 9999);

            } else if (self.level().value == 21) { //5 SỐ - CỘNG TRỪ
                results = randSorobanlevelN(self.numberrange(), 50000, 99999, -99999, 99999);

            } else if (self.level().value == 22) { //6 SỐ - CỘNG TRỪ
                results = randSorobanlevelN(self.numberrange(), 500000, 999999, -999999, 999999);

            } else if (self.level().value == 23) { //2 SỐ - CỘNG
                results = randSorobanlevelN(self.numberrange(), 11, 99, 11, 99);

            } else if (self.level().value == 24) { //3 SỐ - CỘNG
                results = randSorobanlevelN(self.numberrange(), 101, 999, 101, 999);

            } else if (self.level().value == 25) { //4 SỐ - CỘNG
                results = randSorobanlevelN(self.numberrange(), 1001, 9999, 1001, 9999);

            } else if (self.level().value == 26) { //5 SỐ - CỘNG
                results = randSorobanlevelN(self.numberrange(), 10001, 99999, 10001, 99999);

            } else if (self.level().value == 27) { //6 SỐ - CỘNG
                results = randSorobanlevelN(self.numberrange(), 100001, 999999, 100001, 999999);

            } else if (self.level().value == 28) { //2 SỐ - TRỪ
                results = randSorobanlevelN(self.numberrange(), 500, 999, -99, -1);

            } else if (self.level().value == 29) { //3 SỐ - TRỪ
                results = randSorobanlevelN(self.numberrange(), 1001, 9999, -999, -1);

            } else if (self.level().value == 30) { //4 SỐ - TRỪ
                results = randSorobanlevelN(self.numberrange(), 10001, 99999, -9999, -1);

            } else if (self.level().value == 31) { //5 SỐ - TRỪ
                results = randSorobanlevelN(self.numberrange(), 100001, 999999, -99999, -1);

            } else if (self.level().value == 32) { //6 SỐ - TRỪ
                results = randSorobanlevelN(self.numberrange(), 1000001, 9999999, -999999, -1);

            } else if (self.level().value == 33) { //2 SỐ -  BÌNH THƯỜNG
                results = randSorobanleve2N(self.numberrange(), 50, 99, -99, 99, 2);

            } else if (self.level().value == 34) { //3 SỐ -  BÌNH THƯỜNG
                results = randSorobanleve2N(self.numberrange(), 500, 999, -999, 999, 3);

            } else if (self.level().value == 35) { //4 SỐ -  BÌNH THƯỜNG
                results = randSorobanleve2N(self.numberrange(), 5000, 9999, -0999, 9999, 4);

            } else if (self.level().value == 39) { //2 SỐ -  CỘNG & TRỪ < 100
                results = randSorobanlevelN(self.numberrange(), 1, 99, -99, 99, true); // new Topics("2 SỐ -  CỘNG & TRỪ < 100", 33),

            } else if (self.level().value == 34) { //1 SỐ -  CỘNG & TRỪ < 100
                results = randSorobanlevelN(self.numberrange(), 1, 9, -9, 9);

            } else if (self.level().value == 38) { //1 SỐ -  CỘNG
                results = randSorobanlevelN(self.numberrange(), 1, 9, 1, 9);

            } else if (self.level().value == 36) { //1 SỐ -  TRỪ
                results = randSorobanlevelN(self.numberrange(), 100, 999, -1, -9);

            } else if (self.level().value == -16) { //PHÉP NHÂN 1 - 99
                results = randSorobanPhepNhan1_99(self.numberrange(), 99);

            } else if (self.level().value == -17) { //PHÉP NHÂN 2Dx1D
                results = phepnhanndxnd(self.numberrange(), 11, 99, 2, 9);

            } else if (self.level().value == -18) { //PHÉP NHÂN 3Dx1D
                results = phepnhanndxnd(self.numberrange(), 101, 999, 2, 9);

            } else if (self.level().value == -19) { //PHÉP NHÂN 4Dx1D
                results = phepnhanndxnd(self.numberrange(), 1001, 9999, 2, 9);

            } else if (self.level().value == -40) { //PHÉP NHÂN 5Dx1D
                results = phepnhanndxnd(self.numberrange(), 10001, 99999, 2, 9);

            } else if (self.level().value == -41) { //PHÉP NHÂN 6Dx1D
                results = phepnhanndxnd(self.numberrange(), 100001, 999999, 2, 9);

            } else if (self.level().value == -42) { //PHÉP NHÂN 7Dx1D
                results = phepnhanndxnd(self.numberrange(), 1000001, 9999999, 2, 9);

            } else if (self.level().value == -43) { //PHÉP NHÂN 8Dx1D
                results = phepnhanndxnd(self.numberrange(), 10000001, 99999999, 2, 9);

            } else if (self.level().value == -44) { //PHÉP NHÂN 9Dx1D
                results = phepnhanndxnd(self.numberrange(), 100000001, 999999999, 2, 9);

            } else if (self.level().value == -45) { //PHÉP NHÂN 10Dx1D
                results = phepnhanndxnd(self.numberrange(), 1000000001, 9999999999, 2, 9);

            } else if (self.level().value == -46) { //PHÉP NHÂN 11Dx1D
                results = phepnhanndxnd(self.numberrange(), 10000000001, 99999999999, 2, 9);

            } else if (self.level().value == -47) { //PHÉP NHÂN 12Dx1D
                results = phepnhanndxnd(self.numberrange(), 100000000001, 999999999999, 2, 9);

            } else if (self.level().value == -48) { //PHÉP NHÂN 13Dx1D
                results = phepnhanndxnd(self.numberrange(), 1000000000001, 9999999999999, 2, 9);

            } else if (self.level().value == -49) { //PHÉP NHÂN 14Dx1D
                results = phepnhanndxnd(self.numberrange(), 10000000000001, 99999999999999, 2, 9);

            } else if (self.level().value == -50) { //PHÉP NHÂN 15Dx1D
                results = phepnhanndxnd(self.numberrange(), 100000000000001, 999999999999999, 2, 9);

            } else if (self.level().value == -51) { //PHÉP CHIA 1DD:2
                results = phepchiandxnd(self.numberrange(), 2, 2, 10, 900);

            } else if (self.level().value == -52) { //PHÉP CHIA 1DD:20
                results = phepchiandxnd(self.numberrange(), 20, 20, 10, 900);

            } else if (self.level().value == -53) { //PHÉP CHIA 1DD:2X
                results = phepchiandxnd(self.numberrange(), 20, 29, 10, 900);

            } else if (self.level().value == -54) { //PHÉP CHIA 1DD:2XX
                results = phepchiandxnd(self.numberrange(), 200, 299, 10, 900);

            } else if (self.level().value == -55) { //PHÉP CHIA 1DD:3
                results = phepchiandxnd(self.numberrange(), 3, 3, 10, 900);

            } else if (self.level().value == -56) { //PHÉP CHIA 1DD:30
                results = phepchiandxnd(self.numberrange(), 30, 30, 10, 900);

            } else if (self.level().value == -57) { //PHÉP CHIA 1DD:3X
                results = phepchiandxnd(self.numberrange(), 30, 39, 10, 900);

            } else if (self.level().value == -58) { //PHÉP CHIA 1DD:3XX
                results = phepchiandxnd(self.numberrange(), 300, 399, 10, 900);

            } else if (self.level().value == -59) { //PHÉP CHIA 1DD:4
                results = phepchiandxnd(self.numberrange(), 4, 4, 10, 900);

            } else if (self.level().value == -60) { //PHÉP CHIA 1DD:40
                results = phepchiandxnd(self.numberrange(), 40, 40, 10, 900);

            } else if (self.level().value == -61) { //PHÉP CHIA 1DD:4X
                results = phepchiandxnd(self.numberrange(), 40, 49, 10, 900);

            } else if (self.level().value == -62) { //PHÉP CHIA 1DD:4XX
                results = phepchiandxnd(self.numberrange(), 400, 499, 10, 900);

            } else if (self.level().value == -63) { //PHÉP CHIA 1DD:5
                results = phepchiandxnd(self.numberrange(), 5, 5, 10, 900);

            } else if (self.level().value == -64) { //PHÉP CHIA 1DD:50
                results = phepchiandxnd(self.numberrange(), 50, 50, 10, 900);

            } else if (self.level().value == -65) { //PHÉP CHIA 1DD:5X
                results = phepchiandxnd(self.numberrange(), 50, 59, 10, 900);

            } else if (self.level().value == -66) { //PHÉP CHIA 1DD:5XX
                results = phepchiandxnd(self.numberrange(), 500, 599, 10, 900);

            } else if (self.level().value == -67) { //PHÉP CHIA 1DD:6
                results = phepchiandxnd(self.numberrange(), 6, 6, 10, 900);

            } else if (self.level().value == -68) { //PHÉP CHIA 1DD:60
                results = phepchiandxnd(self.numberrange(), 60, 60, 10, 900);

            } else if (self.level().value == -69) { //PHÉP CHIA 1DD:6X
                results = phepchiandxnd(self.numberrange(), 60, 69, 10, 900);

            } else if (self.level().value == -70) { //PHÉP CHIA 1DD:6XX
                results = phepchiandxnd(self.numberrange(), 600, 699, 10, 900);

            } else if (self.level().value == -71) { //PHÉP CHIA 1DD:7
                results = phepchiandxnd(self.numberrange(), 7, 7, 10, 900);

            } else if (self.level().value == -72) { //PHÉP CHIA 1DD:70
                results = phepchiandxnd(self.numberrange(), 70, 70, 10, 900);

            } else if (self.level().value == -73) { //PHÉP CHIA 1DD:7X
                results = phepchiandxnd(self.numberrange(), 70, 79, 10, 900);

            } else if (self.level().value == -74) { //PHÉP CHIA 1DD:7XX
                results = phepchiandxnd(self.numberrange(), 700, 799, 10, 900);

            } else if (self.level().value == -75) { //PHÉP CHIA 1DD:8
                results = phepchiandxnd(self.numberrange(), 8, 8, 10, 900);

            } else if (self.level().value == -76) { //PHÉP CHIA 1DD:80
                results = phepchiandxnd(self.numberrange(), 80, 80, 10, 900);

            } else if (self.level().value == -77) { //PHÉP CHIA 1DD:8X
                results = phepchiandxnd(self.numberrange(), 80, 89, 10, 900);

            } else if (self.level().value == -78) { //PHÉP CHIA 1DD:8XX
                results = phepchiandxnd(self.numberrange(), 800, 899, 10, 900);

            } else if (self.level().value == -79) { //PHÉP CHIA 1DD:9
                results = phepchiandxnd(self.numberrange(), 9, 9, 10, 900);

            } else if (self.level().value == -80) { //PHÉP CHIA 1DD:90
                results = phepchiandxnd(self.numberrange(), 90, 90, 10, 900);

            } else if (self.level().value == -81) { //PHÉP CHIA 1DD:9X
                results = phepchiandxnd(self.numberrange(), 90, 99, 10, 900);

            } else if (self.level().value == -82) { //PHÉP CHIA 1DD:9XX
                results = phepchiandxnd(self.numberrange(), 900, 999, 10, 900);

            } else if (self.level().value == -20) { //PHÉP NHÂN 2Dx2D
                results = phepnhanndxnd(self.numberrange(), 11, 99, 11, 99);

            } else if (self.level().value == -21) { //PHÉP NHÂN 3Dx2D
                results = phepnhanndxnd(self.numberrange(), 101, 999, 11, 99);

            } else if (self.level().value == -22) { //PHÉP NHÂN 4Dx2D
                results = phepnhanndxnd(self.numberrange(), 1001, 9999, 11, 99);

            } else if (self.level().value == -23) { //PHÉP NHÂN 3Dx3D
                results = phepnhanndxnd(self.numberrange(), 101, 999, 101, 999);

            } else if (self.level().value == -24) { //PHÉP NHÂN 4Dx3D
                results = phepnhanndxnd(self.numberrange(), 1001, 9999, 101, 999);

            } else if (self.level().value == -25) { //PHÉP NHÂN 4Dx4D
                results = phepnhanndxnd(self.numberrange(), 1001, 9999, 1001, 9999);

            } else if (self.level().value == -2) {
                // lý thuyết anh bạn nhỏ
                results = lythuyet_ANH_BAN_NHO(self.numberrange(), 99);
            } else if (self.level().value == -3) {
                // lý thuyết anh bạn lớn
                results = lythuyet_ANH_BAN_LON(self.numberrange(), 99);
            } else if (self.level().value == -4) {
                // lý thuyết anh bạn lớn kết hợp
                results = lythuyet_ANH_BAN_NHO_LON(self.numberrange(), 99);
            }

            // new Topics("PHÉP NHÂN 9Dx1D", -44),
            // new Topics("PHÉP NHÂN 10Dx1D", -45),
            // new Topics("PHÉP NHÂN 11Dx1D", -46),
            // new Topics("PHÉP NHÂN 12Dx1D", -47),
            // new Topics("PHÉP NHÂN 13Dx1D", -48),
            // new Topics("PHÉP NHÂN 14Dx1D", -49),
            // new Topics("PHÉP NHÂN 15Dx1D", -50),

            storage_result = results;

            self.hard("bài này khá dễ");

            self.image_loading("img/img" + generateRandomInteger(1, 31) + ".gif");

            console.log(results);

            for (var i = 0; i < results.numbers.length; i++) {
                self.number_temp.push((results.numbers[i] > 0 ? "+" : "") + results.numbers[i]);
                self.number_temp_all.push((results.numbers[i] > 0 ? "+" : "") + results.numbers[i]);
            }

            if (self.level().value < -1) {

            } else {
                self.number_temp.push("=?");
            }



            final_number = results.s;


            clearInterval(interval_timer);
            clearInterval(runtimer);
            clearInterval(timerFinal);
            clearInterval(startTick);
            clearInterval(soudStart);
            clearInterval(status_tien_trinh)

            if (self.level().value < -1) { // ly thuyet anh ban nho
                tinhtientrinh(6, 3000);
                soudStart = setTimeout(function () {
                    readtts(self.hard() + ', Các bạn hãy tập trung nào', true);
                }, 400);
                // startTick = setTimeout(function () {

                // }, 5000);

                $("#countdown").show();
                $("#countdown").countdown360({
                    radius: 150,
                    seconds: 3,
                    strokeWidth: 15,
                    label: ['', ''],
                    fillStyle: 'black',
                    strokeStyle: '#003F87',
                    fontSize: 150,
                    fontColor: 'white',
                    autostart: false,
                    smooth: true,
                    onComplete: function () {
                        // $("#countdown").hide();
                        self.isLoading(false);
                        self.tick();
                        tinhtientrinh(0, self.timer() * 1000 * self.number_temp().length + 4000);
                    }
                }).start()


            } else {
                if (self.stepbystep()) {
                    tinhtientrinh(0, 2000);
                    soudStart = setTimeout(function () {
                        readtts('Các bạn hãy tập trung nào', true);
                    }, 10);

                    $("#countdown").show();
                    $("#countdown").countdown360({
                        radius: 150,
                        seconds: 3,
                        strokeWidth: 15,
                        label: ['', ''],
                        fillStyle: 'black',
                        strokeStyle: '#003F87',
                        fontSize: 150,
                        fontColor: 'white',
                        autostart: false,
                        smooth: true,
                        onComplete: function () {
                            self.isLoading(false);
                            self.tick();
                        }
                    }).start()


                } else {
                    tinhtientrinh(6, 3000);
                    soudStart = setTimeout(function () {
                        readtts(self.hard() + ', Các bạn hãy tập trung nào', true);
                    }, 400);

                    $("#countdown").show();
                    
                    $("#countdown").countdown360({
                        radius: 150,
                        seconds: 3,
                        strokeWidth: 15,
                        label: ['', ''],
                        fillStyle: 'black',
                        strokeStyle: '#003F87',
                        fontSize: 150,
                        fontColor: 'white',
                        autostart: false,
                        smooth: true,
                        onComplete: function () {
                            // $("#countdown").hide();
                            console.log('completed');
                            self.isLoading(false);
                            self.tick();
                            interval_timer = setInterval(self.tick, self.timer() * 1000);
                            tinhtientrinh(0, self.timer() * 1000 * self.number_temp().length + 4000);
                        }
                    }).start()


                    startTick = setTimeout(function () {


                    }, 5000);
                }
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
            final_number = -0001;

        }




        var length = 12;
        var index = 0;

        var excersize = true;
        var ketqua = [];

        for (var i = 0; i < 0; i++) {
            result = randSorobanlevelN(11, 50, 99, -99, 99, false);

            console.log(result);

            if ((result.numbers.length) == length) {
                var str = "" + (index + 1);
                var pad = "000"

                if (excersize) {
                    var ans = pad.substring(0, pad.length - str.length) + str
                    var template = "<div><u>(" + (ans) + ")</u>. " + result.numbers.join(" ") + " = ...................... </div>"
                    if (index % 2 == 0) {
                        template = "<div><b><i><u>(" + (ans) + ")</u>. " + result.numbers.join(" ") + " = </i></b> ...................... </div>"
                    }
                    ketqua[index] = result.s;
                    index++;
                } else {
                    var ans = pad.substring(0, pad.length - str.length) + str
                    var template = "<div>" + (ans) + "." + result.numbers.join(" ") + " </div>"
                    if (index % 2 == 0) {
                        template = "<div><b><i><u>" + (ans) + "." + result.numbers.join(" ") + " = " + result.s + "</u></i></b></div>"
                    }
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