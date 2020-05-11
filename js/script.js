const App = {};

App.menu = function () {
    $(".hamburgerNav").on("click", function () {
        console.log("hamby");
        $(".myLinks").toggleClass("menuHide");
        $(".hamburger").toggleClass("hidden");
        $(".close").toggleClass("hidden");
    })
};

App.menuClick = function () {
    $(".topNav a").on("click", function () {
        $(".topNav").toggleClass("menuHide");
        $(".close").toggleClass("hidden");
        $(".hamburger").toggleClass("hidden");
    })
};

// Initialize function
App.init = () => {
    App.menu();
    App.menuClick();
}

// Document Ready function
$(function () {
    App.init();
});