document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.header__toggle')
    const menu = document.querySelector('.header__menu')

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('open')
    })
})

var profile = document.querySelector('.profile__image')
var profilePopup = document.getElementById('profile-popup')
var closeBtn = document.querySelector('.profile-popup .close')

profile.addEventListener('click', function () {
    profilePopup.style.display = 'block'
})

closeBtn.addEventListener('click', function () {
    profilePopup.style.display = 'none'
})

document.addEventListener('click', function (event) {
    if (event.target !== profile && event.target !== profilePopup) {
        profilePopup.style.display = 'none'
    }
})

const navLinks = document.querySelectorAll('nav ul li a')

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault()

        const sectionId = link.getAttribute('href').slice(1)
        const section = document.getElementById(sectionId)

        section.scrollIntoView({ behavior: "smooth" })
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop')

    const isMobile = window.innerWidth <= 480
    const triggerPoint = isMobile ? window.innerHeight / 2 : 1800

    window.addEventListener('scroll', function() {
        if (window.scrollY > triggerPoint) {
            backToTopBtn.classList.remove('hidden')
        } else {
            backToTopBtn.classList.add('hidden')
        }
    })

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
})

const menuToggle = document.querySelector('.menu-toggle')
const navMenu = document.querySelector('.nav__menu')

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    menuToggle.classList.toggle('active')
    
})
