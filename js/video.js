var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});


document.addEventListener("DOMContentLoaded", function() {
    // Load video content (id: player1)
	var video = document.getElementById("player1"); // Initialize the video element
    console.log("Video initialized");
    video.loop = false; // turn off looping
	// console.log("Loop is set to false");

    // Play button
    document.getElementById("play").addEventListener("click", function() {
        video.play();
        updateVolume();
    });

    // Pause button
    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
        console.log("Pause Video");
    });

    // Slow down the video
    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed:", video.playbackRate);
    });

    // Speed up the video
    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("New speed:", video.playbackRate);
    });

    // Skip ahead 10 seconds
    document.getElementById("skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current location:", video.currentTime);
    });

    // Mute and unmute video
    document.getElementById("mute").addEventListener("click", function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
        updateVolume();
    });

    // Volume slider
    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        updateVolume();
    });

    function updateVolume() {
        var volumeDisplay = document.getElementById("volume");
        volumeDisplay.textContent = Math.round(video.volume * 100) + "%";
        console.log("Volume:", video.volume);
    }

    // Apply and remove the old school style
    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });

});

