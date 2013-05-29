var URLRegExp = new RegExp("^(\\w+)://([^/]*)([^?]*)");

/*
 * Supported: scheme, hostname, path, query string, fragment
 * Unsupported: userinfo, IPv6 in hostname, port, query, fragment,
 * validation (e.g. checking for mandatory parts)
 */
exports = module.exports = {
    parse: function(urlString) {
        var match = urlString.match(URLRegExp);
        if ( match ) {
            return {
                scheme: match[1],
                hostname: match[2],
                path: match[3],
            };
        } else {
            throw Error("Invalid URL");
        }
    }
};
