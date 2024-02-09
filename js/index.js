document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('videoMobil');

    video.addEventListener('timeupdate', function () {
        if (this.currentTime >= 5) {
            this.currentTime = 0;
            this.play();
        }
    }, false);
});