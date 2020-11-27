$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

// $(".logo").on('click, keydown', function() {
//     window.location("http://www.youtube.com");
// });

// $(".logo").attr("tabindex", "0").focus();