const nav = document.querySelector ('#nav')
const navBtn = document.querySelector ('#nav_btn')
const navBtnImg = document.querySelector ('#nav_btn_img')

navBtn.onclick = () => {
    if (nav.classList.toggle('open'))
    {
        navBtnImg.src = "./image/icons/NAV-close.svg"
    } else {
        navBtnImg.src = "./image/icons/NAV-open.svg"
    }
}

AOS.init(
    
);