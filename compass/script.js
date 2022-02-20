let deg = 0
let int = setInterval
document.querySelector('.compass').addEventListener('mouseover', function () {
    int = setInterval(() => {
        deg++
        document.querySelector('.arrows').style.transformOrigin = '40px 40px'
        document.querySelector('.arrows').style.transform = 'rotate(' + deg + 'deg)'
    }, 10);
})
document.querySelector('.compass').addEventListener('mouseout', function () {
    clearInterval(int)
})