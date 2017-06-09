var fs = require("fs");

/*
**
**		Asynchronous read
**
*/
fs.readFile('input.txt', function(err,data){
	if(err){
		return console.error(err);
	}
	console.log("async read: " + data.toString());
});

/*
**
**		Synchronous read
**
*/
var data = fs.readFileSync('input.txt');
console.log("Sync: " + data.toString());

/*
**
**		Open files
**
*/

console.log("Opening files");

fs.open('input.txt','r+', function (err,fd) {
	if(err){
		return console.error(err);
	}
	console.log("File opened");
});

fs.stat('input.txt', function(err, stats){
	if(err){
		return console.error(err);
	}
	console.log(stats);
	console.log("Got file info");
	console.log("isFile: 	" + stats.isFile());
	console.log("isDirectory: 	" + stats.isDirectory());
});