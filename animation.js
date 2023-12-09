// Page Transition

barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        });
      }
    }]
  });

// Navbar Click

const burgerMenu = document.getElementById('burger-menu-wrapper')
const bmiclinea = document.getElementById('burger-menu-icon-closed-line-a')
const bmiclineb = document.getElementById('burger-menu-icon-closed-line-b')
const bmiclinec = document.getElementById('burger-menu-icon-closed-line-c')

let closed = false

burgerMenu.addEventListener('click', async ()=>{
    bmiclinea.classList.toggle('burger-menu-icon-closed-line-a-open')
    bmiclineb.classList.toggle('burger-menu-icon-closed-line-b-open')
    bmiclinec.classList.toggle('burger-menu-icon-closed-line-c-open')
    burgerMenu.classList.toggle('burger-menu-wrapper-open')

    if (!closed) {
        gsap.to('.nav-open-right-socials-wrapper',{
            right: 48,
            opacity: 1,
            ease: "power1.out"
        })
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
        })
        closed=true
    } else {
        gsap.to('.nav-open-left',{
            left: '-100%',
            duration: 2,
            ease: "power1.out"
        })
        gsap.to('.nav-open-right-socials-wrapper',{
            right: '-100%',
            duration: 2,
            opacity: 0,
            ease: "power1.out"
        })
        closed=false
    }

    console.log(closed);

})