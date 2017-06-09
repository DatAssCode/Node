var fs = require("fs");
var zlib = require("zlib");

var readerStream = fs.createReadStream('input.txt');

var writeStream = fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);

/*
**
**		how to unzip and zip files.
**
*/

fs.createReadStream("input.txt")
		.pipe(zlib.createGzip())
		.pipe(fs.createWriteStream("output2.txt.zip"));

fs.createReadStream("output2.txt.zip")
		.pipe(zlib.createGunzip())
		.pipe(fs.createWriteStream("input.txt"));

console.log("Program Ended.");