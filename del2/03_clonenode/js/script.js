document.addEventListener('DOMContentLoaded', () => {
    let itemTemplateElem = document.querySelector(".html-templates .item");
    let bodyElem = document.querySelector("body");

    let titleArray = ["Taxi trip","Beach trip","Airplane ride"]

    titleArray.forEach(title => {
        let itemClone = itemTemplateElem.cloneNode(true); //When true it's allowed child notes.
        itemClone.querySelector(".item-title").innerHTML = title;
        bodyElem.appendChild(itemClone);
    });

});