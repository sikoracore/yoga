// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*========= REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class)
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*========= CHANGE BACKGROUND HEADER ==========*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater then 40 viewport height, add scroll-header class to header tag
    if(scrollY >= 50) {
        header.classList.add('bg-header')
    } else {
        header.classList.remove('bg-header')
    }
 }
 window.addEventListener('scroll', scrollHeader)

/*========= SCROLL SECTION ACTIVE LINK ==========*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () => {
  	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link')
		} else {
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*========= SHOW SCROLL UP ==========*/
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    if(scrollY >= 350) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*========= EMAIL JS ==========*/
const contactForm = document.getElementById('contact-form'),
      contactUser = document.getElementById('contact-user'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if(contactUser.value === '') {
        // Add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        // Show message
        contactMessage.textContent = 'You must enter your email'

        // Remove message three seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 3000)
    } else {
        // serviceID - templadeID - #form - publicKey
        emailjs.sendForm('service_jw6ky0b', 'template_vgjbb4k', '#contact-form', 'ArkWWIa1IznbZ2FuD')
            .then(() => {
            // Show message and add color
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'You registered successfully 💪'

            // Remove message four seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 4000)

        }, (error) => {
            // Mail sending error
            alert('OOPS! SOMETHING HAS FAILED...', error)
        })
            // To clear the input field
            contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)