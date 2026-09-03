/* =========================================================
   MENÚ MÓVIL
   ========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    const links = navLinks.querySelectorAll("a");

    const closeMenu = () => {
        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menú"
        );
    };

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

    });

    links.forEach((link) => {

        link.addEventListener("click", () => {
            closeMenu();
        });

    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

}


/* =========================================================
   ANIMACIONES AL HACER SCROLL
   ========================================================= */

const sections = document.querySelectorAll(".section");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (
    "IntersectionObserver" in window &&
    !prefersReducedMotion
) {

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

} else {

    sections.forEach((section) => {
        section.classList.add("visible");
    });

}


/* =========================================================
   CERRAR MENÚ AL CAMBIAR A ESCRITORIO
   ========================================================= */

window.addEventListener("resize", () => {

    if (
        window.innerWidth > 700 &&
        navLinks &&
        menuToggle
    ) {
        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Abrir menú"
        );
    }

});
