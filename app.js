/*node modules*/
const fs = require('fs');
const os = require('os');

/*3rd party modules*/
var _ = require('lodash');
var yargs = require('yargs');

/*modules Arpit  created*/
const notes = require('./notes.js');

/*
var name = os.hostname();
fs.appendFile('op.txt','\nHello !'+`${name}`,function(err){
	if(err){
		console.log('data append failed to file !!');
	}
});

var sum = notes.addNos(-33,2);
console.log('sum is '+sum);
// loadash example
var diff1 = _.difference([2, 1,'g',66], [2, 3,5,6]);
console.log(`${diff1}`);
console.log('filtered array is '+_.uniq([1,2,33,4,5,5,5]));
*/

var command = process.argv[2];
var ar = yargs.argv;

console.log('from process:  ' +command);
console.log('from yargs:  ' +ar);
switch(command){
	case 'add':
		notes.addNote(process.argv[3],process.argv[4]);
		break;
		
	case 'list':
		notes.getAllNotes();
		break;
		
	case 'read':
		notes.getNote(process.argv[3]);
	//	notes.getNote(ar.title);
		break;
		
    case 'remove':
		notes.remove(process.argv[3]);
		break;	
	
	default:
		console.log('invalid command');
		break;
}

