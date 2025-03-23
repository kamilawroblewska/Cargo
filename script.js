const sections = [{
    title: "This is our",
    special: "Main Header",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum libero velit, sit amet suscipit mauris elementum id. Praesent interdum a ante ut dapibus.",
    background: "assets/banner.png"
}, {
    title: "And this is a",
    special: "Second Header",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum libero velit, sit amet suscipit mauris elementum id. Praesent interdum a ante ut dapibus.",
    background: "assets/banner2.png"
}];

let currentIndex = 0;

function updateHeroSection() {
    let heroSection = document.getElementById("heroSection");
    let specialHeader = document.getElementById("heroSpecial");
    let heroTitle = document.getElementById("heroTitle");
    let heroText = document.getElementById("heroText");

    
    heroSection.style.opacity = "0";

    setTimeout(() => {
        
        heroTitle.textContent = sections[currentIndex].title;
        specialHeader.textContent = sections[currentIndex].special;
        heroText.textContent = sections[currentIndex].text;
        heroSection.style.backgroundImage = `url('${sections[currentIndex].background}')`;

        
        heroSection.style.opacity = "1";
    }, 500); 
}

document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % sections.length; // Loop forward
    updateHeroSection();
});


document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length; // Loop backward
    updateHeroSection();
});

const lastScrollY = 0;
window.addEventListener("scroll", function () {
    const header = document.getElementById('header');
    const navbar = document.querySelector(".navbar");
    const links = document.querySelectorAll(".navbar__links a");
    const logo = document.querySelector(".logo");

    if (window.scrollY >= 50) {
        navbar.classList.add("scrolled");
        links.forEach(link => link.classList.add("scrolled-link"));
        logo.classList.add("scrolled-logo");

    } else {
        navbar.classList.remove("scrolled");
        links.forEach(link => link.classList.remove("scrolled-link"));
        logo.classList.remove("scrolled-logo");

    }

    if (window.scrollY >= 1) {
        header.classList.add("scrolled-header");
    } else if (window.scrollY < 50) {
        header.classList.remove("scrolled-header");
    }

});

const dropdownButton = document.getElementById('dropdown-btn');
dropdownButton.addEventListener("click", function () {
    dropdownButton.classList.toggle("active");
});