document.addEventListener('DOMContentLoaded', () => {
    let itemElem = document.querySelector(".item");
    let bodyElem = document.querySelector("body");

    let titleArray = ["Taxi trip","Beach trip","Airplane ride"]

    titleArray.forEach(title => {
        clone = itemElem.cloneNode(true)
        bodyElem.appendChild(clone)
    });

});