document.addEventListener('DOMContentLoaded', () => {
    let headerElem = document.querySelector("header")
    fetch('partials/nav-partial.html')
        .then((response) => { return response.text() })
        .then((data) => {
            headerElem.innerHTML = data;
        });
});
