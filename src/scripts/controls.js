document.addEventListener('DOMContentLoaded', initialiseControl);

function initialiseControl() {
    for (let container of document.querySelectorAll('.video-player')) {
        const video = container.querySelector('video');
        const playBtn = container.querySelector('.play-btn');
        const icon = playBtn.querySelector('i');
        const seekSlider = container.querySelector('.seek-slider');
        const progress = container.querySelector('progress');

        // Play/Pause toggle
        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                icon.className = "fa fa-pause";
            } else {
                video.pause();
                icon.className = "fa fa-play";
            }
        });

        // Update progress bar and slider as video plays
        video.addEventListener('timeupdate', () => {
            const val = (video.currentTime / video.duration) * 100;
            progress.value = video.currentTime / video.duration;
            seekSlider.value = val;
            
            if (video.ended) {
                icon.className = "fas fa-undo";
            }
        });

        // Seek functionality (Drag/Click)
        seekSlider.addEventListener('input', () => {
            const time = (seekSlider.value / 100) * video.duration;
            video.currentTime = time;
        });

        // Reset icon if video is replayed after ending
        video.addEventListener('play', () => {
            if (icon.classList.contains("fa-undo")) {
                icon.className = "fa fa-pause";
            }
        });
    }
}