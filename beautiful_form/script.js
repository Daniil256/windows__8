$(document).ready(function () {
    $.each($('.checkbox'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active')
        }
    })
    $(document).on('click', '.checkbox', function (event) {
        if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false)
        } else {
            $(this).find('input').prop('checked', true)
        }
        $(this).toggleClass('active')
        return false
    })


    $.each($('.rbtn__item'), function (index, val) {
        if ($(this).find('input').prop('checked') == true) {
            $(this).addClass('active')
        }
    })
    $(document).on('click', '.rbtn__item', function (event) {
        $(this).parents('.rbtn').find('.rbtn__item').removeClass('active')
        $(this).parents('.rbtn').find('.rbtn__item input').prop('checked', false)
        $(this).toggleClass('active')
        $(this).find('input').prop('checked', true)
        return false
    })
})