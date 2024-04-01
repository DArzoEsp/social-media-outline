const mode = document.getElementById('name-bg');
const dark = document.getElementById('dark');
const system = document.getElementById('system');
const light = document.getElementById('light');

function isChecked() {
    if(dark.checked) {
        mode.innerHTML = "Dark";
        return localStorage.setItem('mode')
    } else if(system.checked) {
        mode.innerHTML = "System";
        return localStorage.setItem('name', JSON.stringify(mode.innerHTML))
    } else if(light.checked) {
        mode.innerHTML = "Light"
        return localStorage.setItem('name', JSON.stringify(mode.innerHTML))
    }
}

function init() {
    dark.addEventListener('click', isChecked)
    system.addEventListener('click', isChecked)
    light.addEventListener('click', isChecked)
}

init();