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