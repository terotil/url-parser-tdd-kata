// Pointers
// http://visionmedia.github.io/mocha/#getting-started
// http://nodejs.org/api/assert.html

var assert = require("assert");

var URLParser = require("./../lib/url-parser");

describe("URL parser", function() {
    it("responds to parse", function() {
        // Start with greening this.  And feel free to go back and
        // change or remove this whole test if you decide to make the
        // interface look different.
        URLParser.parse('http://www.google.fi/')
    });

    it("fails on weird input", function() {
        assert.throws(function() { URLParser.parse(); });
        assert.throws(function() { URLParser.parse(1, "scheme://test"); });
        assert.throws(function() { URLParser.parse({}); });
        assert.throws(function() { URLParser.parse(null); });
        assert.throws(function() { URLParser.parse(-123); });
        assert.throws(function() { URLParser.parse(""); });
    });

    it("picks up scheme, host and path", function() {
        assert.deepEqual(URLParser.parse('scheme://hostname/path'), {
            scheme: "scheme",
            hostname: "hostname",
            path: "/path"
        });
        assert.deepEqual(URLParser.parse('http://www.google.fi'), {
            scheme: "http",
            hostname: "www.google.fi",
            path: ""
        });
        assert.deepEqual(URLParser.parse('file:///foo/bar'), {
            scheme: "file",
            hostname: "",
            path: "/foo/bar"
        });
    });

});
