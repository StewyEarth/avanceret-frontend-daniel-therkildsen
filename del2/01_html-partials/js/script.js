let headerElem = document.querySelector("header")
fetch('nav.html')
    .then((response) => { return response.text() })
    .then((data) => {
        headerElem.innerHTML = data;
    });