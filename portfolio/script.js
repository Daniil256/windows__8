//адаптации под экран

element = $('body')
a = element.css('width')
h = element.css('height')
a = a.replace(/[^0-9]/g, '')
h = h.replace(/[^0-9]/g, '')
a = Number(a)
h = Number(h)
b = (a - 10) / 3
c = (a - 6) / 3 * 2
b = Math.floor(b)
c = Math.floor(c)
console.log(a, h)
if (a > 560) {
    console.log('все итак прекрасно')
} else if (h < a) {
    console.log('альбомная ориентация')
} else if (h > a) {
    $('.block__link, .block__link video, .block__link img, .block__title, .background__tile').css({
        'width': b + 'px',
        'height': b + 'px'
    })
    $('.block__link.wide, .block__link.wide img, .block__link.wide video, .animation, .clock__digital, .wide').css({
        'width': c + 'px',
        'height': b + 'px'
    })
}

//горизонтальный скроллинг

$(document).ready(function () {
    $('.content').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta * 70);
        e.preventDefault();
    });

    //увеличение плиток при нажатии для приложений

    $(document).on('click', '.block .wide .app', function (event) {
        $(this).toggleClass('active')
        return false
    })
    $(document).on('click', '.block .app', function (event) {
        $(this).toggleClass('active')
        return false
    })

    //кнопка меню

    $('.header__button').click(function () {
        $('ul.list').toggleClass('on')
    })

    //темы
    $('.theme__1').on('click', function (event) {
        $('li.first').addClass(' black')
        $('li').addClass(' black')
        $('.block__link').addClass(' black')
        $('.clock__analog').addClass(' black')
        $('.hr').addClass(' black')
        $('.hr').addClass(' black')
        $('.mn').addClass(' black')
        $('.clock__digital').addClass(' black')

        $('.background__tile').addClass(' black')
        $('.block__link app').addClass(' black')
        $('.header__button').addClass(' black')
        $('#wallapers').removeClass()



        $('body').css({
            'color': '#111',
            'background': '#eee'
        })


        $('ul.image').css({
            'background': 'rgba(238, 238, 238, 0.5)',
            'outline': '1px solid #111'

        })
        $('.ul__theme').css({
            'outline': '1px solid #111',
            'background': 'rgba(238, 238, 238, 0.5)'
        })

        $('a').css({
            'color': '#eee'
        })
        $('.load').css({
            'border': '5px solid #111',
            'border-top': '5px solid #111'
        })

    })
    $(document).on('click', '.theme__2', function (event) {
        $('li.first').removeClass(' black')
        $('li').removeClass(' black')
        $('.block__link').removeClass(' black')
        $('.clock__analog').removeClass(' black')
        $('.hr').removeClass(' black')
        $('.hr').removeClass(' black')
        $('.mn').removeClass(' black')
        $('.clock__digital').removeClass(' black')

        $('.background__tile').removeClass(' black')
        $('.block__link app').removeClass(' black')
        $('.header__button').removeClass(' black')
        $('#wallapers').removeClass()

        $('body').css({
            'color': '#eee',
            'background': '#111'


        })

        $('ul.image').css({
            'background': 'rgba(17, 17, 17, 0.5)',
            'outline': '1px solid #eee',

        })
        $('.ul__theme').css({
            'outline': '1px solid #eee',
            'background': 'rgba(17, 17, 17, 0.5)'
        })
        $('a').css({
            'color': '#111'
        })
        $('.load').css({
            'border': '5px solid #eee',
            'border-top': '5px solid #eee'
        })

    })
    $(document).on('click', '.theme__3', function (event) {
        $('#wallapers').removeClass('wallaper')

        let ss = $('#wallapers').attr('class')
        console.log('класс у обоев:' + ss)
        $('#wallapers').removeClass()

        $('.block__title').removeClass('red')
        $('.block__title').removeClass('orange')
        $('.block__title').removeClass('yellow')
        $('.block__title').removeClass('green')
        $('.block__title').removeClass('blue')
        $('.block__title').removeClass('blue2')
        $('.block__title').removeClass('purple')
        $('.block__title').removeClass('winxp')
        $('.block__title').toggleClass(ss)

        $('.app').removeClass('red')
        $('.app').removeClass('orange')
        $('.app').removeClass('yellow')
        $('.app').removeClass('green')
        $('.app').removeClass('blue')
        $('.app').removeClass('blue2')
        $('.app').removeClass('purple')
        $('.app').removeClass('winxp')
        $('.app').toggleClass(ss)

        $('.clock__digital').removeClass('red')
        $('.clock__digital').removeClass('orange')
        $('.clock__digital').removeClass('yellow')
        $('.clock__digital').removeClass('green')
        $('.clock__digital').removeClass('blue')
        $('.clock__digital').removeClass('blue2')
        $('.clock__digital').removeClass('purple')
        $('.clock__digital').removeClass('winxp')
        $('.clock__digital').toggleClass(ss)



    })



    // меню выбора обоев
    $(document).on('click', '.image__1', function (event) {
        $('#wallapers').removeClass()
        $('#wallapers').addClass('wallaper red')
    })
    $(document).on('click', '.image__2', function (event) {
        $('#wallapers').removeClass()
        $('#wallapers').addClass('wallaper orange')
    })
    $(document).on('click', '.image__3', function (event) {
        $('#wallapers').removeClass()
        $('#wallapers').addClass('wallaper yellow')
    })
    $(document).on('click', '.image__4', function (event) {
        $('#wallapers').removeClass()
        $('#wallapers').addClass('wallaper green')
    })
    $(document).on('click', '.image__5', function (event) {
        $('#wallapers').removeClass()
        $('#wallapers').addClass('wallaper blue')
    })
    $(document).on('click', '.image__6', function (event) {
        $('#wallapers').removeClass()
        $('#wallapers').addClass('wallaper blue2')
    })
    $(document).on('click', '.image__7', function (event) {
        $('#wallapers').removeClass()
        $('#wallapers').addClass('wallaper purple')
    })
    $(document).on('click', '.image__8', function (event) {
        $('#wallapers').removeClass()
        $('#wallapers').addClass('wallaper winxp')
    })
})


//часы цифровые
var myVar = setInterval(function () {
    myTimer();
}, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("cd").innerHTML = d.toLocaleString();
}

const deg = 6;
const hr = document.querySelector('#hr');


//часы стрелочные
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;

})
