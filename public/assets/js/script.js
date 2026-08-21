(function() {
	"use strict";

    // Preloader JS
    try {
        window.addEventListener('load', function() {
            var preloader = document.getElementById('preloader');
            preloader.classList.add('d-none');
        });
    } catch (err) {}

    // Check if elements with the class "search-toggler" exist
    const searchTogglers = document.querySelectorAll(".search-toggler");
    if (searchTogglers.length > 0) {
        searchTogglers.forEach((searchToggler) => {
            searchToggler.addEventListener("click", function (e) {
            e.preventDefault();

                const searchPopup = document.querySelector(".search-popup");
                if (searchPopup) {
                    searchPopup.classList.toggle("active");
                }

                const mobileNavWrapper = document.querySelector(".mobile-nav-wrapper");
                if (mobileNavWrapper) {
                    mobileNavWrapper.classList.remove("expanded");
                }
            });
        });
    }

    window.onload = function() {

        // Scroll Event go Top JS
        try {
            window.addEventListener('scroll', function() {
                var scrolled = window.scrollY;
                var goTopButton = document.querySelector('.go-top');
    
                if (scrolled > 600) {
                    goTopButton.classList.add('active');
                } else {
                    goTopButton.classList.remove('active');
                }
            });
            var goTopButton = document.querySelector('.go-top');
            goTopButton.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        } catch (err) {}

        // Counter Js
        try {
            if ("IntersectionObserver" in window) {
                let counterObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                        let counter = entry.target;
                        let target = parseInt(counter.innerText);
                        let step = target / 200;
                        let current = 0;
                        let timer = setInterval(function () {
                            current += step;
                            counter.innerText = Math.floor(current);
                            if (parseInt(counter.innerText) >= target) {
                            clearInterval(timer);
                            }
                        }, 10);
                        counterObserver.unobserve(counter);
                        }
                    });
                });

                let counters = document.querySelectorAll(".counter");
                    counters.forEach(function (counter) {
                    counterObserver.observe(counter);
                });
            }
        } catch (err) {}

        // Plus Minus JS
        try {
            var resultEl = document.querySelector(".resultSet"),
            plusMinusWidgets = document.querySelectorAll(".add-to-cart-counter");
                for (var i = 0; i < plusMinusWidgets.length; i++) {
                    plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
                    plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
                    plusMinusWidgets[i].querySelector(".count").addEventListener("change", changeHandler);
                }
                function clickHandler(event) {
                    var countEl = event.target.parentNode.querySelector(".count");
                    if (event.target.className.match(/\bminusBtn\b/)) {
                        countEl.value = Number(countEl.value) - 1;
                    } 
                    else if (event.target.className.match(/\bplusBtn\b/)) {
                        countEl.value = Number(countEl.value) + 1;
                    }
                    triggerEvent(countEl, "change");
                };
                function changeHandler(event) {
                resultEl.value = 0;
                for (var i = 0; i < plusMinusWidgets.length; i++) {
                    resultEl.value = Number(resultEl.value) + Number(plusMinusWidgets[i].querySelector('.count').value);
                }
            };
            function triggerEvent(el, type) {
                if ('createEvent' in document) {
                    var e = document.createEvent('HTMLEvents');
                    e.initEvent(type, false, true);
                    el.dispatchEvent(e);
                }
                else {
                    var e = document.createEventObject();
                    e.eventType = type;
                    el.fireEvent('on'+e.eventType, e);
                }
            }
        } catch (err) {}

    };

    // Partner Slider JS
    var swiper = new Swiper(".partner-slide", {
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,
        speed: 1000,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 70
            },
            1200: {
                slidesPerView: 5
            }
        }
    });

    // Partner Two Slider JS
    var swiper = new Swiper(".partner-two-slide", {
        slidesPerView: 1,
        spaceBetween: 100,
        loop: true,
        speed: 1000,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 50
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 70
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 70
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 70
            },
            1600: {
                slidesPerView: 6
            }
        }
    });

    // Services Slider JS
    var swiper = new Swiper(".services-slide", {
        slidesPerView: 1,
        spaceBetween: 25,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            576: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            },
            1400: {
                slidesPerView: 2
            },
            1600: {
                slidesPerView: 3
            }
        }
    });

    // Choose Us Slider JS
    var swiper = new Swiper(".choose-slide", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1500,
        pagination: {
            el: ".choose-pagination",
            clickable: true,
        },
    });

    // Testimonial Slider JS
    var swiper = new Swiper(".testimonial-slide", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 1500,
        pagination: {
            el: ".testimonial-pagination",
            clickable: true,
        },
    });

    // scrollCue
    scrollCue.init();

})();

// For Mobile Navbar JS
const list = document.querySelectorAll('.mobile-menu-list');
function accordion(e) {
    e.stopPropagation(); 
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else if(this.parentElement.parentElement.classList.contains('active')){
        this.classList.add('active');
    }
    else {
        for(i=0; i < list.length; i++){
            list[i].classList.remove('active');
        }
        this.classList.add('active');
    }
}
for(i = 0; i < list.length; i++ ){
    list[i].addEventListener('click', accordion);
}
