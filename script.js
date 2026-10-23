
/* Display the current year in the footer */
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* Highlight the navigation link for the visible section */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === "#" + entry.target.id
                );
            });
        }
    });
}, {
    threshold: 0.35
});

sections.forEach((section) => {
    observer.observe(section);
});

/* Show a small message when the Know More button is clicked */
const knowMoreButton = document.querySelector(".btn");

if (knowMoreButton) {
    knowMoreButton.addEventListener("click", function () {
        console.log("Welcome to Jeeva's portfolio!");
    });
}
