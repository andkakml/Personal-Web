
// GREENLINE // Personal Website

// 1. Jam dan tanggal otomatis pada topbar
function updateClock() {
    const clockElement = document.querySelector(".topbar-time");

    if (clockElement) {
        const now = new Date();

        const time = now.toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        const date = now.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        clockElement.textContent = time + " // " + date;
    }
}

updateClock();
setInterval(updateClock, 1000);


// 2. Tombol kembali ke atas
const backToTop = document.createElement("button");

backToTop.textContent = "↑ TOP";
backToTop.type = "button";
backToTop.setAttribute("aria-label", "Kembali ke atas");

document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.right = "20px";
backToTop.style.bottom = "20px";
backToTop.style.padding = "10px 14px";
backToTop.style.border = "1px solid #39ff70";
backToTop.style.background = "#031008";
backToTop.style.color = "#39ff70";
backToTop.style.fontFamily = "monospace";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "10";

window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 3. Zoom gambar ketika diklik
const previewImages = document.querySelectorAll(".project-image");

previewImages.forEach(function (image) {
    image.style.cursor = "zoom-in";
    image.style.transition = "transform 0.25s ease";

    image.addEventListener("click", function () {
        if (image.classList.contains("zoomed")) {
            image.classList.remove("zoomed");
            image.style.transform = "scale(1)";
            image.style.position = "relative";
            image.style.zIndex = "1";
        } else {
            image.classList.add("zoomed");
            image.style.transform = "scale(1.15)";
            image.style.position = "relative";
            image.style.zIndex = "8";
        }
    });
});
