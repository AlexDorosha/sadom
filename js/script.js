const slider1 = document.querySelector('.swiper1');

let swiper1 = new Swiper(slider1, {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
    },
});

// Accordion

$(function () {
    $(".accordion").accordion({
        icons: false,
        heightStyle: "content",
        collapsible: true,
        active: false
    });
});