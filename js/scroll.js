
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {


        if (!entry.isIntersecting) {
            ctn.classList.add('hide');
        }
        if (entry.isIntersecting) {
            ctn.classList.remove('hide');
        }
    });
});

let el = document.querySelector('header');
const ctn = document.querySelector('.ctn');
observer.observe(el);
