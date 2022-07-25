;(function () {
    "use strict"

    var mobileMenuOutsideClick = function () {
        $(document).click(function (e) {
            var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle")
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($("body").hasClass("offcanvas")) {
                    $("body").removeClass("offcanvas")
                    $(".js-fh5co-nav-toggle").removeClass("active")
                }
            }
        })
    }

    var offcanvasMenu = function () {
        $("#page").prepend('<div id="fh5co-offcanvas" />')
        $("#nav.nav-white").append('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>')
        $("#nav.nav-black").append('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-black"><i></i></a>')
        var clone1 = $(".menu-1 > ul").clone()
        $("#fh5co-offcanvas").append(clone1)
        var clone2 = $(".menu-2 > ul").clone()
        $("#fh5co-offcanvas").append(clone2)
        $("#fh5co-offcanvas").prepend(
            '<div class="container"><div id="fh5co-logo-black" class="row"><a href="index.html"><img id="logo-black" src="assets/forrest-herman-black.png" alt="logo-black" /></a></div></div>'
        )

        $("#fh5co-offcanvas .has-dropdown").addClass("offcanvas-has-dropdown")
        $("#fh5co-offcanvas").find("li").removeClass("hidden-on-mobile")
        $("#fh5co-offcanvas").find("li").removeClass("has-dropdown")

        // Hover dropdown menu on mobile
        $(".offcanvas-has-dropdown")
            .mouseenter(function () {
                var $this = $(this)

                $this.addClass("active").find("ul").slideDown(500, "easeOutExpo")
            })
            .mouseleave(function () {
                var $this = $(this)
                $this.removeClass("active").find("ul").slideUp(500, "easeOutExpo")
            })

        $(window).resize(function () {
            if ($("body").hasClass("offcanvas")) {
                $("body").removeClass("offcanvas")
                $(".js-fh5co-nav-toggle").removeClass("active")
            }
        })
    }

    var burgerMenu = function () {
        $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
            var $this = $(this)

            if ($("body").hasClass("overflow offcanvas")) {
                $("body").removeClass("overflow offcanvas")
                $("#fh5co-logo").removeClass("hidden")
            } else {
                $("body").addClass("overflow offcanvas")
                $("#fh5co-logo").addClass("hidden")
            }
            $this.toggleClass("active")
            event.preventDefault()
        })
    }

    var contentWayPoint = function () {
        var i = 0
        $(".animate-box").waypoint(
            function (direction) {
                if (direction === "down" && !$(this.element).hasClass("animated-fast")) {
                    i++

                    $(this.element).addClass("item-animate")
                    setTimeout(function () {
                        $("body .animate-box.item-animate").each(function (k) {
                            var el = $(this)
                            setTimeout(
                                function () {
                                    var effect = el.data("animate-effect")
                                    if (effect === "fadeIn") {
                                        el.addClass("fadeIn animated-fast")
                                    } else if (effect === "fadeInLeft") {
                                        el.addClass("fadeInLeft animated-fast")
                                    } else if (effect === "fadeInRight") {
                                        el.addClass("fadeInRight animated-fast")
                                    } else {
                                        el.addClass("fadeInUp animated-fast")
                                    }

                                    el.removeClass("item-animate")
                                },
                                k * 200,
                                "easeInOutExpo"
                            )
                        })
                    }, 100)
                }
            },
            { offset: "85%" }
        )
    }

    var galleryAnimateIn = function () {
        var i = 0
        $(".animate-gallery").waypoint(
            function (direction) {
                if (direction === "down" && !$(this.element).hasClass("animated-fast")) {
                    i++

                    $(this.element).addClass("item-animate")
                    setTimeout(function () {
                        $("body .animate-gallery.item-animate").each(function (k) {
                            var el = $(this)
                            setTimeout(
                                function () {
                                    var effect = el.data("animate-effect")
                                    if (effect === "fadeIn") {
                                        el.addClass("fadeIn animated-fast")
                                    } else if (effect === "fadeInLeft") {
                                        el.addClass("fadeInLeft animated-fast")
                                    } else if (effect === "fadeInRight") {
                                        el.addClass("fadeInRight animated-fast")
                                    } else {
                                        el.addClass("fadeInUp animated-fast")
                                    }

                                    el.removeClass("item-animate")
                                },
                                k * 125,
                                "easeInOutExpo"
                            )
                        })
                    }, 100)
                }
            },
            { offset: "90%" }
        )
    }

    var dropdown = function () {
        $(".has-dropdown")
            .mouseenter(function () {
                var $this = $(this)
                $this.find(".dropdown").css("display", "block").addClass("animated-fast fadeInUpMenu")
            })
            .mouseleave(function () {
                var $this = $(this)

                $this.find(".dropdown").css("display", "none").removeClass("animated-fast fadeInUpMenu")
            })
    }

    var testimonialCarousel = function () {
        var owl = $(".owl-carousel-fullwidth")
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            smartSpeed: 800,
            autoHeight: true,
        })
    }

    var goToTop = function () {
        $(".js-gotop").on("click", function (event) {
            event.preventDefault()

            $("html, body").animate(
                {
                    scrollTop: $("html").offset().top,
                },
                500,
                "easeInOutExpo"
            )

            return false
        })

        $(window).scroll(function () {
            var $win = $(window)
            if ($win.scrollTop() > 200) {
                $(".js-top").addClass("active")
                $(".sticky-footer").removeClass("hidden-visibility")
                $(".hidden-on-hero").removeClass("hidden")
            } else {
                $(".js-top").removeClass("active")
                $(".sticky-footer").addClass("hidden-visibility")
                $(".hidden-on-hero").addClass("hidden")
            }
        })
    }

    // Loading page
    var loaderPage = function () {
        $(".fh5co-loader").fadeOut("slow")
    }

    var counter = function () {
        $(".js-counter").countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals)
            },
        })
    }

    var counterWayPoint = function () {
        if ($("#fh5co-counter").length > 0) {
            $("#fh5co-counter").waypoint(
                function (direction) {
                    if (direction === "down" && !$(this.element).hasClass("animated")) {
                        setTimeout(counter, 400)
                        $(this.element).addClass("animated")
                    }
                },
                { offset: "90%" }
            )
        }
    }

    // Parallax
    var parallax = function () {
        $(window).stellar()
    }

    $(function () {
        mobileMenuOutsideClick()
        parallax()
        offcanvasMenu()
        burgerMenu()
        contentWayPoint()
        dropdown()
        testimonialCarousel()
        goToTop()
        loaderPage()
        counter()
        counterWayPoint()

        galleryAnimateIn()
    })
})()

$(function () {
    // this will get the full URL at the address bar
    var url = window.location.href

    // passes on every "a" tag
    $("#nav-menu a").each(function () {
        // checks if its the same on the address bar
        if (url == this.href) {
            $(this).closest("li").addClass("active")
        }
    })
})

// Nav bar stickyness

// $(document).ready(function () {
//     //change the integers below to match the height of your upper div, which I called
//     //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
//     //to figure out what the scroll position is when exactly you want to fix the nav
//     //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
//     //you know the position.
//     $(window).scroll(function () {
//         console.log($(window).scrollTop())

//         if ($(window).scrollTop() > 850) {
//             $("#navbar").addClass("navbar-fixed-scroll")
//             $("#navbar").removeClass("navbar-slide-up")
//             $(".sticky-footer").removeClass("hidden")
//         }

//         if ($(window).scrollTop() < 851 && $(window).scrollTop() > 700) {
//             // $("#navbar").removeClass("navbar-fixed-scroll")   baddd
//             $("#navbar").addClass("navbar-slide-up")
//         }

//         if ($(window).scrollTop() < 700) {
//             $("#navbar").removeClass("navbar-fixed-scroll")
//             $("#navbar").removeClass("navbar-slide-up")
//         }
//     })
// })

// Favicon

// matcher = window.matchMedia("(prefers-color-scheme: dark)")
// matcher.addListener(onUpdate)
// onUpdate()

// lightSchemeIcon = document.querySelector("link#light-scheme-icon")
// darkSchemeIcon = document.querySelector("link#dark-scheme-icon")

// function onUpdate() {
//     if (matcher.matches) {
//         lightSchemeIcon.remove()
//         document.head.append(darkSchemeIcon)
//     } else {
//         document.head.append(lightSchemeIcon)
//         darkSchemeIcon.remove()
//     }
// }

function includeHTML() {
    var z, i, elmnt, file, xhttp
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*")
    for (i = 0; i < z.length; i++) {
        elmnt = z[i]
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html")
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest()
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found."
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html")
                    includeHTML()
                }
            }
            xhttp.open("GET", file, true)
            xhttp.send()
            /* Exit the function: */
            return
        }
    }
}
