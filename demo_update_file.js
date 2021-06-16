/*The File System module has methods for updating files:
fs.appendFile():  method appends the specified content at the end of the specified file.
fs.writeFile(): method replaces the specified file and content.
 */
var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) { //Append "This is my text." to the end of the file "mynewfile1.txt".
    if (err) throw err;
    console.log('Updated!');
});

fs.writeFile('mynewfile3.txt', 'Hello', function (err) { //Replace the content of the file "mynewfile3.txt". (replace=değiştirmek) Yanaı silip üstüne yazıyor.
    if (err) throw err;
    console.log('Replaced!');
});