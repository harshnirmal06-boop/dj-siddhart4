/* ================= MOBILE MENU ================= */

function toggleMenu(){

    const menu = document.getElementById("navMenu");

    if(menu){
        menu.classList.toggle("show");
    }

}


/* ================= CLOSE MENU AFTER CLICK ================= */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        const menu = document.getElementById("navMenu");

        if(menu){
            menu.classList.remove("show");
        }

    });

});


/* ================= BOOKING FORM ================= */

function submitBooking(event){

    event.preventDefault();

    const form = event.target;

    const name = form.querySelector('input[type="text"]').value;

    alert(
        "Thank you " + name +
        "!\n\nYour booking request has been received."
    );

    form.reset();

}


/* ================= SIMPLE SCROLL EFFECT ================= */

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 80){

        navbar.style.background = "rgba(5,5,5,.92)";

    }else{

        navbar.style.background = "rgba(5,5,5,.7)";

    }

});