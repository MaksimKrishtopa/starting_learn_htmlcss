const btnDarkMode = document.querySelector(".dark-mode");

// проверка темной темы в локал стораге
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode--active");
    document.body.classList.add("dark");
}


if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode--active");
    document.body.classList.add("dark");
}




// включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'light');
    }
    else {
        localStorage.setItem("darkMode", "dark");
    }
};



// не идельная темная тема