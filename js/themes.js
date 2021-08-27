function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let theme = document.getElementById("css_theme");


if (getCookie("theme") != undefined) {
    if (getCookie("theme") == "light") {
        theme.href = "css/main-light.css";
    } else {
        theme.href = "css/main.css";
    }
} else {
    document.cookie = "theme=dark";
}

let theme_changer = document.getElementById("theme_changer");

theme_changer.onclick = function() {
    if (theme.href.includes("light")) {
        theme.href = "css/main.css";
        document.cookie = "theme=dark";
    } else {
        theme.href = "css/main-light.css";
        document.cookie = "theme=light";
    }
};