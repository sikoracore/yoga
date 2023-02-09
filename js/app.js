(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle"), navClose = document.getElementById("nav-close");
    if (navToggle) navToggle.addEventListener("click", (() => {
        navMenu.classList.add("show-menu");
    }));
    if (navClose) navClose.addEventListener("click", (() => {
        navMenu.classList.remove("show-menu");
    }));
    const navLink = document.querySelectorAll(".nav__link");
    const linkAction = () => {
        const navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("show-menu");
    };
    navLink.forEach((n => n.addEventListener("click", linkAction)));
    const scrollHeader = () => {
        const header = document.getElementById("header");
        if (scrollY >= 50) header.classList.add("bg-header"); else header.classList.remove("bg-header");
    };
    window.addEventListener("scroll", scrollHeader);
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
        const scrollY = window.pageYOffset;
        sections.forEach((current => {
            const sectionHeight = current.offsetHeight, sectionTop = current.offsetTop - 58, sectionId = current.getAttribute("id"), sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) sectionsClass.classList.add("active-link"); else sectionsClass.classList.remove("active-link");
        }));
    };
    window.addEventListener("scroll", scrollActive);
    const scrollUp = () => {
        const scrollUp = document.getElementById("scroll-up");
        if (scrollY >= 350) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll");
    };
    window.addEventListener("scroll", scrollUp);
    const contactForm = document.getElementById("contact-form"), contactUser = document.getElementById("contact-user"), contactMessage = document.getElementById("contact-message");
    const sendEmail = e => {
        e.preventDefault();
        if ("" === contactUser.value) {
            contactMessage.classList.remove("color-green");
            contactMessage.classList.add("color-red");
            contactMessage.textContent = "You must enter your email";
            setTimeout((() => {
                contactMessage.textContent = "";
            }), 3e3);
        } else {
            emailjs.sendForm("service_jw6ky0b", "template_vgjbb4k", "#contact-form", "ArkWWIa1IznbZ2FuD").then((() => {
                contactMessage.classList.add("color-green");
                contactMessage.textContent = "You registered successfully 💪";
                setTimeout((() => {
                    contactMessage.textContent = "";
                }), 4e3);
            }), (error => {
                alert("OOPS! SOMETHING HAS FAILED...", error);
            }));
            contactUser.value = "";
        }
    };
    contactForm.addEventListener("submit", sendEmail);
    window["FLS"] = true;
    isWebp();
})();