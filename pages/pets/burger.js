// MENU MAIN Burger
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const list = document.querySelector('.list');
    const logo = document.querySelector('.logo');
    const logoBurger = document.querySelector('.logo-burger');
    const listLinks = document.querySelectorAll('.menu li')
    const main = document.querySelector('.main')


    const burgerLine = document.querySelectorAll('.burger-line')

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu-burger')
        list.classList.toggle('list-active')
        burger.classList.toggle('burger-active')
        logo.classList.toggle('logo-active')
        logoBurger.classList.toggle('logo-burger-active')
        logoTitle.classList.toggle('logo__title-active')
        logoSubtitle.classList.toggle('logo__subtitle-active')
        burgerLine.classList.toggle('burger-line-active')
        //animation links

        listLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 +0.2}s`
            }
        })

        main.addEventListener("click", clickOutside, false);

        function clickOutside(e) {
            const inside = list.contains(e.target);
            /*console.log(inside);*/
            if (inside == false && list.classList.contains('list-active')) {
                menu.classList.toggle('menu-burger')
                list.classList.toggle('list-active')
                burger.classList.toggle('burger-active')
                logo.classList.toggle('logo-active')
                logoBurger.classList.toggle('logo-burger-active')

                //animation links

                listLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = ''
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 +0.2}s`
                    }
                })
            }
        }

    })

}


navSlide()