
// simple function to display nav in a fixed position when user reachs 550px from the top
scrollFunction = () => {
    const navElem = document.getElementById('nav').style;
    let windowWidth = window.innerWidth;
    if (document.body.scrollTop > 515 || document.documentElement.scrollTop > 515) {
        navElem.backgroundColor = 'rgba(255, 255, 255, 1)';
        navElem.color = 'rgba(34, 34, 34, 1)';
        navElem.position = 'fixed';
        navElem.margin = 0;
        navElem.borderBottom = '1px solid rgba(34, 34, 34, 1)';
    } else {
        navElem.backgroundColor = 'transparent';
        navElem.color = 'rgba(255, 255, 255, 1)';
        navElem.borderBottom = 'transparent';
        navElem.position = 'static';
    }

}
window.addEventListener('wheel', scrollFunction);

window.addEventListener('resize', function() {
    let windowWidth = window.innerWidth;
    if (windowWidth > 750) {
        document.getElementById('navItems').style.display='flex';
    } else {
        document.getElementById('navItems').style.display = 'none';
    }

})

const hamburger = () => {
    const navItems = document.getElementById('navItems');
    const hamburger = document.getElementById('hamburger');
    const navElem = document.getElementById('nav').style;
    let windowWidth = window.innerWidth;
    if (navItems.style.display === "" & windowWidth <= 750) {
        navItems.style.display = 'flex';
        hamburger.classList.add("fa-times");
        navElem.backgroundColor = 'rgba(255, 255, 255, 1)';
        navElem.color = 'rgba(34, 34, 34, 1)';
        navElem.position = 'fixed';
        navElem.margin = 0;
        navElem.borderBottom = '1px solid rgba(34, 34, 34, 1)';
    } else if (navItems.style.display === 'flex' & windowWidth <= 750) {
        navItems.style.display = 'none'
        hamburger.classList.remove("fa-times");
    } else {
        navItems.style.display = 'flex';
        hamburger.classList.add("fa-times");
        navElem.backgroundColor = 'rgba(255, 255, 255, 1)';
        navElem.color = 'rgba(34, 34, 34, 1)';
        navElem.position = 'fixed';
        navElem.margin = 0;
        navElem.borderBottom = '1px solid rgba(34, 34, 34, 1)';
    }
}


// google maps api code with a dark mode style
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.6795, lng: -79.411 },
        zoom: 11,
        disableDefaultUI: true,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            }
        ]

    });
}