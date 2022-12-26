let observers = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {


        if (entry.isIntersecting) {
            arrow.classList.add('hide_arrow');
        }
        if (!entry.isIntersecting) {
            arrow.classList.remove('hide_arrow');
        }
    });
});
let elm = document.querySelector('section');
const arrow = document.querySelector('.arrow');
observers.observe(elm);