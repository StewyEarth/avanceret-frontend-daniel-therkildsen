document.addEventListener("DOMContentLoaded", () => {
    let contactFormElem = document.querySelector(".contactform");
    let firstnameElem = document.querySelector("#firstname");
    let lastnameElem = document.querySelector("#lastname");
    let emailElem = document.querySelector("#email");
    let phoneElem = document.querySelector("#phone");
    let subjectElem = document.querySelector("#subject");
    let messageElem = document.querySelector("#message");




    window.onbeforeunload = function () {
        if (contactFormElem != null) {
            let contactdata = {
                firstname: firstnameElem.value,
                lastname: lastnameElem.value,
                email: emailElem.value,
                phone: phoneElem.value,
                subject: subjectElem.value,
                message: messageElem.value,
            };
            localStorage.setItem("contactdata", JSON.stringify(contactdata))
        };
    }
    getLocalContactData();

    function getLocalContactData() {
        if (contactFormElem != null) {
            if (localStorage.getItem("contactdata") != null) {
                let contactdata = JSON.parse(localStorage.getItem("contactdata"));
                console.log(contactdata)
                firstnameElem.value = contactdata.firstname;
                lastnameElem.value = contactdata.lastname;
                emailElem.value = contactdata.email;
                phoneElem.value = contactdata.phone;
                subjectElem.value = contactdata.subject;
                messageElem.value = contactdata.message;
            };
        }
    };

    if (contactFormElem != null) {
        contactFormElem.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!isNaN(firstnameElem.value) || firstnameElem.value.length < 2) {
                alert("Firstname must be 2 or more characters, and may not contain any numbers");
                firstnameElem.style.borderColor = "red";
                return false;
            } else {
                firstnameElem.style.borderColor = "";
            }
            if (!isNaN(lastnameElem.value) || lastnameElem.value.length < 2) {
                alert("Lastname must be 2 or more characters, and may not contain any numbers");
                lastnameElem.style.borderColor = "red";
                return false;
            } else {
                lastnameElem.style.borderColor = "";
            }
            if (!validateEmail(email.value)) {
                alert("Please enter a valid email");
                emailElem.style.borderColor = "red";
                return false;
            } else {
                emailElem.style.borderColor = "";
            }
            if (isNaN(phoneElem.value) || phoneElem.value.length != 8) {
                alert("Phone number must be 8 didgets");
                phoneElem.style.borderColor = "red";
                return false;
            } else {
                phoneElem.style.borderColor = "";
            }
            if (subjectElem.value == "") {
                alert("Please select a subject");
                subjectElem.style.borderColor = "red";
                return false;
            } else {
                subjectElem.style.borderColor = "";
            }
            if (messageElem.value.length < 3) {
                alert("Please enter a message of atleast 3 characters");
                messageElem.style.borderColor = "red";
                return false;
            } else {
                messageElem.style.borderColor = "";
            }

            firstnameElem.value = "";
            lastnameElem.value = "";
            emailElem.value = "";
            phoneElem.value = "";
            subjectElem.value = "";
            messageElem.value = "";
            contactFormElem.submit();
        });
    }
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    let mailformElem = document.querySelector(".mailinglist_form");
    mailformElem.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!validateEmail(event.target[0].value)) {
            alert("Please enter a valid email");
            event.target[0].style.border = "1px solid red";
            return false;
        } else {
            alert("Thanks for subscribing");
            event.target[0].style.border = "";
            event.target[0].value = "";
        }
    });

    fetch("https://uinames.com/api/?ext&region=denmark")
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        });

    let networthValueElem = document.querySelector(".networth_value")
    networthValueElem.textContent = "$" + numberWithCommas("59.21.0.0.3.58")

    generatesafenumber();
    function generatesafenumber() {
        let maxNumber = "20.000.000";
        let minNumber = "10.000.000";
        maxNumber = parseInt(maxNumber.replace(/\./g, ""));
        minNumber = parseInt(minNumber.replace(/\./g, ""));

        let newnumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        console.log(newnumber)
    }
    function generatefirednumber() {
        let newnumber = Math.floor((Math.random() * 10000000) + 1000000);
        console.log(newnumber)
    }

    function numberWithCommas(x) {
        x = x.replace(/\./g, "");
        console.log(x)
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}); // DOMContentLoaded End