var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk){
	data += chunk;
});

readerStream.on('end', function(){
	console.log(data);
});

readerStream.on('error', function(err){
	console.log(err.stack);
});

console.log('End of reading program. \n\n');

var writeData = 'Writing to the output text file, funny enough the output file is called "output.txt"...';

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(writeData, 'UTF8');

writerStream.end();

writerStream.on('finish', function(){
	console.log("Write complete.");
});

writerStream.on('error', function(err){
	console.log(err.stack);
});