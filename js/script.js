const App = {};

App.hamburger = function () {
    if(screen.width <= 1500) {
        
        $(".hamburger").on('click', function(e) {
            e.preventDefault();
            $(".myLinks").toggleClass("menuHide");
            $(".hamburger").toggleClass("hidden");
            $(".hamburger").toggleClass("show");
            $(".close").toggleClass("hidden");
        })

    }
}

App.menu = function () {
    if(screen.width <= 1500) {
        
        $(".myLinks").on('click', function (e) {
            e.preventDefault();
            $(".myLinks").toggleClass("menuHide");
            $(".close").toggleClass("hidden");
            $(".hamburger").toggleClass("hidden");
        })

    }
}

// Initialize function
App.init = () => {
    App.hamburger();
    App.menu();
}

// Document Ready function
$(function () {
    App.init();
});