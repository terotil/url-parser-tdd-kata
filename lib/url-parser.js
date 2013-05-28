function parse(url) {
  var matches = url.match(/(\w+):\/\/([^\/]+)\/?/);
  var protocol = matches && matches[1];
  var hostName = matches && matches[2];
  var tld = hostName.split(".").pop();

  if(url.length === 0) {
    throw new Error('joku viesti Nickelle');
  }

  return {
    protocol: protocol,
    hostName: hostName,
    tld: tld
  };
}

exports = module.exports = {
  parse: parse
};