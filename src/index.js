
import {createAboutPage} from "./AboutUs.js";
import {createHome} from "./home.js";
import {menuPage} from "./menu .js"
import {contactPage} from "./contact.js";


document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById("content");

    const aboutBtn = document.getElementById("about-us");
    const homeBtn = document.getElementById("home");
    const menuBtn= document.getElementById("menu");
    const contactBtn =document.getElementById("contact-us")

    content.removeChild(content.firstChild);
    createHome(content);



    aboutBtn.addEventListener('click', () => {
        // if (content.firstChild) {
        //     content.removeChild(content.firstChild);
        // }

        content.removeChild(content.firstChild);
       createAboutPage(content);

    });

    homeBtn.addEventListener("click",()=>{
        // if (content.firstChild) {
        //     content.removeChild(content.firstChild);
        // }
        content.removeChild(content.firstChild);
        createHome(content);

    })

    menuBtn.addEventListener("click",()=>{
        // if (content.firstChild) {
        //     content.removeChild(content.firstChild);
        // }



        content.removeChild(content.firstChild);
        menuPage(content);
    })

    contactBtn.addEventListener("click",()=>{
        // if (content.firstChild) {
        //     content.removeChild(content.firstChild);
        // }
        content.removeChild(content.firstChild);
        contactPage(content);
    })


});

