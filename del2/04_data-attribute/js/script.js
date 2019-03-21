document.addEventListener('DOMContentLoaded', () => {
    
    let itemElems = document.querySelectorAll('.item');

    itemElems.forEach(itemElem => {
        if(itemElem.getAttribute("data-itemID") == 2){
            itemElem.querySelector(".item-title").innerHTML = "THIS IS THE ONE THATS THE BEST"
        }
    });
});