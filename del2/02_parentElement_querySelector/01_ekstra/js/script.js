document.addEventListener('DOMContentLoaded', () => {
let itemElems = document.querySelectorAll(".item");

itemElems.forEach(itemElem => {
    itemElem.addEventListener('click', () => {
        itemElem.querySelector(".item-title").innerHTML += "X"
    });
});
});