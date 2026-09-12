document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. كود الفلترة (خاص بصفحة الجاليري)
    // ==========================================
    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-section .gallery-item");

    if (filterBtns.length > 0 && galleryItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", function () {
                // إزالة كلاس active من كل الأزرار وإضافته للزر المختار
                filterBtns.forEach(b => b.classList.remove("active"));
                this.classList.add("active");

                // معرفة الفلتر المختار
                const filterValue = this.getAttribute("data-filter");

                // إظهار/إخفاء الصور حسب التصنيف
                galleryItems.forEach(item => {
                    if (filterValue === "all" || item.classList.contains(filterValue)) {
                        item.classList.remove("hide");
                    } else {
                        item.classList.add("hide");
                    }
                });
            });
        });
    }

    // ==========================================
    // 2. كود كروت الرحلات (خاص بصفحة Packages)
    // ==========================================
    const container = document.getElementById("packagesContainer");
    const priceToggle = document.getElementById("priceToggle");

    // قائمة بيانات الرحلات
    const packagesData = [
        {
            id: 1,
            title: "Maldives Tropical Escape",
            category: "honeymoon",
            duration: "5 Days / 4 Nights",
            rating: "4.9 (120)",
            singlePrice: "$899",
            groupPrice: "$2,499",
            badge: "Best Seller",
            image: "images/OIP (1).webp"
        },
        {
            id: 2,
            title: "Swiss Alps Adventure",
            category: "luxury",
            duration: "7 Days / 6 Nights",
            rating: "4.8 (95)",
            singlePrice: "$1,299",
            groupPrice: "$3,699",
            badge: "Popular",
            image: "images/OIP (2).webp"
        },
        {
            id: 3,
            title: "Bali Beach & Temple Tour",
            category: "honeymoon",
            duration: "6 Days / 5 Nights",
            rating: "4.7 (80)",
            singlePrice: "$750",
            groupPrice: "$2,100",
            badge: "Hot Deal",
            image: "images/OIP (3).webp"
        },
        {
            id: 4,
            title: "Paris & Rome Heritage",
            category: "luxury",
            duration: "8 Days / 7 Nights",
            rating: "4.9 (150)",
            singlePrice: "$1,500",
            groupPrice: "$4,200",
            badge: "Featured",
            image: "images/paris2.jpeg"
        }
    ];

    // طباعة كروت الرحلات في حالة وجود الحاوية فقط
    if (container) {
        let allCardsHTML = "";
        packagesData.forEach(pkg => {
            allCardsHTML += `
                <div class="col-lg-4 col-md-6">
                    <div class="card package-card h-100 border-0 shadow-sm">
                        <div class="card-img-wrapper position-relative">
                            <span class="glass-badge position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill">${pkg.badge}</span>
                            <img src="${pkg.image}" class="card-img-top" alt="${pkg.title}">
                        </div>
                        <div class="card-body p-4">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="text-muted small"><i class="bi bi-clock me-1"></i> ${pkg.duration}</span>
                                <div class="text-warning small"><i class="bi bi-star-fill"></i> ${pkg.rating}</div>
                            </div>
                            <h4 class="card-title fw-bold mb-3">${pkg.title}</h4>
                            <div class="package-features d-flex gap-3 mb-4 text-muted small">
                                <span><i class="bi bi-airplane text-success"></i> Flight</span>
                                <span><i class="bi bi-building text-success"></i> Hotel</span>
                                <span><i class="bi bi-cup-hot text-success"></i> Breakfast</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center pt-3 border-top">
                                <div>
                                    <small class="text-muted d-block">Starting from</small>
                                    <span class="fw-bold fs-4 text-success package-price" data-single="${pkg.singlePrice}" data-group="${pkg.groupPrice}">${pkg.singlePrice}</span>
                                </div>
                                <button class="btn btn-outline-success rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#detailsModal">View Plan</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = allCardsHTML;
    }

    // تبديل الأسعار بين Single و Group
    if (priceToggle) {
        priceToggle.addEventListener("change", function () {
            const priceElements = document.querySelectorAll(".package-price");
            priceElements.forEach(price => {
                if (priceToggle.checked) {
                    price.textContent = price.getAttribute("data-group");
                } else {
                    price.textContent = price.getAttribute("data-single");
                }
            });
        });
    }

});