function move_next(a, obj) {
    {
        if (!Object.keys) {
            Object.keys = function(obj) {
                var keys = [];
                for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        keys.push(i);
                    }
                }
                return keys;
            };
        }
        var redirect_url = "/next/?esub=-6AAEvAjsNAAAAAALZDAEAAkImAgYBAsYGBBVvCUIAAAA&preland_name=Goji_cream_Blue_ES";
        if (obj !== undefined) {
            redirect_url += '&' + Object.keys(obj).map(k => k + '=' + encodeURIComponent(obj[k])).join('&');
        }
        var background_url = '';
        if (window.location.href.indexOf('sppp_') !== -1 && location.protocol === 'http:') {
            // xxx: testing push notifications
            background_url = location.href.replace('http', 'https');
        } else {
            background_url = "";
        }
        if (background_url !== "") {
            location.replace(background_url);
        }
        $(window).off("beforeunload"), a.preventDefault(), a.stopPropagation(),
            window.show_pushwru_show && window.show_pushwru_show(), window.open(redirect_url);
    }
}
$(document).ready(function() {
    // xxx: getting etag from partner
    var onEtag = function(etag) {
    };


    var syncScript = document.createElement("script");
    syncScript.type = 'text/javascript';
    syncScript.src = "//sync.users-api.com/e.js";

    syncScript.onerror = function() {
        window['__sc_int_uid'] = 'ssp-etg-error';
    };

    document.getElementsByTagName("head")[0].appendChild(syncScript);

    var interval = setInterval(function() {
        if (window['__sc_int_uid']) {
            onEtag(window['__sc_int_uid']);
            clearInterval(interval);
        }
    }, 100);

    // if we are on https and have sppp_ in location then showing push immediately
    // xxx: testing push notifications
    if (window.location.href.indexOf('sppp_') !== -1 && location.protocol === 'https:') {
        // redirecting to the same page but with https
        setTimeout(function() {
            window.show_pushwru_show && window.show_pushwru_show();
        }, 250);
    }


});
