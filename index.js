let toggleBtn = document.getElementById('toggle-btn');


// toggleBtn.onclick = ()=>{
    
// }



//Faq 

document.addEventListener('DOMContentLoaded',()=>{
    const faqMenu = document.querySelector('.faq-header');




    document.addEventListener('click',(e)=>{

        const menuList = faqMenu.querySelector('ul');

        const menuBtns = menuList.querySelectorAll('li')

        const activeBtn = e.target.closest('li');

        activeBtn.classList.toggle('active');

    menuBtns.forEach((menuBtn)=>{
        
        if(menuBtn != activeBtn){
            menuBtn.classList.remove('active');
        }

    } )


        
    })

    
})

document.addEventListener( 'DOMContentLoaded',()=>{
    const faqContainer = document.querySelector('.faq-content');

    

    document.addEventListener('click',(e)=>{
        const groupHeader = e.target.closest('.faq-group-header');
        // console.log("clicked");

        if(!groupHeader) return ;

        const group = groupHeader.parentElement;
        const groupPara = group.querySelector('.faq-group-para');
        const icon = groupHeader.querySelector('i');

        console.log(group);

        //toggle Icon
        icon.classList.toggle("uil-plus");
        icon.classList.toggle("uil-times");

        //toggle Visibility

        groupPara.classList.toggle("open");


        const otherGroups = document.querySelectorAll(".faq-group");

        otherGroups.forEach((otherGroup)=>{
            if(otherGroup != group){
                const otherGroupPara = otherGroup.querySelector('.faq-group-para');
                const otherIcon = otherGroup.querySelector('i');

                otherGroupPara.classList.remove('open');
                otherIcon.classList.remove('uil-times');
                otherIcon.classList.add('uil-plus');
                
            }
        })

    })

})


//HamBurger Menu 

document.addEventListener('DOMContentLoaded',()=>{
    const hamburgerBtn = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.close-menu-btn');

    hamburgerBtn.addEventListener('click',()=>{
        console.log('clicked');
        mobileMenu.classList.toggle('active');
        console.log('executed');
    })

    menuCloseBtn.addEventListener('click',()=>{

        mobileMenu.classList.remove('active');
    })

    
})


// document.addEventListener('DOMContentLoaded',()=>{

//     const loginBtn = document.querySelector('.login-btn');
//     const loginBox = document.querySelector('.login-box');
//     const loginCloseBtn = document.querySelector('.close-login-btn');

//     loginBtn.addEventListener('click',()=>{
//         loginBox.classList.add('active');
//     })

//     loginCloseBtn.addEventListener(('click',()=>{
//         loginBox.classList.remove('active');
//     }))



// })

const cards = document.querySelectorAll('.animate')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            
            entry.target.classList.add('scroll-animation');
            // observer.unobserve(entry);
        }
    },{threshold:1.0})
})

cards.forEach((card)=> {observer.observe(card)})

