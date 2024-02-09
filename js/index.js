const video = document.getElementById('videoMobil');

video.addEventListener('timeupdate', function () {
    if (video.currentTime >= 10) {
        video.currentTime = 0;
        video.play();
    }
});