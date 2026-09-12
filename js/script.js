// =========================
// SCROLL ANIMATION
// =========================

const scrollItems = document.querySelectorAll(
    ".packages-section .package-card, " +
    ".why-choose-section .why-content, " +
    ".why-choose-section .why-image, " +
    ".destinations-section .destination-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

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


scrollItems.forEach((item) => {

    item.classList.add("scroll-item");

    observer.observe(item);

});





// =========================
// GALLERY BUTTON
// SCROLL TO TOP
// =========================

const galleryTopBtn = document.getElementById("galleryTopBtn");

galleryTopBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});




// =========================
// BACK TO TOP
// =========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});