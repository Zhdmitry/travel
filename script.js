function checkScreen() {
  let screenWidth = screen.width;

  if (screenWidth <= 390) {
    let text = document.querySelectorAll(".stories-card-desc");
    text.forEach((element) => {
      element.innerText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.Lorem ipsum dolor sit a... ";
    });
    let dest1 = document.querySelector(".stories-img1");
    dest1.src = "./src/imgs/Rectangle15.jpg";
    let dest2 = document.querySelector(".stories-img2");
    dest2.src = "./src/imgs/Rectangle16.jpg";
    let dest3 = document.querySelector(".stories-img3");
    dest3.src = "./src/imgs/Rectangle27.jpg";
    let dest4 = document.querySelector(".stories-img4");
    dest4.src = "./src/imgs/Rectangle17.jpg";
  } else {
    let text = document.querySelectorAll(".stories-card-desc");
    text.forEach((element) => {
      element.innerText =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit... ";
    });
    let dest1 = document.querySelector(".stories-img1");
    dest1.src = "./src/imgs/Rectangle29.jpg";
    let dest2 = document.querySelector(".stories-img2");
    dest2.src = "./src/imgs/Rectangle30.jpg";
    let dest3 = document.querySelector(".stories-img3");
    dest3.src = "./src/imgs/Rectangle31.jpg";
    let dest4 = document.querySelector(".stories-img4");
    dest4.src = "./src/imgs/Rectangle32.jpg";
  }
}

setInterval(checkScreen, 1000)

let burger = document.querySelector(".burger-logo-img");

let burgerMenu = document.querySelector(".burger-menu");



burger.addEventListener('click', ()=>{
    burgerMenu.classList.add('burger-menu-active')
})


let burgerClose = document.querySelector('.burger-close')
burgerClose.addEventListener('click', ()=>{
    burgerMenu.classList.remove('burger-menu-active')
})

let burgerLinks = document.querySelectorAll('.burger-links')
burgerLinks.forEach(element => {
    element.addEventListener('click', ()=>{
        burgerMenu.classList.remove('burger-menu-active')
    })
});