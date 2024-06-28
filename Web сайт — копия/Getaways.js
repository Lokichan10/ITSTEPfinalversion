for (let i = 1; i <= 17; i++) {
    document.getElementById('item' + i).addEventListener('click', function (event) {
        event.preventDefault(); 
        this.classList.toggle('active'); 
    });
}
let zoom = 100 / (1536 / window.innerWidth)
window.onload = function () {
    if (window.innerWidth > 0) {
        document.body.style.zoom = `${zoom}%`;
    }
}