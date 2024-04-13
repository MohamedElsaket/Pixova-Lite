let landing = document.querySelector('.landing');
let landingCon = document.querySelector('.landing .container')
let frSection = document.querySelector('.fr-section')
let frSectionCon = document.querySelector('.fr-section .container')
let scSection = document.querySelector('.sc-section')
let scSectionCon = document.querySelector('.sc-section .container')
let thirdSection = document.querySelector('.third-section')
let thirdSectionCon = document.querySelector('.third-section .container')
let forthSection = document.querySelector('.forth-section')
let forthSectionCon = document.querySelector('.forth-section .container')
let team = document.querySelector('.team')
let teamCon = document.querySelector('.team .container')

window.addEventListener('load', () => {
    landing.classList.remove('opacity-0')
    landing.classList.add('opacity-1')
    landingCon.style.marginTop = '0'
})
window.addEventListener('scroll', () => {
    if (window.scrollY >= frSection.offsetTop - 400 ) {
        frSectionCon.style.animationName = 'bounceInUp'
        frSectionCon.style.opacity = '1'
    }
    if (window.scrollY >= scSection.offsetTop - 500) {
        scSectionCon.style.animationName = 'slideInLeft'
    }
    if (window.scrollY >= thirdSection.offsetTop - 500) {
        thirdSectionCon.style.animationName = 'slideInRight'
    }
    if (window.scrollY >= forthSection.offsetTop - 500) {
        forthSectionCon.style.animationName = 'slideInLeft'
    }
    if (window.scrollY >= team.offsetTop - 400 ) {
        teamCon.style.animationName = 'bounceInUp'
        teamCon.style.opacity = '1'
    }
})
// window.addEventListener('scroll', () => {
//     if (window.scrollY >= scSection.offsetTop - 500) {
//         scSectionCon.style.animationName = 'slideInLeft'
//     }
// })
// window.addEventListener('scroll', () => {
//     if (window.scrollY >= thirdSection.offsetTop - 500) {
//         thirdSectionCon.style.animationName = 'slideInRight'
//     }
// })
// window.addEventListener('scroll', () => {
//     if (window.scrollY >= forthSection.offsetTop - 500) {
//         forthSectionCon.style.animationName = 'slideInLeft'
//     }
// })