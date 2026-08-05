/**
 * Theme toggle — Light / Dark
 * Preference is stored in localStorage under STORAGE_KEY
 * and restored on every page load (including music.html).
 */
(function () {
    "use strict";

    var STORAGE_KEY = "yt-theme"; // "light" | "dark"
    var DARK_CLASS = "dark";

    /** Read saved theme; default to light if nothing is stored. */
    function getSavedTheme() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved === "dark" || saved === "light") {
                return saved;
            }
        } catch (e) {
            // localStorage may be blocked (private mode, etc.)
        }
        return "light";
    }

    /** Save "light" or "dark" so it survives reloads. */
    function saveTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) {
            // Ignore write failures
        }
    }

    /**
     * Apply theme by toggling the "dark" class on <html>.
     * CSS variables under html.dark handle all colours.
     */
    function applyTheme(theme) {
        var isDark = theme === "dark";
        document.documentElement.classList.toggle(DARK_CLASS, isDark);
        updateToggleIcon(isDark);
    }

    /** Show dark_mode icon in light theme, light_mode icon in dark theme. */
    function updateToggleIcon(isDark) {
        var icon = document.getElementById("theme-toggle-icon");
        if (!icon) return;
        icon.textContent = isDark ? "light_mode" : "dark_mode";
    }

    /** Switch to the opposite theme and remember it. */
    function toggleTheme() {
        var next = document.documentElement.classList.contains(DARK_CLASS)
            ? "light"
            : "dark";
        applyTheme(next);
        saveTheme(next);
    }

    // Apply saved theme as early as possible (script is in <head>)
    applyTheme(getSavedTheme());

    /** Wire up the header button once the DOM is ready. */
    function initToggle() {
        var button = document.getElementById("theme-toggle");
        if (!button) return;

        // Icon may not have existed when applyTheme ran in <head>
        updateToggleIcon(document.documentElement.classList.contains(DARK_CLASS));

        button.addEventListener("click", toggleTheme);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initToggle);
    } else {
        initToggle();
    }
})();
