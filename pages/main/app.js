// MENU MAIN Burger
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const list = document.querySelector('.list');
    const logo = document.querySelector('.logo');
    const listLinks = document.querySelectorAll('.menu li')

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu-burger')
        list.classList.toggle('list-active')
        burger.classList.toggle('burger-active')
        logo.classList.toggle('logo-active')

        //animation links
 

        listLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 +0.2}s`
            }
        })
    })

}


navSlide()