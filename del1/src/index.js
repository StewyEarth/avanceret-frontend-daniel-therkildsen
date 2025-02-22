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
    let mailsuccessElem = document.querySelector(".mailsuccess");
    let mailsuccessTextElem = document.querySelector(".mailsuccess_text");

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
            let confirmationmessage = `Thanks for contacting us ${firstnameElem.value}, we will get back to you as soon as possible!`
            showmailConfirmation(confirmationmessage);
            firstnameElem.value = "";
            lastnameElem.value = "";
            emailElem.value = "";
            phoneElem.value = "";
            subjectElem.value = "";
            messageElem.value = "";
        });
    };

    function showmailConfirmation(message){
        mailsuccessElem.classList.add("mailsuccess--animation");
        mailsuccessTextElem.textContent = message
        setTimeout(() => {
            mailsuccessElem.classList.remove("mailsuccess--animation");
        }, 4000);
        window.scrollTo(0, 0); 
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
            let confirmationmessage = `Thanks for subscribing to our newsletter!`
            showmailConfirmation(confirmationmessage);
            event.target[0].style.border = "";
            event.target[0].value = "";
        }
    });


    let networthValueElem = document.querySelector(".networth_value");


    let timercounter = 0;
    let timerinterval = 5000;
    let getNetworthInterval;

    setNetworthInterval(true)

    function setNetworthInterval(flag) {
        if (networthValueElem != null && flag) {
            getNetworthInterval = setInterval(() => {
                let Networth = generateNetworth("20.000.000", "19.000.000");
                updateNetworth(Networth);
                timercounter += timerinterval / 1000;
                console.log(timercounter);
                fireCeoHireNewUpdateInfo();
            }, timerinterval);
        }else{
            clearInterval(getNetworthInterval);
        }
    }

    let ceoFiredOverlayElem = document.querySelector(".teammember_fired");
    function fireCeoHireNewUpdateInfo() {
        if (timercounter == 60 && ceoFiredOverlayElem != null) {

            setNetworthInterval(false);

            timercounter = 0;
            let Networth = generateNetworth("17.000.000", "16.000.000");
            updateNetworth(Networth);
            ceoFiredOverlayElem.classList.add("fadein")

            let ceoNameElem = document.querySelector(".ceo_name");
            let ceopictureElem = document.querySelector(".ceo_picture");
            setTimeout(() => {
                fetch("https://uinames.com/api/?ext&region=united states")
                    .then((response) => {
                        return response.json();
                    }).then((data) => {
                        ceoNameElem.textContent = `${data.name} ${data.surname}`;
                        ceopictureElem.src = data.photo;
                        setTimeout(() => {
                            ceoFiredOverlayElem.classList.remove("fadein")
                            setNetworthInterval(true);
                        }, 2000);
                    });
            }, 1000);
        };
    };


    function updateNetworth(number) {
        if (networthValueElem != null) {
            let percentchangeElem = document.querySelector(".networth_percentchange");
            let previousNetworth = networthValueElem.textContent;
            let newNetworth = number;
            networthValueElem.textContent = numberWithCommas(number);
            previousNetworth = parseInt(previousNetworth.replace(/\./g, ""));
            let changepercent = toFixedDecimals(((newNetworth - previousNetworth) / previousNetworth) * 100, 2);
            if (changepercent < 0) {
                percentchangeElem.classList.remove("text--success", "fa-arrow-up");
                percentchangeElem.classList.add("text--error", "fa-arrow-down");
            } else {
                percentchangeElem.classList.add("text--success", "fa-arrow-up");
                percentchangeElem.classList.remove("text--error", "fa-arrow-down");
            }
            percentchangeElem.textContent = changepercent + "%"
            console.log(Math.floor(((newNetworth - previousNetworth) / previousNetworth) * 100) + "%");
        };
    };

    function toFixedDecimals(value, decimalpoints) {
        return +parseFloat(value).toFixed(decimalpoints);
    };

    function generateNetworth(max, min) {
        let maxNumber = max;
        let minNumber = min;
        maxNumber = parseInt(maxNumber.replace(/\./g, ""));
        minNumber = parseInt(minNumber.replace(/\./g, ""));
        let newNetworth = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        return newNetworth.toString();
    };

    function numberWithCommas(x) {
        x = x.replace(/\./g, "");
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    let galleryitemElems = document.querySelectorAll(".gallery_item");
    if (galleryitemElems != null){
        galleryitemElems.forEach((galleryitemElem,index) => {
            setTimeout(function(){
                galleryitemElem.classList.remove("gallery_item--load");
            },
            100 * index);
        });
    }
}); // DOMContentLoaded End