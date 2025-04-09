// scripts.js
// Dynamic Greeting
const greetingElement = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) {
    greetingElement.textContent = "Good Morning!";
} else if (hour < 18) {
    greetingElement.textContent = "Good Afternoon!";
} else {
    greetingElement.textContent = "Good Evening!";
}

// Form Validation
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Form submitted successfully!");
    }
});

// Theme Toggle
const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", document.body.className);
};

// Portfolio Filter
const portfolioItems = [
    { id: 1, title: "Web Project", category: "web" },
    { id: 2, title: "Data Analysis", category: "data" },
    { id: 3, title: "AI Model", category: "ai" },
];

const portfolioContainer = document.getElementById("portfolio-items");
const portfolioFilterButtons = document.querySelectorAll("#portfolio-filter button");

const renderPortfolio = (category) => {
    portfolioContainer.innerHTML = portfolioItems
        .filter(item => category === "all" || item.category === category)
        .map(item => `<div>${item.title}</div>`)
        .join("");
};

portfolioFilterButtons.forEach(button => {
    button.addEventListener("click", () => {
        renderPortfolio(button.dataset.category);
    });
});

renderPortfolio("all");

// Blog Manager
const blogPosts = [
    { id: 1, title: "First Post", content: "This is the first blog post." },
    { id: 2, title: "Second Post", content: "This is the second blog post." },
];

const blogContainer = document.getElementById("blog-list");
blogContainer.innerHTML = blogPosts
    .map(post => `<article><h3>${post.title}</h3><p>${post.content}</p></article>`)
    .join("");
