$(document).ready(function() {
    $('.nav-link').click(function(event) {
        event.preventDefault();
        part = $(this).attr('href');
        position = $(part).offSet().top;
        $('html, body').animate({ 
            scrollTop : position
        }, 400);
    })
})