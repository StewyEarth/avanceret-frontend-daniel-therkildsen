document.addEventListener('DOMContentLoaded', () => {
    let itemElem = document.querySelector(".item");
    let bodyElem = document.querySelector("body");

    let titleArray = ["Taxi trip","Beach trip","Airplane ride"]

    titleArray.forEach(title => {
        clone = itemElem.cloneNode(true);
        clone.querySelector(".item-title").innerHTML = title;
        bodyElem.appendChild(clone);
    });

});