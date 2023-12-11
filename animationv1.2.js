// Page Transition

barba.init({
    transition: [{
        leave(date){
            gsap.to(data.current.container, {
                y: '100vw',
                duration: 2
            })
        },
        enter(data){
            gsap.from(data.current.container, {
                y: 0,
                duration: 2
            })
        }
    }]
})

//   GSAP Page Transition

const leaveTransition = () => {
    var t1 = gsap.timeline()
    t1.to('.transition-overlay',{
        y: 0,
        ease: "power1.in"
    })
}

const enterTransition = () => {
    var t1 = gsap.timeline()
    t1.to('.transition-overlay',{
        y: '100%',
        ease: "power1.in"
    })
}

// Navbar Click

gsap.to('.dark-overlay',{
    duration: 1,
    y: '100%',
    ease: "power1.in"
})

const burgerMenu = document.getElementById('burger-menu-wrapper')
const bmiclinea = document.getElementById('burger-menu-icon-closed-line-a')
const bmiclineb = document.getElementById('burger-menu-icon-closed-line-b')
const bmiclinec = document.getElementById('burger-menu-icon-closed-line-c')
const navLinksPrimary = document.querySelectorAll('.nav-open-left-primary-menu-link')
const navLinksSecondary = document.querySelectorAll('.nav-open-left-secondary-menu-link')
const navLogoWrapper = document.querySelector('.nav-closed-logo-wrapper')

let closed = false

const navControl = () => {

    bmiclinea.classList.toggle('burger-menu-icon-closed-line-a-open')
    bmiclineb.classList.toggle('burger-menu-icon-closed-line-b-open')
    bmiclinec.classList.toggle('burger-menu-icon-closed-line-c-open')
    burgerMenu.classList.toggle('burger-menu-wrapper-open')
    navLogoWrapper.classList.toggle('nav-closed-logo-wrapper-open')

    if (!closed) {
        const navOpen = gsap.timeline().to('.nav-open-left',{
            left: 0,
            duration: 0.8,
            ease: "power1.out"
        }).from('.nav-open-logo-wrapper',{
            opacity: 0
        },'>-0.4').from('#nav-open-left-primary-menu-link-li-one',{
            y: 24,
            duration: 0.2,
            ease: "power1.out",
            opacity: 0
        },'>-0.1').from('#nav-open-left-primary-menu-link-li-two',{
            y: 24,
            duration: 0.2,
            ease: "power1.out",
            opacity: 0
        },'>-0.1').from('#nav-open-left-primary-menu-link-li-three',{
            y: 24,
            duration: 0.2,
            ease: "power1.out",
            opacity: 0
        },'>-0.1').from('#nav-open-left-primary-menu-link-li-four',{
            y: 24,
            duration: 0.2,
            ease: "power1.out",
            opacity: 0
        },'>-0.1').from('#nav-open-left-primary-menu-link-li-five',{
            y: 24,
            duration: 0.2,
            ease: "power1.out",
            opacity: 0
        },'>-0.1').from('.nav-open-left-secondary-menu-links-wrapper',{
            opacity: 0
        },'>-0.1').to('.nav-open-right-socials-wrapper',{
            bottom: 48,
            opacity: 1,
            duration: 0.2,
            ease: "power1.out"
        },'>-0.3')
        closed=true
    } else {
        gsap.to('.nav-open-left',{
            left: '-120%',
            duration: 0.5,
            opacity: 0,
            ease: "power1.out"
        })
        gsap.to('.nav-open-right-socials-wrapper',{
            bottom: '-100%',
            duration: 2,
            opacity: 0,
            ease: "power1.out"
        })
        closed=false
    }

}

burgerMenu.addEventListener('click', ()=>{
    navControl()
})


navLinksPrimary.forEach(navLink => {
    navLink.addEventListener('click', ()=>{
        navControl()
    })
})

navLinksSecondary.forEach(navLink => {
    navLink.addEventListener('click', ()=>{
        navControl()
    })
})
