// Restaurant card click interaction
const cards = document.querySelectorAll(
    ".dhaka, .rajshahi, .naogaon, .sylet"
);

cards.forEach(card => {
    card.addEventListener("click", () => {
        alert("You selected: " + card.innerText);
    });
});

// Smooth hover effect enhancement (optional dynamic effect)
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

// Footer dynamic year
const footer = document.querySelector("footer");
footer.innerHTML = `© ${new Date().getFullYear()} | All Rights Reserved`;