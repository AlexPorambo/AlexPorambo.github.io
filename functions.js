// ============================================
// NAVIGATION
// ============================================

function openNav() {

    const nav = document.getElementById("mySidenav");

    if (window.innerWidth <= 650) {
        nav.style.width = "100%";
    } else {
        nav.style.width = "500px";
    }

}


function closeNav() {

    document.getElementById("mySidenav").style.width = "0";

}


// Close navigation with Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeNav();
    }

});


// ============================================
// HERO ORB MOUSE MOVEMENT
// ============================================

document.addEventListener("mousemove", function(event) {

    const orb = document.querySelector(".orb-wrapper");

    if (!orb) {
        return;
    }

    const x =
        (event.clientX / window.innerWidth - 0.5) * 12;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 12;

    orb.style.marginLeft = x + "px";
    orb.style.marginTop = y + "px";

});


// ============================================
// PROJECT CARD MOUSE EFFECT
// ============================================

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(function(card) {

    card.addEventListener("mousemove", function(event) {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        card.style.setProperty(
            "--mouse-x",
            x + "px"
        );

        card.style.setProperty(
            "--mouse-y",
            y + "px"
        );

    });

});