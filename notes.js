console.log('inside notes.js');


/*anonymous function*/
/*module.exports.addNode = function(){
	return 'New Note';	
}*/
var addNote = (title,body)=>{
	console.log('adding note '+title+body);
}
var getAllNotes =()=>{
	
}

var remove=(title)=>{
	console.log('remove note '+title);
}
var getNote=(title)=>{
	console.log('return body for '+title);
}
module.exports ={
	addNote:addNote,
	getAllNotes,
	getNote,
	remove
}


