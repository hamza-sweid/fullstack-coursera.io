(function (window) {
	var byeSpeaker = {};
	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}
	byeSpeaker.speak();
	var speakWord = "Good Bye";
	window.byeSpeaker = byeSpeaker;
})(window);