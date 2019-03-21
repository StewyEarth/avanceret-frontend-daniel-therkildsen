let itemElems = document.querySelectorAll(".item");

itemElems.forEach(itemElem => {
    // itemElem.querySelector(".item-title").innerHTML += "X"
    // itemElem.querySelector(".item-description").innerHTML += "X"
    itemElem.addEventListener('click', () => {
        itemElem.querySelector(".item-title").innerHTML += "X"
    });
});