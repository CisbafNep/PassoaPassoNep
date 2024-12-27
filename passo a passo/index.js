function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light");const mode = html.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("mode", mode);
}
// Verificar o modo salvo no carregamento da página
window.onload = function() {
    const mode = localStorage.getItem('mode');
    if (mode === 'light') {
        toggleMode();
    }
}