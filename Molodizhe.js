// Отримуємо всі посилання з класом .scroll-link
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Плавно прокручуємо до елемента з id "footer"
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});