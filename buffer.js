// Defining buffer size in octets.
var buf1 = new Buffer(10);
// Creating buffer from array.
var buf2 = new Buffer([10, 20, 30, 40, 50]);
// Creating buffer from string. Defined encoding in second argument.
var buf3 = new Buffer('Simply Easy Learning', 'utf-8');

// Testing buffers 1, 2, 3.
console.log('Buffer 1 = ' + buf1);
console.log('Buffer 2 = ' + buf2);
console.log('Buffer 3 = ' + buf3);

// Testing write function of buffer.
var buf4 = new Buffer(20);
var len = buf4.write('Simply Easy Learning');
// write function returns the number of octets written.
console.log('Octets written: ' + len);

// Testing toString function of buffer.
var buf5 = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf5[i] = i + 97;
}
console.log(buf5.toString('ascii'));
// toString function takes encoding, starting index, and ending index as arguments.
console.log(buf5.toString('ascii', 0, 5));
console.log(buf5.toString('utf-8', 0, 5));
// toString function defaults encoding to utf-8 if undefined.
console.log(buf5.toString(undefined, 0, 5));

// Testing buffer conversion to JSON.
var buf6 = new Buffer('Simply Easy Learning');
var json = buf6.toJSON();
console.log(json);

// Testing Buffer.concat function.
var buf7 = new Buffer('TutorialsPoint ');
var buf8 = new Buffer('Simply Easy Learning');
// Buffer.concat can also specify total length of the concatenated buffer as an argument.
var buf9 = Buffer.concat([buf7, buf8]);
var buf10 = Buffer.concat([buf7, buf8], 7);
console.log('Buffer 9 = ' + buf9);
console.log('Buffer 10 = ' + buf10);

// Testing compare function of buffer.
var buf11 = new Buffer('ABC');
var buf12 = new Buffer('ABCD');
// The function returns the same result as the Java compare method.
var result = buf11.compare(buf12);
if (result < 0) {
    console.log(buf11 + ' comes before ' + buf12);
} else if (result === 0) {
    console.log(buf11 + ' is same as ' + buf12);
} else {
    console.log(buf11 + ' comes after ' + buf12);
}

// Testing copy function of buffer.
var buf13 = new Buffer('ABC');
var buf14 = new Buffer(3);
var buf15 = new Buffer(3);
// Source_Buffer.copy(Target_Buffer);
buf13.copy(buf14);
// copy function takes target buffer, starting index of target,
// starting index of source buffer, ending index of source as arguments.
buf13.copy(buf15, 1, 0, 2);
console.log('Buffer 14 = ' + buf14);
console.log('Buffer 15 = ' + buf15);

// Testing slice function of buffer.
var buf16 = new Buffer('TutorialsPoint');
// Arguments: starting index, ending index.
var buf17 = buf16.slice(0, 9);
console.log('Buffer 17 = ' + buf17);

// Testing length property of a buffer.
var buf18 = new Buffer('TutorialsPoint');
console.log('Buffer 18 length: ' + buf18.length);

// Ending message.
console.log('Program Ended');
