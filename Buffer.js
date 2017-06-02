var buf = new Buffer(265);
len = buf.write("Simply Easy Learning");

console.log("Buf: " + len + "\n\n");

var bufA = new Buffer(26);
for (var i = 0; i < 26; i++) {
	bufA[i] = i + 97;
}
console.log(bufA.toString('ascii'));
console.log(bufA.toString('ascii', 0, 5));
console.log(bufA.toString('utf8', 0, 5));
console.log(bufA.toString(undefined, 0, 5));

console.log("\n\n");

var bufB = new Buffer("Simply The Best...");
var json = bufB.toJSON(bufB);

console.log(json);
console.log("\n\n");

var bufCA = new Buffer("YM");
var bufCB = new Buffer("CA");
var bufCC = Buffer.concat([bufCA, bufCB]);

console.log(bufCC.toString());
console.log("\n\n");

var bufDA = new Buffer("ABC");
var bufDB = new Buffer("ABCD");
var result = bufDA.compare(bufDB);

console.log("BufDA compare: " + result);
console.log("\n\n");

bufEA = new Buffer("aaAAAY");
bufEB = new Buffer(3);

bufEA.copy(bufEB);

console.log("BufEB compare: " + bufEB.toString());
console.log("\n\n");

bufFA = new Buffer("Hello world?!!!");
var bufFB = bufFA.slice(0,4);
console.log(bufFB.toString());
console.log("slice buffer length: " + bufFB.length);
console.log("\n\n");