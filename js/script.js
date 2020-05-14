const App = {};

App.hamburger = function () {
        $(".hamburger").click(function(e) {
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
    

// Initialize function
App.init = () => {
    App.hamburger();
    App.closeMenu();
}

// Document Ready function
$(function () {
    App.init();
});