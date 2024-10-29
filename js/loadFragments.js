// js/loadFragments.js
async function loadFragment(fragmentId, filePath) {
    const response = await fetch(filePath);
    const content = await response.text();
    document.getElementById(fragmentId).innerHTML = content;
}

// Cargar los fragmentos al inicio
document.addEventListener("DOMContentLoaded", () => {
    loadFragment("navbar", "fragments/nav.html");
    loadFragment("footer", "fragments/footer.html");
});
