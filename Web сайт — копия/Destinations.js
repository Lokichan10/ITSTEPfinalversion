document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });
});

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