/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n    let contactFormElem = document.querySelector(\".contactform\");\r\n    let firstnameElem = document.querySelector(\"#firstname\");\r\n    let lastnameElem = document.querySelector(\"#lastname\");\r\n    let emailElem = document.querySelector(\"#email\");\r\n    let phoneElem = document.querySelector(\"#phone\");\r\n    let subjectElem = document.querySelector(\"#subject\");\r\n    let messageElem = document.querySelector(\"#message\");\r\n\r\n    window.onbeforeunload = function () {\r\n        if (contactFormElem != null) {\r\n            let contactdata = {\r\n                firstname: firstnameElem.value,\r\n                lastname: lastnameElem.value,\r\n                email: emailElem.value,\r\n                phone: phoneElem.value,\r\n                subject: subjectElem.value,\r\n                message: messageElem.value,\r\n            };\r\n            localStorage.setItem(\"contactdata\", JSON.stringify(contactdata))\r\n        };\r\n    }\r\n    getLocalContactData();\r\n\r\n    function getLocalContactData() {\r\n        if (contactFormElem != null) {\r\n            if (localStorage.getItem(\"contactdata\") != null) {\r\n                let contactdata = JSON.parse(localStorage.getItem(\"contactdata\"));\r\n                console.log(contactdata)\r\n                firstnameElem.value = contactdata.firstname;\r\n                lastnameElem.value = contactdata.lastname;\r\n                emailElem.value = contactdata.email;\r\n                phoneElem.value = contactdata.phone;\r\n                subjectElem.value = contactdata.subject;\r\n                messageElem.value = contactdata.message;\r\n            };\r\n        }\r\n    };\r\n\r\n    if (contactFormElem != null) {\r\n        contactFormElem.addEventListener(\"submit\", (event) => {\r\n            event.preventDefault();\r\n            if (!isNaN(firstnameElem.value) || firstnameElem.value.length < 2) {\r\n                alert(\"Firstname must be 2 or more characters, and may not contain any numbers\");\r\n                firstnameElem.style.borderColor = \"red\";\r\n                return false;\r\n            } else {\r\n                firstnameElem.style.borderColor = \"\";\r\n            }\r\n            if (!isNaN(lastnameElem.value) || lastnameElem.value.length < 2) {\r\n                alert(\"Lastname must be 2 or more characters, and may not contain any numbers\");\r\n                lastnameElem.style.borderColor = \"red\";\r\n                return false;\r\n            } else {\r\n                lastnameElem.style.borderColor = \"\";\r\n            }\r\n            if (!validateEmail(email.value)) {\r\n                alert(\"Please enter a valid email\");\r\n                emailElem.style.borderColor = \"red\";\r\n                return false;\r\n            } else {\r\n                emailElem.style.borderColor = \"\";\r\n            }\r\n            if (isNaN(phoneElem.value) || phoneElem.value.length != 8) {\r\n                alert(\"Phone number must be 8 didgets\");\r\n                phoneElem.style.borderColor = \"red\";\r\n                return false;\r\n            } else {\r\n                phoneElem.style.borderColor = \"\";\r\n            }\r\n            if (subjectElem.value == \"\") {\r\n                alert(\"Please select a subject\");\r\n                subjectElem.style.borderColor = \"red\";\r\n                return false;\r\n            } else {\r\n                subjectElem.style.borderColor = \"\";\r\n            }\r\n            if (messageElem.value.length < 3) {\r\n                alert(\"Please enter a message of atleast 3 characters\");\r\n                messageElem.style.borderColor = \"red\";\r\n                return false;\r\n            } else {\r\n                messageElem.style.borderColor = \"\";\r\n            }\r\n\r\n            firstnameElem.value = \"\";\r\n            lastnameElem.value = \"\";\r\n            emailElem.value = \"\";\r\n            phoneElem.value = \"\";\r\n            subjectElem.value = \"\";\r\n            messageElem.value = \"\";\r\n            contactFormElem.submit();\r\n        });\r\n    }\r\n    function validateEmail(email) {\r\n        var re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n        return re.test(String(email).toLowerCase());\r\n    }\r\n\r\n\r\n    let mailformElem = document.querySelector(\".mailinglist_form\");\r\n    mailformElem.addEventListener(\"submit\", (event) => {\r\n        event.preventDefault();\r\n        if (!validateEmail(event.target[0].value)) {\r\n            alert(\"Please enter a valid email\");\r\n            event.target[0].style.border = \"1px solid red\";\r\n            return false;\r\n        } else {\r\n            alert(\"Thanks for subscribing\");\r\n            event.target[0].style.border = \"\";\r\n            event.target[0].value = \"\";\r\n        }\r\n    });\r\n\r\n\r\n    let networthValueElem = document.querySelector(\".networth_value\");\r\n\r\n\r\n    let timercounter = 0;\r\n    let timerinterval = 5000;\r\n    let getNetworthInterval;\r\n\r\n    setNetworthInterval(true)\r\n\r\n    function setNetworthInterval(flag) {\r\n        if (networthValueElem != null && flag) {\r\n            getNetworthInterval = setInterval(() => {\r\n                let Networth = generateNetworth(\"20.000.000\", \"19.000.000\");\r\n                updateNetworth(Networth);\r\n                timercounter += timerinterval / 1000;\r\n                console.log(timercounter);\r\n                fireCeoHireNewUpdateInfo();\r\n            }, timerinterval);\r\n        }else{\r\n            clearInterval(getNetworthInterval);\r\n        }\r\n    }\r\n\r\n    let ceoFiredOverlayElem = document.querySelector(\".teammember_fired\");\r\n    function fireCeoHireNewUpdateInfo() {\r\n        if (timercounter == 60 && ceoFiredOverlayElem != null) {\r\n            \r\n            setNetworthInterval(false);\r\n\r\n            timercounter = 0;\r\n            let Networth = generateNetworth(\"17.000.000\", \"16.000.000\");\r\n            updateNetworth(Networth);\r\n            ceoFiredOverlayElem.classList.add(\"fadein\")\r\n\r\n            let ceoNameElem = document.querySelector(\".ceo_name\");\r\n            let ceopictureElem = document.querySelector(\".ceo_picture\");\r\n            setTimeout(() => {\r\n                fetch(\"https://uinames.com/api/?ext&region=united states\")\r\n                    .then((response) => {\r\n                        return response.json();\r\n                    }).then((data) => {\r\n                        ceoNameElem.textContent = `${data.name} ${data.surname}`;\r\n                        ceopictureElem.src = data.photo;\r\n                        setTimeout(() => {\r\n                            ceoFiredOverlayElem.classList.remove(\"fadein\")\r\n                            setNetworthInterval(true);\r\n                        }, 2000);\r\n                    });\r\n            }, 1000);\r\n        };\r\n    };\r\n\r\n\r\n    function updateNetworth(number) {\r\n        if (networthValueElem != null) {\r\n            let percentchangeElem = document.querySelector(\".networth_percentchange\");\r\n            let previousNetworth = networthValueElem.textContent;\r\n            let newNetworth = number;\r\n            networthValueElem.textContent = numberWithCommas(number);\r\n            previousNetworth = parseInt(previousNetworth.replace(/\\./g, \"\"));\r\n            let changepercent = toFixedDecimals(((newNetworth - previousNetworth) / previousNetworth) * 100, 2);\r\n            if (changepercent < 0) {\r\n                percentchangeElem.classList.remove(\"text--success\", \"fa-arrow-up\");\r\n                percentchangeElem.classList.add(\"text--error\", \"fa-arrow-down\");\r\n            } else {\r\n                percentchangeElem.classList.add(\"text--success\", \"fa-arrow-up\");\r\n                percentchangeElem.classList.remove(\"text--error\", \"fa-arrow-down\");\r\n            }\r\n            percentchangeElem.textContent = changepercent + \"%\"\r\n            console.log(Math.floor(((newNetworth - previousNetworth) / previousNetworth) * 100) + \"%\");\r\n        };\r\n    };\r\n\r\n    function toFixedDecimals(value, decimalpoints) {\r\n        return +parseFloat(value).toFixed(decimalpoints);\r\n    };\r\n\r\n    function generateNetworth(max, min) {\r\n        let maxNumber = max;\r\n        let minNumber = min;\r\n        maxNumber = parseInt(maxNumber.replace(/\\./g, \"\"));\r\n        minNumber = parseInt(minNumber.replace(/\\./g, \"\"));\r\n        let newNetworth = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;\r\n        return newNetworth.toString();\r\n    };\r\n\r\n    function numberWithCommas(x) {\r\n        x = x.replace(/\\./g, \"\");\r\n        return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \".\");\r\n    };\r\n}); // DOMContentLoaded End\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/index.js ./src/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/style.scss */\"./src/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/style.scss?");

/***/ })

/******/ });