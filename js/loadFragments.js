async function loadFragment(fragmentId, filePath) {
    try {
        const version = new Date().getTime(); 
        const urlWithVersion = `${filePath}?version=${version}`;

        const cachedContent = localStorage.getItem(urlWithVersion);
        if (cachedContent) {
            document.getElementById(fragmentId).innerHTML = cachedContent;
            return;
        }

        const response = await fetch(urlWithVersion);
        if (!response.ok) throw new Error(`Error loading ${filePath}`);
        const content = await response.text();

        document.getElementById(fragmentId).innerHTML = content;
        localStorage.setItem(urlWithVersion, content); 
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    Promise.all([
        loadFragment("navbar", "../fragments/nav.html"),
        loadFragment("footer", "../fragments/footer.html"),
        loadFragment("social-bar", "../fragments/redesSociales.html") 
    ])
    .then(() => {
        var audio = document.getElementById('welcome-audio');
        var musicBtn = document.getElementById('music-btn');

        if (audio) {
            // Reproducir el audio al inicio
            audio.play().catch(function(error) {
                console.log("El audio no se pudo reproducir automáticamente: ", error);
            });
        }

        // Alternar entre reproducir y detener audio al hacer clic
        musicBtn.addEventListener('click', function () {
            if (audio.paused) {
                audio.play().catch(function(error) {
                    console.log("El audio no se pudo reproducir: ", error);
                });
                musicBtn.classList.remove('bi-volume-up-fill');
                musicBtn.classList.add('bi-volume-mute-fill'); // Cambio de ícono a mute
            } else {
                audio.pause();
                musicBtn.classList.remove('bi-volume-mute-fill');
                musicBtn.classList.add('bi-volume-up-fill'); // Cambio de ícono a play
            }
        });
    })
    .catch(console.error);
});
