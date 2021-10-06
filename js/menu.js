/* 
    Vanilla JS
    Mobile Menu
*/
var menuButton = document.querySelector('.menu-mobile i');

menuButton.addEventListener('click',()=>{
    let menuItems = document.querySelector('.menu-mobile-items');

    if(menuItems.classList.contains('show')){
        menuItems.classList.remove('show')
        menuItems.classList.add('hide');
    }else{
        menuItems.classList.remove('hide')
        menuItems.classList.add('show');
    }

})

/* 
    JQuery
    Scroll Page
*/
$('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 20
    }, 1000);
    event.preventDefault();
});
