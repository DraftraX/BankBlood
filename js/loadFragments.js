async function loadFragment(fragmentId, filePath) {
    try {
        // Verificar si el fragmento ya está en localStorage
        const cachedContent = localStorage.getItem(filePath);
        if (cachedContent) {
            document.getElementById(fragmentId).innerHTML = cachedContent;
            return; // Salir si se encuentra en la caché
        }

        // Si no está en caché, realizar la solicitud al servidor
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Error loading ${filePath}`);
        const content = await response.text();

        // Insertar contenido y almacenarlo en localStorage
        document.getElementById(fragmentId).innerHTML = content;
        localStorage.setItem(filePath, content); // Guardar en caché
    } catch (error) {
        console.error(error);
    }
}

// Cargar fragmentos en paralelo
document.addEventListener("DOMContentLoaded", () => {
    Promise.all([
        loadFragment("navbar", "../fragments/nav.html"),
        loadFragment("footer", "../fragments/footer.html")
    ]).catch(console.error);
});

