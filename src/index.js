document.addEventListener("DOMContentLoaded", () => {
    let contactFormElem = document.querySelector(".contactform");
    let firstnameElem = contactFormElem.querySelector("#firstname");
    let lastnameElem = contactFormElem.querySelector("#lastname");
    let emailElem = contactFormElem.querySelector("#email");
    let phoneElem = contactFormElem.querySelector("#phone");
    let subjectElem = contactFormElem.querySelector("#subject");
    let messageElem = contactFormElem.querySelector("#message");

    window.onbeforeunload = function () {
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

    getLocalContactData();

    function getLocalContactData() {
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

    contactFormElem.addEventListener("submit",(event)=>{
        event.preventDefault();
        if (!isNaN(firstnameElem.value) || firstnameElem.value.length < 2){
            alert("Firstname must be 2 or more characters, and may not contain any numbers");
            firstnameElem.style.borderColor = "red";
            return false;
        }else{
            firstnameElem.style.borderColor = "";
        }
        if (!isNaN(lastnameElem.value) || lastnameElem.value.length < 2){
            alert("Lastname must be 2 or more characters, and may not contain any numbers");
            lastnameElem.style.borderColor = "red";
            return false;
        }else{
            lastnameElem.style.borderColor = "";
        }
        if (!validateEmail(email.value)){
            alert("Please enter a valid email");
            emailElem.style.borderColor = "red";
            return false;
        }else{
            emailElem.style.borderColor = "";
        }
        if (isNaN(phoneElem.value) || phoneElem.value.length != 8){
            alert("Phone number must be 8 didgets");
            phoneElem.style.borderColor = "red";
            return false;
        }else{
            phoneElem.style.borderColor = "";
        }
        if (subjectElem.value == ""){
            alert("Please select a subject");
            subjectElem.style.borderColor = "red";
            return false;
        }else{
            subjectElem.style.borderColor = "";
        }
        if (messageElem.value.length < 3){
            alert("Please enter a message of atleast 3 characters");
            messageElem.style.borderColor = "red";
            return false;
        }else{
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

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    let mailformElem = document.querySelector(".mailinglist_form");

    mailformElem.addEventListener("submit",(event)=>{
        event.preventDefault();
        if (!validateEmail(event.target[0].value)){
            alert("Please enter a valid email");
            event.target[0].style.border = "1px solid red";
            return false;
        }else{
            alert("Thanks for subscribing");
            event.target[0].style.border = "";
            event.target[0].value = "";
        }
    });
}); // DOMContentLoaded End