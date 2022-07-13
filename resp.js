burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')

navList= document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    rightNav.classlist.toogle('v-class-resp');

    navList.classlist.toogle('v-class-resp');
    
    navbar.classlist.toogle('h-nav-resp');
})