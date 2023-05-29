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

function downloadCV() {
    alert('CV not ready at the moment :) ...'); // Display the alert message
    var link = document.createElement('a');
    // link.href = './test cv.txt'; // Replace with the path to your CV file
    // link.download = 'test cv.txt'; // Replace with the desired filename
    link.click();
  }