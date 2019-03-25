document.addEventListener('DOMContentLoaded', () => {
    let cssThemeElem = document.querySelector("#csstheme");
    let switchThemeBtnElem = document.querySelector(".themeSwitchBtn");
    switchThemeBtnElem.addEventListener('click', () => {
        if (cssThemeElem.dataset.theme == "light"){
            cssThemeElem.href = "css/darktheme.css"
            cssThemeElem.dataset.theme = "dark"
        }else{
            cssThemeElem.href = "css/lighttheme.css"
            cssThemeElem.dataset.theme = "light"
        }
    });
});