document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("zoomOverlay");
    document.addEventListener("click", (e) => {
        const card = e.target.closest(".paper-shoot");
        
        if (card && !overlay.classList.contains("active")) {
            const cardClone = card.cloneNode(true);
            
            overlay.innerHTML = "";
            overlay.appendChild(cardClone);
            
            overlay.classList.add("active");
        }
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("active");
            setTimeout(() => {
                if (!overlay.classList.contains("active")) {
                    overlay.innerHTML = "";
                }
            }, 300);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && overlay.classList.contains("active")) {
            overlay.classList.remove("active");
            setTimeout(() => {
                overlay.innerHTML = "";
            }, 300);
        }
    });
});

const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
const playerContainer = document.querySelector('.music-player');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationTimeDisplay = document.getElementById('durationTime');

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

if (playBtn && audio) {
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = 'Pause ⏸';
            playerContainer.classList.add('playing');
        } else {
            audio.pause();
            playBtn.textContent = 'Play ▶';
            playerContainer.classList.remove('playing');
        }
    });

    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progressPercent;
            currentTimeDisplay.textContent = formatTime(audio.currentTime);
        }
    });

    audio.addEventListener('loadedmetadata', () => {
        durationTimeDisplay.textContent = formatTime(audio.duration);
    });

    progressBar.addEventListener('input', () => {
        if (audio.duration) {
            const seekTime = (progressBar.value / 100) * audio.duration;
            audio.currentTime = seekTime;
        }
    });

    audio.addEventListener('ended', () => {
        playBtn.textContent = 'Play ▶';
        progressBar.value = 0;
        currentTimeDisplay.textContent = "0:00";
        playerContainer.classList.remove('playing');
    });
}