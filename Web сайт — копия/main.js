
document.addEventListener('DOMContentLoaded', function () {
    const pricingContainer = document.getElementById('pricing-container');

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

    document.querySelectorAll('.free').forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const spaceTourCategoriesContainer2 = document.getElementById('space-tour-categories-container-2');

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

    observer.observe(spaceTourCategoriesContainer2);
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

let imgburg = document.getElementById('burgerimg')

//imgburg.style.display = "none"
// imgburg.style.opacity = 1;



let burg = document.getElementById('burg')
burg.style.opacity = '0';
let flajok = 1
function burmenu() {
    console.log("Семпай кликнул")
    imgburg.style.opacity = 1
    if (imgburg.style.opacity == 1) {
        flajok += 1
        if (flajok % 2 == 0) {
            burg.style.opacity = '1';
        }
        else if (flajok % 2 == 1) {
            burg.style.opacity = '0';
        }
    }
    

}
