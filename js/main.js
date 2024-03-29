const btnDarkMode = document.querySelector(".dark-mode-btn");

// dark mode check from localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// dark mode
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}

function openPDFCV() {
    // Assuming your PDF CV is located at './path/to/your/cv.pdf'
    var pdfPath = './Evgeny Bogdanov CV frontend.pdf';

    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
}