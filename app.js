// ===========> Show Menu <============== //

function openThis() {
    navMenu = document.querySelector('.nav-menu');
    navMenu.classList.add('show-menu');
}
function closeThis() {
    navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-menu');
}

// ==============> Removing Nav Menu when Click <===============//

const slideOut = document.querySelectorAll('.nav-link')
slideOut.forEach(button => button.addEventListener('click', ()=> {
        navMenu = document.getElementById('nav-menu') //getting the id of the nav-menu
                                                                // -- Also the word classList means, add or remove class..
        navMenu.classList.remove('show-menu')   //To review - we can remove show-menu from "nav-menu" using this line of code..
    } 
))

// ==============> Skills <===============//
    const skillsHeader = document.querySelectorAll('.skills-header');  // skills-header is the Tittle and subtitle or the hover menu
    const skillsContent = document.querySelectorAll('.skills-content');
                                        // DAMN IT! always be observant, spent 1 hours realizing what's wrong, "querySelectorAll" be observe
    skillsHeader.forEach((e)=> {
        e.addEventListener('click', toggleSkills)
    });

    function toggleSkills() {
        let itemClass = this.parentNode.className;
        for(i=0; i < skillsContent.length; i++) {
            skillsContent[i].className = "skills-content skills-close"
        }
        if(itemClass === "skills-content skills-close") {
            this.parentNode.className = "skills-content skills-open"
        }
    }

// ==============> Qualification Tabs <===============//

// Tutorial code having problem with the changing part-

// const tabs = document.querySelectorAll('[data-target]');
// const tabContent = document.querySelectorAll('[data-content]');

// tabs.forEach(tab => {
//     tab.addEventListener('click', ()=> {
//         const target = document.querySelector(tab.dataset.target)

//         tabContent.forEach(tabContent => {
//             tabContent.classList.remove('qualifiation-active')
//         })
//         target.classList.add('qualification-active')

//         tabs.forEach(tab=> {
//             tab.classList.remove('qualification-active')
//         })
//         tab.classList.add('qualification-active')
//     })
// })

// ==============> Qualification Tabs my code<===============//

const qualiTab = document.querySelectorAll(".tab-links");
const qualiContent = document.querySelectorAll(".qualification-content");

function openTab(tabName) {
    for(i of qualiTab) {
        i.classList.remove("qualification-active")
    }
    for(j of qualiContent) {
        j.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("qualification-active");
    document.getElementById(tabName).classList.add("active-tab");
}

// Actually - it's not really neccesary to input at the qualificationa-active.
            //This code it similar to that top but smaller lol, but if you want to implement active-class: layout this use at top
// const qualiContent = document.querySelectorAll(".qualification-content");

// function openTab(tabName) {
//     for(j of qualiContent) {
//         j.classList.remove("active-tab")
//     }
//     document.getElementById(tabName).classList.add("active-tab");
// }




// ==============>SERVICES MODAL<===============//

const modalViews = document.querySelectorAll('.services-modal');        // ====> content
const modalBtns = document.querySelectorAll('.services-button');        // ====> button
const modalCloses = document.querySelectorAll('.services-modal-close'); // ====> close

let modal = function(modalContent) {
    modalViews[modalContent].classList.add('active-modal'); // in css .active-modal is => visible
}

modalBtns.forEach((button, modalContent)=> {   //To review button & i are => button=>(value) modalContent=>(index) or the modal[modalContent]
    button.addEventListener('click', ()=> {
        modal(modalContent);
    })
})

modalCloses.forEach((modalClose)=> {
    modalClose.addEventListener('click', ()=> {
        modalViews.forEach((modalView)=> {
            modalView.classList.remove('active-modal')
        })
    })
})


// ==============>Scroll sections active linkL<===============//

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ==============>Change Background Header<===============//

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ==============>Functiuon scroll UP<===============//
function scrollUp(){
    const scrollTop = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ==============> Dark Light Theme <===============//

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun' // uil sun means the icon class => <i class="uil uil-sun"></i>

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'    
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun' // uil-moon means=> the icon moonClass
                                                                                                //'uil-sun means=> the icon sun
// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})












// ===========> Tutorial code that doesnt work <============ //

// const anotherMenu = document.querySelectorAll('.nav-menu');

// document.querySelectorAll('.nav-link').onclick = function() {
//   this.classList.toggle('show-menu');
//   anotherMenu.classList.toggle('show-menu');
// }


// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }


// =====> toturial code that doesn't work <==========//

// const navMenu = document.getElementById('nav-menu'),
//         navToggle = document.getElementById('nav-toggle'),
//              navClose = document.getElementById('nav-close')

// if(navToggle) {
//     const navToggle = document.querySelector('.nav-toggle')
//     navToggle.addEventListener('click', ()=> {
//         navMenu.classList.add('show-them')
//     })
// }
// if(navClose) {
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.remove('show-them')
//     })
// }