let header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
});

// function showSidebar() {
//     console.log("test");
//     let sidebar = document.querySelector(".navlist");
//     let navBtn = document.querySelector(".bx-menu");
//     // navBtn.classList.add('bx-x')
//     navBtn.classList.add("bx-x")
//     sidebar.style.display = 'flex';
//     // sidebar.classList.add('active')
// }


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}


window.onscroll = () => {
    // let navBtn = document.querySelector(".bx-menu")
    // let sidebar = document.querySelector(".navlist")
    // navBtn.classList.remove('bx-x');
    // sidebar.classList.remove('active');
    // sidebar.style.display = 'none'
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};