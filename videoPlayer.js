var mediaPlayer;

if(window.innerWidth < 800) {
	document.getElementById("search-bar").style.width = '100px';
}

function initialiseMediaPlayer() {
	var title = document.getElementById("search-bar").value;
	var words = title.split(" ");
	var letter;
	if(words[0].toLowerCase() == 'the') {
		letter = words[1].charAt(0).toLowerCase();
	} else {
		letter = words[0].charAt(0).toLowerCase();
	}
	var path = 'media/movies/'+letter+'/'+title+'.mp4';
	mediaPlayer = document.getElementById('video');
	mediaPlayer.style.backgroundColor = 'black';
	video.setAttribute("src", path);
	video.setAttribute("type",'video/mp4');
	video.setAttribute("controls",'true');
	video.autoplay = true;
}
