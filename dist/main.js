/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AboutUs.js":
/*!************************!*\
  !*** ./src/AboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Section: () => (/* binding */ Section),\n/* harmony export */   createAboutPage: () => (/* binding */ createAboutPage)\n/* harmony export */ });\n// const content =document.getElementById(\"content\")\r\n\r\n class Section {\r\n    constructor(title, content, imgSrc, rowClass) {\r\n        this.title = title;\r\n        this.content = content;\r\n        this.imgSrc = imgSrc;\r\n        this.rowClass = rowClass;\r\n    }\r\n\r\n    createSection() {\r\n        const rowDiv = document.createElement('div');\r\n        rowDiv.className = `row ${this.rowClass}`;\r\n\r\n        const textDiv = document.createElement('div');\r\n        textDiv.className = 'text';\r\n\r\n        const titleElement = document.createElement(this.rowClass === 'one' ? 'h2' : 'h3');\r\n        titleElement.textContent = this.title;\r\n\r\n        const contentP = document.createElement('p');\r\n        contentP.textContent = this.content;\r\n\r\n        textDiv.appendChild(titleElement);\r\n        textDiv.appendChild(contentP);\r\n\r\n        const imgElement = document.createElement('img');\r\n        imgElement.src = this.imgSrc;\r\n       \r\n\r\n        rowDiv.appendChild(this.rowClass === 'two' ? imgElement : textDiv);\r\n        rowDiv.appendChild(this.rowClass === 'two' ? textDiv : imgElement);\r\n\r\n        return rowDiv;\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction createAboutPage(content) {\r\n    const aboutUsContainer = document.createElement(\"div\");\r\n    aboutUsContainer.className = 'about-us';\r\n    content.appendChild(aboutUsContainer)\r\n\r\n    const sections = [\r\n        new Section('Welcome to Bhako!', 'At Bhako, we believe that every bite should be a delightful experience. Founded in 2015 with a passion for baking and a commitment to quality, Bhako has been serving the community with love and dedication.', '../src/img/pie.jpg', 'one'),\r\n        new Section('Our Story', 'Bhako was born out of a desire to create a bakery where tradition meets innovation. Our journey began with a simple idea: to craft the finest baked goods using only the freshest and highest quality ingredients. From our humble beginnings as a small local bakery, we have grown into a beloved establishment known for our delicious pastries, bread, and cakes. ', '../src/img/rool.jpg', 'two'),\r\n        new Section('Our Commitment', 'At Bhako, we believe that every bite should be a delightful experience. Founded in 2015 with a passion for baking and a commitment to quality, Bhako has been serving the community with love and dedication.', '../src/img/bread.jpg', 'three')\r\n    ];\r\n\r\n    sections.forEach(section => {\r\n        aboutUsContainer.appendChild(section.createSection());\r\n    });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://resturant-page/./src/AboutUs.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactPage: () => (/* binding */ contactPage)\n/* harmony export */ });\n\r\nfunction contactPage(content) {\r\n  const contactPage = document.createElement(\"div\");\r\n  const greetDiv = document.createElement(\"div\");\r\n  const h3 = document.createElement(\"h3\");\r\n  const p = document.createElement(\"p\");\r\n\r\n  h3.innerHTML = \"We’re Here to Help!\";\r\n  p.innerHTML =\r\n    \"Thank you for giving us the opportunity to serve you. At Bhako, we value your inquiries, feedback, and any opportunities to assist you. Whether you have questions about our products, need support, or just want to share your thoughts, we're here to listen and help.\";\r\n\r\n  contactPage.setAttribute(\"class\", \"contact-page\");\r\n  greetDiv.setAttribute(\"class\", \"greeting\");\r\n\r\n  greetDiv.appendChild(h3);\r\n  greetDiv.appendChild(p);\r\n  contactPage.appendChild(greetDiv);\r\n\r\n  content.appendChild(contactPage);\r\n\r\n  const form = document.createElement(\"form\");\r\n  const inputText = document.createElement(\"input\");\r\n  const inputEmail = document.createElement(\"input\");\r\n  const labelThree = document.createElement(\"label\");\r\n  const labelTwo = document.createElement(\"label\");\r\n  const labelOne = document.createElement(\"label\");\r\n  const textArea = document.createElement(\"textarea\");\r\n  const button = document.createElement(\"button\");\r\n\r\n  button.innerHTML = \"Submit\";\r\n  labelOne.innerHTML = \"FullName\";\r\n  labelTwo.innerHTML = \"Email\";\r\n  labelThree.innerHTML = \"Feedback\";\r\n\r\n  inputText.setAttribute(\"type\", \"text\");\r\n  inputEmail.setAttribute(\"type\", \"email\");\r\n\r\n  contactPage.appendChild(form);\r\n  form.appendChild(labelOne);\r\n  form.appendChild(inputText);\r\n  form.appendChild(labelTwo);\r\n  form.appendChild(inputEmail);\r\n  form.appendChild(labelThree);\r\n  form.appendChild(textArea);\r\n  form.appendChild(button);\r\n}\r\n\n\n//# sourceURL=webpack://resturant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\r\n\r\n function createHome(content) {\r\n  const homeDiv = document.createElement(\"div\");\r\n  homeDiv.setAttribute(\"class\", \"home\");\r\n  content.appendChild(homeDiv);\r\n\r\n  //Creating the left and right part inside the home\r\n  const left = document.createElement(\"div\");\r\n  const right = document.createElement(\"div\");\r\n  left.setAttribute(\"class\", \"left\");\r\n  right.setAttribute(\"class\", \"right\");\r\n  homeDiv.appendChild(left);\r\n  homeDiv.appendChild(right);\r\n\r\n  //Inside the left.\r\n  const h2 = document.createElement(\"h2\");\r\n  const span1 = document.createElement(\"span\");\r\n  const p = document.createElement(\"p\");\r\n\r\n  h2.innerHTML = `Welcome to `;\r\n  span1.innerHTML = \"Bhako\";\r\n  p.innerHTML =\r\n    \"Discover a world of sweet and savory delights. From flaky croissants to decadent cakes, each treat is handcrafted with care and the finest ingredients. Whether it's a morning indulgence or a special occasion, our bakery is your destination for deliciousness.\";\r\n\r\n  left.appendChild(h2);\r\n  left.appendChild(p);\r\n  h2.appendChild(span1);\r\n\r\n  //Inside the right.\r\n  const svgDiv = document.createElement(\"div\");\r\n  svgDiv.setAttribute(\"class\", \"svg-container\");\r\n\r\n  const img1 = document.createElement(\"img\");\r\n  const img2 = document.createElement(\"img\");\r\n  const img3 = document.createElement(\"img\");\r\n\r\n//Managing the images.. & little text\r\n  img1.setAttribute(\"src\", \"../src/img/blob.svg\");\r\n  img1.setAttribute(\"class\", \"blob\");\r\n  img2.setAttribute(\"src\", \"../src/img/stroke.svg\");\r\n  img2.setAttribute(\"class\", \"stroke\");\r\n\r\n  const cakeDiv = document.createElement(\"div\");\r\n  cakeDiv.setAttribute(\"class\", \"pancake\");\r\n\r\n  img3.setAttribute(\"src\", \"../src/img/pancakee.jpg\");\r\n  img3.setAttribute(\"class\", \"panImg\");\r\n\r\n  const h4 = document.createElement(\"h4\");\r\n  const span2 = document.createElement(\"span\");\r\n\r\n  span2.textContent = \"Pancake \";\r\n\r\n  right.appendChild(svgDiv);\r\n  svgDiv.appendChild(cakeDiv);\r\n  cakeDiv.appendChild(img3);\r\n  svgDiv.appendChild(img1);\r\n  svgDiv.appendChild(img2);\r\n  cakeDiv.appendChild(h4);\r\n  h4.appendChild(span2);\r\n\r\n  h4.innerHTML = span2.outerHTML + \" with blue berries\";\r\n}\r\n\r\n\n\n//# sourceURL=webpack://resturant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AboutUs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs.js */ \"./src/AboutUs.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu .js */ \"./src/menu .js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n// import \"./style.css\";\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const content = document.getElementById(\"content\");\r\n\r\n    const aboutBtn = document.getElementById(\"about-us\");\r\n    const homeBtn = document.getElementById(\"home\");\r\n    const menuBtn= document.getElementById(\"menu\");\r\n    const contactBtn =document.getElementById(\"contact-us\")\r\n\r\n    content.removeChild(content.firstChild);\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)(content);\r\n\r\n\r\n\r\n    aboutBtn.addEventListener('click', () => {\r\n        // if (content.firstChild) {\r\n        //     content.removeChild(content.firstChild);\r\n        // }\r\n\r\n        content.removeChild(content.firstChild);\r\n       (0,_AboutUs_js__WEBPACK_IMPORTED_MODULE_0__.createAboutPage)(content);\r\n\r\n    });\r\n\r\n    homeBtn.addEventListener(\"click\",()=>{\r\n        // if (content.firstChild) {\r\n        //     content.removeChild(content.firstChild);\r\n        // }\r\n        content.removeChild(content.firstChild);\r\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)(content);\r\n\r\n    })\r\n\r\n    menuBtn.addEventListener(\"click\",()=>{\r\n        // if (content.firstChild) {\r\n        //     content.removeChild(content.firstChild);\r\n        // }\r\n\r\n\r\n\r\n        content.removeChild(content.firstChild);\r\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuPage)(content);\r\n    })\r\n\r\n    contactBtn.addEventListener(\"click\",()=>{\r\n        // if (content.firstChild) {\r\n        //     content.removeChild(content.firstChild);\r\n        // }\r\n        content.removeChild(content.firstChild);\r\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.contactPage)(content);\r\n    })\r\n\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu .js":
/*!**********************!*\
  !*** ./src/menu .js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\nconst content = document.getElementById(\"content\")\r\n\r\nclass  menuItem {\r\n\r\n    constructor(itemNumber,imgSrc, itemName, price,details) {\r\n       this.itemNumber=itemNumber\r\n        this.imgSrc=imgSrc;\r\n        this.itemName=itemName;\r\n        this.price=price;\r\n        this.details=details;\r\n    }\r\n\r\n   CreateItemCard(){\r\n    const itemCard= document.createElement(\"div\");\r\n    itemCard.className=`item-card ${this.itemNumber}`\r\n\r\n    const imgELe = document.createElement(\"img\");\r\n    imgELe.src=this.imgSrc;\r\n\r\n    const pricingDiv = document.createElement(\"div\")\r\n    pricingDiv.className=\"pricing\"\r\n\r\n    const h3 =document.createElement(\"h3\");\r\n    h3.textContent=this.itemName;\r\n\r\n    const price =document.createElement(\"p\");\r\n    price.textContent=`Price: $${this.price}`;\r\n\r\n\r\n    pricingDiv.appendChild(h3);\r\n    pricingDiv.appendChild(price);\r\n\r\n\r\n\r\n\r\n    const details =document.createElement(\"p\");\r\n    details.className=\"details\";\r\n    details.textContent=this.details;\r\n\r\n    const Btn =document.createElement(\"button\");\r\n    Btn.textContent=\"Order Now\";\r\n\r\n\r\nitemCard.appendChild(imgELe);\r\nitemCard.appendChild(pricingDiv);\r\nitemCard.appendChild(details);\r\nitemCard.appendChild(Btn);\r\n\r\nreturn itemCard;\r\n\r\n   } \r\n\r\n}\r\n\r\nfunction menuPage(content){\r\n\r\n    \r\n    const Menu = document.createElement(\"div\");\r\n    Menu.className=\"menu\";\r\n\r\n    content.appendChild(Menu);\r\n\r\n    const itemCards = [\r\n        new menuItem(\"One\",\"../src/img/bread.jpg\",\"bread\",\"14.99\",\"loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc\"),\r\n        new menuItem(\"One\",\"../src/img/bread.jpg\",\"bread\",\"14.99\",\"Indulge in the timeless delight of freshly baked loaf bread at our bakery,try for it yourself \"),\r\n        new menuItem(\"One\",\"../src/img/bread.jpg\",\"bread\",\"14.99\",\" Experience the comfort and satisfaction of warm, freshly baked bread with every bite at our bakery.\"),\r\n        new menuItem(\"One\",\"../src/img/bread.jpg\",\"bread\",\"14.99\",\"loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc\"),\r\n        new menuItem(\"One\",\"../src/img/bread.jpg\",\"bread\",\"14.99\",\"loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc\"),\r\n        new menuItem(\"One\",\"../src/img/bread.jpg\",\"bread\",\"14.99\",\"Indulge in the timeless delight of freshly baked loaf bread at our bakery\"),\r\n        new menuItem(\"One\",\"../src/img/bread.jpg\",\"bread\",\"14.99\",\" Experience the comfort and satisfaction of warm, freshly baked bread with every bite at our bakery.\"),\r\n        new menuItem(\"One\",\"../src/img/bread.jpg\",\"bread\",\"14.99\",\"loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc\"),\r\n        new menuItem(\"One\",\"../src/img/bread.jpg\",\"bread\",\"14.99\",\"loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc\"),\r\n        new menuItem(\"One\",\"../src/img/bread.jpg\",\"bread\",\"14.99\",\"loafy hot and tasty bread lorem sdjc efilewv dvhjlsd n eiruevjnv oenfefjbdv mnscmbekef sc,nefkknc\")\r\n    ]\r\n\r\n    itemCards.forEach((ItemCard)=>{\r\n        Menu.appendChild(ItemCard.CreateItemCard());\r\n\r\n    })\r\n    \r\n}\n\n//# sourceURL=webpack://resturant-page/./src/menu_.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;