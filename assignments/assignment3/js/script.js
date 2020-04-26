

(function (window) {

		var helloSpeaker = {};
		var speakWord = "Hello";
		helloSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);


(function (window) {

		var byeSpeaker = {};
		var speakWord = "Good Bye";
		byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker

})(window);


(function () {

		var names = ["Ahsun", "John", "Jen", "Suhani", "Paul", "Frank", "Johnny", "Paula", "Jim", "Laura"];
		for (var i = 0; i < names.length; i++) {
			var firstLetter = names[i].charAt(0).toLowerCase();
			if (firstLetter === 'j') {
    			byeSpeaker.speak(names[i]);
  			} else {
    			helloSpeaker.speak(names[i]);
  			}
	}
})();