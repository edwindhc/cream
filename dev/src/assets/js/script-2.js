var sp_form_fields = {
    ES: {
        hint: 'El campo está vacío',
        input: {
            street: {
                desc: 'Calle',
                req: true,
                add: 'Calle '
            },
            house: {
                desc: 'Numero de casa',
                req: true,
                add: ', '
            },
            entrance: {
                desc: 'Portal / Escalera',
                req: true,
                add: ', '
            },
            floor: {
                desc: 'Planta',
                req: true,
                add: ', planta-'
            },
            apartment: {
                desc: 'Puerta',
                req: true,
                add: ', puerta-'
            },
            city: {
                desc: 'Ciudad',
                req: true,
                add: ', '
            },
            postal_code: {
                desc: 'Codigo postal',
                req: true,
                add: ', '
            },
            comment: {
                desc: 'Comentario para la mensajeria',
                req: true
            }
        }
    },
    PL: {
        hint: 'Pole nie wypełnione',
        input: {
            street: {
                desc: 'Ulica',
                req: true,
                add: 'ul. '
            },
            house: {
                desc: 'Nr domu',
                req: true,
                add: ' '
            },
            apartment: {
                desc: 'Nr mieszkania',
                req: true,
                add: '/'
            },
            floor: {
                desc: 'Piętro',
                req: false,
                add: ' '
            },
            postal_code: {
                desc: 'Kod pocztowy',
                req: true,
                add: ' '
            },
            city: {
                desc: 'Miejscowość',
                req: true,
                add: ' '
            },
            comment: {
                desc: 'Uwagi dla kuriera',
                req: true
            }
        }
    },
    IT: {
        hint: 'Campo non compilato',
        input: {
            postal_code: {
                desc: 'CAP',
                req: true
            },
            city: {
                desc: 'Citta`',
                req: true,
                add: ' '
            },
            street: {
                desc: 'Via',
                req: true,
                add: ', '
            },
            house: {
                desc: 'Numero civico',
                req: true,
                add: ' '
            },
            entrance: {
                desc: 'Scala',
                req: false,
                add: ' scala '
            },
            floor: {
                desc: 'Piano',
                req: false,
                add: ', '
            },
            apartment: {
                desc: 'Numero interno',
                req: true,
                add: ', int.'
            },
            comment: {
                desc: 'Commenti per il corriere',
                req: true
            }
        }
    },
    PT: {
        hint: 'Campo não preenchido',
        input: {
            street: {
                desc: 'Rua',
                req: true
            },
            house: {
                desc: 'Casa',
                req: true,
                add: ', '
            },
            entrance: {
                desc: 'Portão',
                req: false,
                add: ', portão '
            },
            floor: {
                desc: 'Andar',
                req: false,
                add: ', ',
                ade: ' andar'
            },
            apartment: {
                desc: 'Apartamento',
                req: true,
                add: ', ap.'
            },
            city: {
                desc: 'Cidade',
                req: true,
                add: ', '
            },
            postal_code: {
                desc: 'Código postal',
                req: true,
                add: ' '
            },
            comment: {
                desc: 'Comentário para a transportadora',
                req: true
            }
        }
    },
    RO: {
        hint: 'Câmpul nu a fost completat',
        input: {
            postal_code: {
                desc: 'Cod postal',
                req: true
            },
            district: {
                desc: 'Judet',
                req: true,
                add: ', judetul '
            },
            city: {
                desc: 'Localitatea',
                req: true,
                add: ', localitatea '
            },
            street: {
                desc: 'Strada',
                req: true,
                add: ', strada '
            },
            house: {
                desc: 'Nr',
                req: true,
                add: ', nr. '
            },
            housing: {
                desc: 'Bloc',
                req: true,
                add: ', bl. '
            },
            entrance: {
                desc: 'Scara',
                req: true,
                add: ', sc. '
            },
            floor: {
                desc: 'Etaj',
                req: true,
                add: ', et. '
            },
            apartment: {
                desc: 'Apartament',
                req: true,
                add: ', ap. '
            },
            comment: {
                desc: 'Comentarii serviciu curierat',
                req: true
            }
        }
    },
    FR: {
        hint: 'Le champs n\'a pas été renseigné',
        input: {
            house: {
                desc: 'numéro du bâtiment',
                req: true
            },
            street: {
                desc: 'nom de la rue',
                req: true,
                add: ' '
            },
            postal_code: {
                desc: 'code postal',
                req: true,
                add: ' '
            },
            city: {
                desc: 'nom de la ville',
                req: true,
                add: ' '
            },
            entrance: {
                desc: 'entrée',
                req: false,
                add: ' '
            },
            floor: {
                desc: 'étagé',
                req: false,
                add: ' '
            },
            apartment: {
                desc: 'numéro de l\'appartement',
                req: false,
                add: ' '
            },
            comment: {
                desc: 'Commentaire pour le facteur',
                req: true
            }
        }
    },
    GR: {
        hint: 'Το πεδίο δεν έχει συμπληρωθεί',
        input: {
            street: {
                desc: 'Οδός',
                req: true
            },
            house: {
                desc: 'Αρ.Κτιρίου',
                req: true,
                add: ' '
            },
            district: {
                desc: 'Περιοχή',
                req: true,
                add: ', '
            },
            city: {
                desc: 'Πόλη',
                req: true,
                add: ', '
            },
            postal_code: {
                desc: 'Ταχ.Κώδικας',
                req: true,
                add: ', '
            },
            entrance: {
                desc: 'Είσοδος',
                req: false,
                add: ', '
            },
            locality: {
                desc: 'Συνοικισμός',
                req: {
                    GR: true,
                    CY: false
                },
                add: ', '
            },
            floor: {
                desc: 'Όροφος',
                req: {
                    GR: false,
                    CY: true
                },
                add: ', '
            },
            apartment: {
                desc: 'Διαμέρισμα',
                req: {
                    GR: false,
                    CY: true
                },
                add: ', '
            },
            comment: {
                desc: 'Πληροφορίες για τον Courier',
                req: true
            }
        }
    },
    DE: {
        hint: 'Dieses Feld wurde nicht ausgefüllt',
        input: {
            street: {
                desc: 'Strasse',
                req: true
            },
            house: {
                desc: 'Hausnummer',
                req: true,
                add: ' '
            },
            entrance: {
                desc: 'Stiege',
                req: false,
                add: ' ',
                none: 'AT'
            },
            floor: {
                desc: 'Stock',
                req: false,
                add: ' '
            },
            apartment: {
                desc: 'Türnummer',
                req: false,
                add: ' ',
                none: 'AT'
            },
            postal_code: {
                desc: 'Postleitzahl',
                req: true,
                add: ' '
            },
            city: {
                desc: 'Stadt',
                req: true,
                add: ' '
            },
            comment: {
                desc: 'Kommentar für den Kurierdienst',
                req: true
            }
        }
    },
    BG: {
        hint: 'Полето не е попълнено',
        input: {
            street: {
                desc: 'улица / кв./ ж.к.',
                req: true,
                add: 'улица '
            },
            house: {
                desc: 'номер/блок',
                req: true,
                add: ' '
            },
            entrance: {
                desc: 'вход',
                req: true,
                add: ', вх. '
            },
            floor: {
                desc: 'етаж',
                req: true,
                add: ', ет. '
            },
            apartment: {
                desc: 'апартамент',
                req: true,
                add: ', ап. '
            },
            locality: {
                desc: 'област',
                req: false,
                add: ' обл. '
            },
            postal_code: {
                desc: 'пощенски код',
                req: true,
                add: ' '
            },
            city: {
                desc: 'град/село',
                req: true,
                add: ' '
            }
            /*,
                      	comment:{
            				desc:'Коментари за куриера',
            				req:true
                        }*/
        }
    },
    CZ: {
        hint: 'Toto pole není vyplněno',
        input: {
            street: {
                desc: 'ulice',
                req: true
            },
            house: {
                desc: 'číslo popisné a orientační',
                req: true,
                add: ' '
            },
            postal_code: {
                desc: 'PSČ',
                req: true,
                add: ', '
            },
            city: {
                desc: 'město',
                req: true,
                add: ' '
            },
            entrance: {
                desc: 'vchod',
                req: false,
                add: ' '
            },
            floor: {
                desc: 'patro',
                req: false,
                add: ' '
            },
            apartment: {
                desc: 'číslo bytu',
                req: false,
                add: ' '
            },
            comment: {
                desc: 'poznámka pro kurýra',
                req: true
            }
        }
    },
    SK: {
        hint: 'Pole je prázdne',
        input: {
            street: {
                desc: 'Ulica',
                req: true
            },
            house: {
                desc: 'Cislo domu',
                req: true,
                add: ' '
            },
            postal_code: {
                desc: 'PSČ',
                req: true,
                add: ' '
            },
            city: {
                desc: 'Mesto',
                req: true,
                add: ' '
            },
            entrance: {
                desc: 'Vchod',
                req: false,
                add: ' '
            },
            floor: {
                desc: 'Poschodie',
                req: false,
                add: ' '
            },
            apartment: {
                desc: 'Cislo bytu',
                req: false,
                add: ' '
            },
            comment: {
                desc: 'Komentar pre kuriera',
                req: true
            }
        }
    },
    HU: {
        hint: 'A mező nincs kitöltve',
        input: {
            postal_code: {
                desc: 'Irányítószám',
                req: false,
                ade: ', '
            },
            city: {
                desc: 'Város',
                req: true,
                ade: ', '
            },
            street: {
                desc: 'Út',
                req: true,
                ade: ' '
            },
            house: {
                desc: 'Házszám',
                req: true
            },
            entrance: {
                desc: 'Lépcsőház',
                req: false,
                add: ', '
            },
            floor: {
                desc: 'Emelet',
                req: false,
                add: ', '
            },
            apartment: {
                desc: 'Lakás',
                req: false,
                add: ', '
            },
            comment: {
                desc: 'Megjegyzés futár számára',
                req: false
            }
        }
    },
    CN: {
        hint: '此空未填',
        input: {
            postal_code: {
                desc: '邮政编号',
                req: true
            },
            locality: {
                desc: '省',
                req: true,
                add: ', '
            },
            city: {
                desc: '市',
                req: true,
                add: ', '
            },
            street: {
                desc: '街道地址',
                req: true,
                add: ', '
            },
            house: {
                desc: '号',
                req: true,
                add: ', '
            },
            entrance: {
                desc: '大门',
                req: false,
                add: ', '
            },
            floor: {
                desc: '楼',
                req: false,
                add: ', '
            },
            apartment: {
                desc: '房间号码',
                req: true,
                add: ', '
            },
            comment: {
                desc: '注释',
                req: false
            }
        }
    },
    VN: {
        hint: 'Ô còn trống',
        input: {
            postal_code: {
                desc: 'mã bưu',
                req: true
            },
            locality: {
                desc: 'Tỉnh',
                req: true,
                add: ', '
            },
            city: {
                desc: 'Thành phố',
                req: true,
                add: ', '
            },
            street: {
                desc: 'Đường',
                req: true,
                add: ', '
            },
            house: {
                desc: 'Số nhà',
                req: true,
                add: ', '
            },
            entrance: {
                desc: 'Cổng số',
                req: false,
                add: ', '
            },
            floor: {
                desc: 'Tầng số',
                req: false,
                add: ', '
            },
            apartment: {
                desc: 'Căn hộ số',
                req: true,
                add: ', '
            },
            comment: {
                desc: 'Ghi chú',
                req: false
            }
        }
    }
};
var user_db = {};
$(document).ready(function() {
    $(".pre_toform").on("touchend click", function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $('#formulario, #scrollForm').offset().top
        }, 400);
    });

    function errorMs(elem, msg) {
        $(".js_errorMessage2").remove();
        $('<div class="js_errorMessage2">' + msg + '</div>').appendTo('body').css({
            'left': $(elem).offset().left,
            'top': $(elem).offset().top - 30,
            'background-color': '#e74c3c',
            'border-radius': '5px',
            'color': '#fff',
            'font-family': 'Arial',
            'font-size': '14px',
            'margin': '3px 0 0 0px',
            'padding': '6px 5px 5px',
            'position': 'absolute',
            'z-index': '9999'
        });
        $(elem).focus();
    }
    $(window).resize(function() {
        $(".js_errorMessage2").remove();
        $(".js_errorMessage").remove();
    });
    $('.js_pre_toform').on("touchend click", function(e) {
        e.preventDefault();
        $(".js_errorMessage2").remove();
        $(".js_errorMessage").remove();
        var errors = 0,
            form = $(this).closest('form'),
            name = form.find('[name="name"]'),
            phone = form.find('[name="phone"]'),
            countryp = form.find('[id="country_code_selector"]').val(),
            namep = name.val(),
            phonep = phone.val(),
            rename = /^[\D+ ]*$/i,
            rephone = /^[0-9\-\+\(\) ]*$/i;
        if (name.attr('data-count-length') == "2+") {
            var rename = /^\D+\s[\D+\s*]+$/i;
        }
        if (!namep.length) {
            errors++;
            errorMs(name, defaults.get_locale_var('set_fio'));
        } else if (!rename.test(namep)) {
            errors++;
            errorMs(name, defaults.get_locale_var('error_fio'));
        } else if (!phonep || !phonep.length) {
            errors++;
            errorMs(phone, defaults.get_locale_var('set_phone'));
        } else if (!rephone.test(phonep) || phonep.length < 5) {
            errors++;
            errorMs(phone, defaults.get_locale_var('error_phone'));
        }
        if (!errors > 0) {
            var mas = {};
            form.find('input,textatea,select').each(function() {
                mas[$(this).attr('name')] = $(this).val();
            });
            $.post('/order/create/', mas, serv);

            function serv(data) {
                $('input[name="esub"]').val(data.esub);
                user_db.esub = data.esub;
                if (data.pixel_code) {
                    $('body').append(data.pixel_code)
                }
            }
            $('.hidden-window').find('input').each(function() {
                var nm = $(this).attr('name');
                if (nm == 'name') $(this).val(namep);
                if (nm == 'phone') $(this).val(phonep);
            });
            $('.hidden-window select#country_code_selector option[value=' + countryp + ']').prop("selected", true);
            user_db.name = namep;
            user_db.phone = phonep;
            user_db.cc = countryp;
            $('.toform:eq(0)').click();
            return false;
        }
    });

    if ($('body').data('lang') && $('.hidden-window .input_inner').length) {
        var sp_cc = $('body').data('lang').toUpperCase();
        if (sp_cc == 'CY') sp_cc = 'GR';
        if (sp_cc == 'AT') sp_cc = 'DE';
        if (sp_form_fields[sp_cc]) {
            var sp_obj = sp_form_fields[sp_cc],
                sp_inp = '',
                $sp_form = $('.hidden-window form'),
                $button = $sp_form.find('.js_submit'),
                inp = sp_obj.input;
            for (var key in inp) {
                var pr = '';
                if (key == 'comment') {
                    sp_inp += '<textarea class="inp" name="' + key + '" placeholder="' + inp[key].desc + '" type="text" rows="3" style="height:90px !important;min-height:90px !important;max-height:90px !important;max-width:100%;"></textarea>\n';
                } else {
                    if (inp[key].none) pr = ' data-none="' + inp[key].none + '"';
                    sp_inp += '<input' + pr + ' class="inp" name="' + key + '" placeholder="' + inp[key].desc + '" type="text" autocomplete="off">\n';
                }
            }
            $sp_form.find('.input_inner').html(sp_inp);
            $button.hide().before($button.clone().removeClass('js_submit').addClass('js_pre_submit').show());
            $sp_form.find('[name="address"]').attr('type', 'hidden').val(' ');
            saver.init();
            $('.toform').on("touchend click", function(e) {
                e.preventDefault();
                $('.hidden-window .input_inner input[data-none]').each(function() {
                    if ($(this).data('none') != $sp_form.find('#country_code_selector').val()) $(this).hide();
                });
            });
            $('.js_pre_submit').on("touchend click", function(e) {
                e.preventDefault();
                var ms = '',
                    errors = 0,
                    mes = defaults.get_locale_var('set_address'),
                    def = '';
                if (sp_obj.hint) mes = sp_obj.hint;
                $(this).closest('form').find('input:visible,textarea:visible').each(function() {
                    var a = $(this).attr('name'),
                        req = false;
                    if (inp[a]) {
                        if (!$(this).val().length) {
                            if (typeof inp[a].req == 'object') {
                                if (inp[a].req[$sp_form.find('#country_code_selector').val()] != undefined) req = inp[a].req[$sp_form.find('#country_code_selector').val()];
                            } else {
                                req = inp[a].req;
                            }
                            if (req) {
                                errors++;
                                errorMs($(this), mes);
                                return false;
                            }
                        } else if (a != 'comment') {
                            if (inp[a].add != undefined) ms += inp[a].add;
                            ms += $(this).val();
                            if (inp[a].ade != undefined) ms += inp[a].ade;
                        }
                    }

                });
                if (errors == 0) {
                    $sp_form.find('input[name="address"]').val(ms);
                    $button.click();
                }
            });
        }
    }
});
