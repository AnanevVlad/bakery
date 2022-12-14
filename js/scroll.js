



// Создаем новый observer (наблюдатель)
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
// Выводим в консоль сам элемент
        console.log(entry.target);
// Выводим в консоль true (если элемент виден) или false (если нет)
        console.log(entry.isIntersecting);
        if (!entry.isIntersecting)
        {
            ctn.classList.add('hide');
        }
        if (entry.isIntersecting)
        {
            ctn.classList.remove('hide');
        }
    });
});

// Задаем элемент для наблюдения
let el = document.querySelector('header');
const ctn = document.querySelector('.ctn');
// Прикрепляем его к «наблюдателю»
observer.observe(el);
