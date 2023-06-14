//your JS code here. If required.
let audios = [
                "applause",
                "boo",
                "gasp",
                "tada",
                "victory",
                "wrong"
];
let activeAudio = null ;
const buttonss = document.getElementsByTagName("button");

function playAudio(){
    stopAudio();
    activeAudio.play();
}
function stopAudio(){
    if(activeAudio){
		activeAudio.pause();
	}
}

for(let i = 0; i < buttonss.length; i++) {
    buttonss[i].addEventListener("click", (event) => {
        let innerText = event.target.innerText ;
        if(audios.includes(innerText)){
            // play that particular audio
            let audioElement = document.createElement("audio");
            audioElement.src = `./audio/${innerText}.mp3`;
            audioElement.controls = true ;
            activeAudio = audioElement;
			playAudio();
		}
		else {
			stopAudio();
		}
	})
}