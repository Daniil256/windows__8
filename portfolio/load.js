const load = document.querySelectorAll('.load')
window.onload = function () {
    for (let i = 0; i < load.length; i++) {
        load[i].style.display = 'none'
    }
}