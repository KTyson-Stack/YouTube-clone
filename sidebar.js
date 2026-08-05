/**
 * Collapsible sidebar
 * Hamburger toggles a single .collapsed class on .side-bar.
 * All visual changes (width, labels, footer) are handled in CSS.
 */
(function () {
    "use strict";

    var COLLAPSED_CLASS = "collapsed";

    function initSidebar() {
        var menuButton = document.getElementById("menu-toggle");
        var sidebar = document.querySelector(".side-bar");

        if (!menuButton || !sidebar) return;

        menuButton.addEventListener("click", function () {
            // Phone keeps sidebar hidden via CSS — toggling is harmless there
            sidebar.classList.toggle(COLLAPSED_CLASS);
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initSidebar);
    } else {
        initSidebar();
    }
})();
