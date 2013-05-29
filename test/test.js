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

    it("picks up host part", function() {
        // Uh-oh.  Now you need to decide what this URLParser beast
        // will start to look like from user perspective...
    });

    // Your next great feature covered here.

    // And don't forget to cover the behavior in case of broken, evil
    // or plain stupid usecases.
});
