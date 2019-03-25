document.addEventListener('DOMContentLoaded', () => {
    let pictureDataElems = document.querySelectorAll(".picture-data div");
    let realPicElem = document.querySelector(".realpic");
    let imgIndex = 0;
    let images = [];
    let previousImgBtn = document.querySelector(".previousimgbtn")
    let nextImgBtn = document.querySelector(".nextimgbtn")

    pictureDataElems.forEach(pictureDataElem => {
        images.push(pictureDataElem.dataset.imgpath)
        // document.body.innerHTML += `<img src="${pictureDataElem.dataset.imgpath}">`
    });

    showImage();

    nextImgBtn.addEventListener('click', () => {
        imgIndex++
        if (imgIndex >= images.length){
            imgIndex = 0;
        }
        showImage();
    });
    previousImgBtn.addEventListener('click', () => {
        imgIndex--
        if (imgIndex <= -1){
            imgIndex = images.length - 1;
        }
        showImage();
    });
    function showImage(){
        realPicElem.src = images[imgIndex];
    }
});