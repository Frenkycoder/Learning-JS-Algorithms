function harmlessRansomNote (noteText, magazineText) {
	// body... 
	var noteArr = noteText.split(' ');
	var magazArr = magazineText.split(' ');
	var magazineObj = {};

	magazArr.forEach( word => {
		if(!magazineObj.word) magazineObj.word = 0;
		magazineObj.word++;
	});

	var noteIsPossible = true;
	noteArr.forEach(word => {
		if (magazineObj.word) {
			magazineObj.word--;
			if (magazineObj.word) noteIsPossible = false;
		}
		else noteIsPossible = false;
	});

	return noteIsPossible;
}

var str1 = "There's a shadow hanging over me";
var str2 = "Yesterday,All my troubles seemed so far awayNow it looks as though they're here to stay Oh, I believe in yesterday";

harmlessRansomNote(str1, str2);
