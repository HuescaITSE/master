const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const dropdownBtn = document.getElementById("dropdownBtn");

/* MENU RESPONSIVE */

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* DROPDOWN MOBILE */

dropdownBtn.addEventListener("click", () => {

    if(window.innerWidth <= 950){

        dropdownBtn.classList.toggle("active");

    }

});

/* SCROLL SUAVE */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        menu.classList.remove("active");

    });

});

/* ANIMACION DE TARJETAS */

const sections = document.querySelectorAll('.info-section');

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

});

window.addEventListener('scroll', () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});


const docenteImgs =
document.querySelectorAll(".docente-img");

const modal =
document.getElementById("modal");

const modalImg =
document.getElementById("modalImg");

const modalTitle =
document.getElementById("modalTitle");

const modalText =
document.getElementById("modalText");

const closeModal =
document.getElementById("closeModal");

/* OPEN */

docenteImgs.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";

        modalImg.src =
        img.dataset.image;

        modalTitle.textContent =
        img.dataset.name;

        modalText.textContent =
        img.dataset.info;

    });

});

/* CLOSE */

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

/* CLICK OUTSIDE */

window.addEventListener("click", e => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});