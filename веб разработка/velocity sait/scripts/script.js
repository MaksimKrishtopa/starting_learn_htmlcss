//tabs

const tabsBtns = document.querySelectorAll(".tabs__nav button");

const tabsItems = document.querySelectorAll(".tabs__item");




// ф-я скрывает табы и убирает актив у кнопок

function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}


// ф-я показывает переданный номер кнопки(tab) и делает соответсвующую ему кнопоку активной. 

function showTab(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}


hideTabs();
showTab(0);


tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));


//Anchors
//При клике на ссылки и объекты плавно перемещается к этому объекту
const anchors = document.querySelectorAll(".header__nav a, .header__row a");

anchors.forEach(anc => {
    anc.addEventListener("click", function(event) {
        event.preventDefault();

        const id = anc.getAttribute("href"); //настройка пути к элементу
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 80, //чтобы прокручивалось не к самому началу блока
            behavior: 'smooth'  //плавная прокрутка
        });




    })
})
