// http://visionmedia.github.io/mocha/

var assert = require("assert");

var URLParser = require("./../lib/url-parser");

describe("URL parser", function() {
    it("responds to parse", function() {
        URLParser.parse('http://www.google.fi/')
    });

    it("picks up host part", function() {
        // ...
    })
});
