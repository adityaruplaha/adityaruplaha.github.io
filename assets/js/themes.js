function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; SameSite=Strict";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function setTheme(new_theme) {
    new_theme = new_theme || "default";
    document.getElementById("main-stylesheet").setAttribute("href", "/assets/css/" + new_theme + "/main.css");
    document.getElementById("syntax-stylesheet").setAttribute("href", "/assets/css/" + new_theme + "/syntax.css");
    setCookie("theme", new_theme, 30);
    updateSelector();
}
function themeChange() {
    let new_theme = document.getElementById("theme-selector").getAttribute("data-set-theme");
    setTheme(new_theme);
}
function updateSelector() {
    const HTMLs = {
        "default": '<i class="fa-solid fa-sun"></i>',
        "dark": '<i class="fa-solid fa-moon"></i>'
    }
    let node = document.getElementById("theme-selector");
    let theme = getCookie("theme") || "default";
    let inv_theme = (theme == "dark") ? "default" : "dark"
    node.setAttribute("data-set-theme", inv_theme);
    node.innerHTML = HTMLs[inv_theme];
}
