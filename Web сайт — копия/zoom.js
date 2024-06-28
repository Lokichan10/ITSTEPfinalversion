if (window.innerHeight == 876) {
    document.body.style.zoom = '100%';
}
else {
    let zoom = 100 / (1536 / window.innerWidth)
    window.onload = function () {
        if (window.innerWidth > 0) {
            document.body.style.zoom = `${zoom}%`;
        }
    }
}