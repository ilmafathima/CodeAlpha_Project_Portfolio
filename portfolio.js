window.addEventListener('load', () => {
    const profileSection = document.querySelector('.profile-section');
    profileSection.classList.add('fade-in'); 
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");


window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});





