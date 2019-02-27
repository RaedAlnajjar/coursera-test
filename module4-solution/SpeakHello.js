
 var helloSpeaker = {};


(function(window){
	//var byeSpeaker = {};
	//byeSpeaker.name = "John";
	//var greetings = "Good Bye";
	var speakWord = "Hello";
	helloSpeaker.speak = function(name){
		console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);


