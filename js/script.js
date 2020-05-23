const App = {};

App.openMenu = function () {
        $(".hamburger").on('click', function(e) {
            e.preventDefault();
            $(".myLinks").toggleClass("menuHide");
            $(".hamburger").toggleClass("hidden");
            $(".close").toggleClass("hidden");
        })   
    }

    
    App.closeMenu = function () {
        $(".close").click(function(e) {
            e.preventDefault();
            $(".close").toggleClass("hidden");
            $(".myLinks").toggleClass("menuHide");
            $(".hamburger").toggleClass("hidden");
        })
    }

    // To open/close the hamburger menu with enter/escape
    App.keyMenu = function () {
        $(".topNav").on('keyup', function (e) {
            e.preventDefault();
            if(e.key === "Enter" || e.key === "Escape") {
                $(".myLinks").toggleClass("menuHide");
                $(".hamburger").toggleClass("hidden");
                $(".close").toggleClass("hidden");

            }

        })
    }

    // Smooth Scroll
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            1000,
            'linear'
        )
    })
    

// Initialize function
App.init = () => {
    App.openMenu();
    App.closeMenu();
    App.keyMenu();
}

// Document Ready function
$(function () {
    App.init();
});