// http://visionmedia.github.io/mocha/

var assert = require("assert");

var URLParser = require("./../lib/url-parser");

describe("URL parser", function() {
    it("responds to parse", function() {
        URLParser.parse('http://www.google.fi/')
    });

    it("picks up host part", function() {
        [
          'www.google.fi',
          'www.sc5.fi'
        ].
        forEach(function (hostName) {
          assert.equal(hostName, URLParser.parse("http://" + hostName).hostName)
        });
    });

    it("doesn't break on invalid url", function() {
      assert.throws(URLParser.parse, Error);
      assert.throws(function() {URLParser.parse({})}, Error);
      assert.throws(function() {URLParser.parse(666)}, Error);
      assert.throws(function() {URLParser.parse("")}, Error);
    });

    it("picks up protocol", function() {
      [
        'http', 'https', 'ftp', 'gopher'
      ].
      forEach(function (protocol) {
        assert.equal(protocol, URLParser.parse(protocol + "://www.google.fi/").protocol)
      });
    });

    it("finds tld", function() {
      assert.equal('fi', URLParser.parse('http://www.google.fi').tld);
    });


});
