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
            scrollTop: $('#order_form,.scrollform').offset().top
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

});
