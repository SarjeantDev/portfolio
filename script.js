// simple hamburger function to display mobile menu
const navItems = document.getElementById('navItems');
const hamburgerIco = document.getElementById('hamburger');

navItems.addEventListener('mouseup', () => {    
    hamburgerIco.classList.remove("fa-times")
    navItems.style.display = 'none';
})

const hamburger = () => {
    if (hamburgerIco.classList.contains("fa-times")) {
        hamburgerIco.classList.remove("fa-times");
        navItems.style.display = 'none';
    } else {
        navItems.style.display = 'flex';
        hamburgerIco.classList.add("fa-times");
    }
}


function animatedText() {
    const typedTextSpan = document.querySelector('.emphasisHeader');
    const textArray = ['Front-End Developer', 'GIS Enthusiast', 'Canoe Tripper'];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 100;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay)
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 400);
        }
    }

    setTimeout(type, newTextDelay);
};

animatedText();


mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyamVhbnRkZXYiLCJhIjoiY2trb2NiN2dxMDFjaDJvcXNucTd3OWg2dCJ9.me_ws5SdIE5IEUMLXIcncg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-79.396, 43.7], // starting position
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker()
    .setLngLat([-79.396, 43.7])
    .addTo(map);
