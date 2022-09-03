//обозначаем переменные, с которыми мы будем работать

//обозначаем переменные кнопок
//обозначил через const потому что переменная будет меняться
const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'), //псевдомассив
    dots = document.querySelectorAll('.dot')

//нужна переменная, по которой будем отслеживать какой сейчас активный (текущий) слайд

let index = 0 //обозначил через let потому что переменная будет меняться\

//задаем функцию, которая ставит активный слайд. Убирает класс с предыдущего слайда, и назначает текущему
//n = номер слайда, который является активным
//slide = переменная, созданная для обозначения отдельного слайда

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active') //удаляет класс active - обратились к свойству classList, и ввели метод remove
    }
    slides[n].classList.add('active') //аргумент к функции. добавляет класс active - обращаемся к массиву по индексу n, обратились к свойству classList, и ввели метод add
}

//задаем функцию, которая ставит активную точку. Убирает класс с предыдущего слайда, и назначает текущему

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active') //удаляет класс active - обратились к свойству classList, и ввели метод remove
    }
    dots[n].classList.add('active') //аргумент к функции. добавляет класс active - обращаемся к массиву по индексу n, обратились к свойству classList, и ввели метод add
}


//пишем функцию prev slide и next slide которая будет иметь логику по нахождению текущего слайда и используем функцию activeSlide

//функция гласит - если наш слайд последний, тогда мы переходим на первый слайд. А если это не так, то мы index увеличиваем на 1.
const nextSlide = () => {
    if (index == slides.length - 1) { //slides.length -1 = проверка на последнй слайд
        index = 0
        prepareCurrentSlide(index)
    } else {
        index++ // увеличивает переменную на 1
        prepareCurrentSlide(index)
    }
}

const prevSlide = () => {
    if (index == 0) { //slides.length -1 = проверка на первый. index == 0 это проверка на первый слайд
        index = slides.length - 1
        prepareCurrentSlide(index)
    } else {
        index-- // -- уменьшает переменную на 1
        prepareCurrentSlide(index)
    }
}

//объявляем вызов функции для nextSlide и prevSlide чтобы не вызываеть 2 функции в одной
const prepareCurrentSlide = ind => {
    activeSlide(ind)
    activeDot(ind)
}
//чтобы взаимодействовать с кнопкой next, надо на нее повесить функцию и event

next.addEventListener('click', nextSlide) //на событие 'click' вызывается функция nextSlide
prev.addEventListener('click', prevSlide)

///////////////////////////////////////ТОЧКИ///////////////////////////////////////////////////

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index)
    })
})//пробегусь по всему массиву. В функции нужна каждая точка и индекс точки в массиве


