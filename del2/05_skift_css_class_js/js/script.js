document.addEventListener('DOMContentLoaded', () => {
    let toggleShowBtnElem = document.querySelector(".toggleShowBtn");
    let contentDivElem = document.querySelector(".content");
    
    toggleShowBtnElem.addEventListener('click', () => {
        contentDivElem.classList.toggle("hidden")
    });
});