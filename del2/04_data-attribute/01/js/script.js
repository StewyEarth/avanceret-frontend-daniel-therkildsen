document.addEventListener('DOMContentLoaded', () => {
    
    let itemElems = document.querySelectorAll('.item');

    itemElems.forEach(itemElem => {
        console.log(itemElem)
        if(itemElem.dataset.itemid == 2){
            itemElem.querySelector(".item-title").innerHTML = "THIS IS THE ONE THATS THE BEST"
        }
        // if(itemElem.getAttribute("data-itemID") == 2){
        //     itemElem.querySelector(".item-title").innerHTML = "THIS IS THE ONE THATS THE BEST"
        // }
    });
});