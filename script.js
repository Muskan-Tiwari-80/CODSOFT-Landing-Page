/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close mobile menu after clicking a link */

const navItems = document.querySelectorAll(".nav-link, .nav-cta");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =========================================
   STICKY NAVBAR
========================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    document.querySelectorAll(".nav-link").forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ANIMATED COUNTERS
========================================= */

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const increment =
            Math.ceil(target / 80);


        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.textContent = target;

                return;

            }

            counter.textContent = current;

            requestAnimationFrame(updateCounter);

        };


        updateCounter();

    });

}


/* Start counters when stats section appears */

const statsSection =
    document.querySelector(".stats");


const statsObserver =
    new IntersectionObserver(

        entries => {

            if (entries[0].isIntersecting) {

                startCounters();

                statsObserver.disconnect();

            }

        },

        {
            threshold: 0.3
        }

    );


statsObserver.observe(statsSection);


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});