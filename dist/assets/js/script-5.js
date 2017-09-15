(function () {
    // copied from underscorejs
    function isObject(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    }

    function updateObject(obj) {
        var sources = [].slice.call(arguments, 1);
        sources.forEach(function (source) {
            Object.getOwnPropertyNames(source).forEach(function (propName) {
                Object.defineProperty(obj, propName,
                    Object.getOwnPropertyDescriptor(source, propName));
            });
        });
        return obj;
    }

    function getURLParams() {
        var params = decodeURIComponent(window.location.search.substr(1)).split('&');
        var parsed = {};
        for (var i = 0, length = params.length; i < length; i++) {
            var el = params[i], kv = el.split('=');
            if (!kv[0])
                continue;
            if (kv.length === 1) {
                if (parsed.hasOwnProperty(el)) {
                    if (isObject(parsed[el])) {
                        parsed[el][parsed[el].length] = '';
                    } else {
                        parsed[el] = [parsed[el], ''];
                    }
                } else {
                    parsed[kv[0]] = '';
                }
            } else {
                var k = kv[0];
                var v = kv.slice(1).join('=');
                if (parsed.hasOwnProperty(k)) {
                    if (isObject(parsed[k])) {
                        parsed[k][parsed[k].length] = v;
                    } else {
                        parsed[k] = [parsed[k], v];
                    }
                } else {
                    parsed[k] = v;
                }
            }
        }
        return parsed;
    }

    window.get_params = function () {
        return updateObject(getURLParams(), {
            'offer_id': parseInt('3387'),
            'safe_uid': 'b111257ce5ebbaacc2f152e90c1a2b33',
            'preland_id': parseInt('9794'),
            'slave_prefix_id': 'us',
            'country_code': 'es',
            'browser_locale': 'es',
            'order_placed': parseInt('0'),
            'etag': window['__sc_int_uid'],
        });

    };
})();
