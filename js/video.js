// Obține elementele video și audio
const videoElement = document.getElementById("background-video");
const audioElement = document.getElementById("myAudio");

// Setează volumul audio mai mic
audioElement.volume = 0.1; // Volum redus (30%)

// Adaugă un eveniment de click pe overlay
const overlayElement = document.getElementById("overlay");
overlayElement.addEventListener("click", () => {
  overlayElement.classList.add("hidden"); // Ascunde overlay-ul

  // Scoate muted de pe audio și pornește sunetul
  audioElement.muted = false;
  audioElement.play().catch((error) => {
    console.error("Redarea sunetului a eșuat:", error);
  });

  // Încearcă să redai videoclipul
  videoElement.play().then(() => {
    console.log("Videoclipul a început să ruleze.");
  }).catch((error) => {
    console.error("Redarea videoclipului a eșuat:", error);
    alert("Videoclipul nu poate fi redat. Verifică setările browserului sau fișierul video.");
  });
});

// Funcție pentru a opri videoclipul și sunetul
function pauseMedia() {
  if (!videoElement.paused) {
    videoElement.pause();
  }
  if (!audioElement.paused) {
    videoElement.pause();
  }
}

// Funcție pentru a relua videoclipul și sunetul sincronizat
function playMedia() {
  videoElement.play().catch((error) => {
    console.error("Eroare la redarea videoclipului:", error);
  });
  audioElement.play().catch((error) => {
    console.error("Eroare la redarea sunetului:", error);
  });
}

// Eveniment pentru schimbarea vizibilității paginii
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pauseMedia(); // Oprește media când utilizatorul părăsește pagina
  } else {
    playMedia(); // Reia media când utilizatorul revine
  }
});

// Sincronizează sunetul și videoclipul la redare
videoElement.addEventListener("play", () => {
  if (audioElement.paused) {
    audioElement.play().catch((error) => {
      console.error("Eroare la redarea sunetului:", error);
    });
  }
});

// Oprește sunetul când videoclipul este oprit
videoElement.addEventListener("pause", () => {
  if (!audioElement.paused) {
    audioElement.pause();
  }
});

const audioControl = document.getElementById("audio-control");
audioControl.addEventListener("click", () => {
  if (audioElement.paused) {
    // Sincronizează audio cu video când pornești sunetul
    audioElement.currentTime = videoElement.currentTime;
    audioElement.muted = false;
    audioElement.play();
    audioControl.innerHTML = `<svg fill='#d8d8d8' width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m2 7.5v3c0 .8.6 1.5 1.4 1.5h2.3l3.2 2.8c.1.1.3.2.4.2s.2 0 .3-.1c.2-.1.4-.4.4-.7v-.9l-7.2-7.2c-.5.2-.8.8-.8 1.4zm8 2v-5.8c0-.3-.1-.5-.4-.7-.1 0-.2 0-.3 0s-.3 0-.4.2l-2.8 2.5-4.1-4.1-1 1 3.4 3.4 5.6 5.6 3.6 3.6 1-1z" fill-rule="evenodd"/></svg>`;
  } else {
    audioElement.muted = true;
    audioElement.pause();
    // videoElement rămâne să ruleze!
    audioControl.innerHTML = `<svg width="18px" height="18px" viewBox="-1 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-65.000000, -3803.000000)" fill="#d8d8d8"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335" id="play-[#1000]"></path></g></g></g></svg>`;
  }
});
