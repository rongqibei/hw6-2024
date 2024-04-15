var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// console.log("Autoplay is set to false");
});


document.addEventListener("DOMContentLoaded", function() {
    // Load video content (id: player1)
	var video = document.getElementById("player1"); // Initialize the video element
    console.log("Video initialized");
    video.loop = false; // turn off looping
	// console.log("Loop is set to false");

    // Play the video and update the volume information.  
    document.getElementById("play").addEventListener("click", function() {
        video.play();
        updateVolume();
    });

    // Pause the video.
    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
        console.log("Pause Video");
    });

	// Increase the current video speed each time the button is clicked and log the new speed to the console.
    // Slow down the video
    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("Slow down video\nSpeed is:", video.playbackRate);
    });

    // Speed up the video
    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("Speed up video\nSpeed is:", video.playbackRate);
    });

    // Advance the current video by 10 seconds.
    document.getElementById("skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) { // If the video length has been exceeded go back to the start of the video - no farther.
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Skip ahead\nCurrent location:", video.currentTime); // Log the current location of the video.
    });

    // Mute/unmute the video and update the text in the button.
    document.getElementById("mute").addEventListener("click", function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
		console.log(video.muted ? "Muted" : "Umuted");
        updateVolume();
    });

    // Change the volume based on the slider and update the volume information.
    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        updateVolume();
    });

    function updateVolume() {
        var volumeDisplay = document.getElementById("volume");
        volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
        console.log("Volume:", video.volume);
    }

    // Utilize the existing oldSchool class on the video element
    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

	// Remove the oldSchool class from the video.
    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });

});

