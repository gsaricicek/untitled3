//The URL module splits up a web address into readable parts.
// url.parse(): Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties.
var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'


/*
http://localhost:8080/default.htm?year=2017&month=february

http:// ->protocol
localhost:8080 ->host (www.geegksforgeeks.org da bir host)
/default.htm -> path name
?year=2017&month=february -> search query

 */