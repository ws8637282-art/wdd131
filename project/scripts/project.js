const cultureItems = [
    {
        name: "Family",
        description: "Family relationships and support are important parts of Samoan life."
    },
    {
        name: "Community",
        description: "Samoan communities value cooperation, service, and helping others."
    },
    {
        name: "Fa'a Samoa",
        description: "Fa'a Samoa represents the Samoan way of life and important cultural values."
    }
];

const culturalValues = [
    "Respect for family and elders",
    "Serving and helping others",
    "Working together as a community",
    "Preserving Samoan language and traditions",
    "Showing hospitality to others"
];

function displayCultureItems() {
    const container = document.querySelector("#culture-cards");

    if (!container) {
        return;
    }

    container.innerHTML = cultureItems.map((item) => `
        <article class="card">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        </article>
    `).join("");
}

function displayValues() {
    const container = document.querySelector("#values-list");

    if (!container) {
        return;
    }

    container.innerHTML = culturalValues.map((value) => `
        <div class="value-item">
            <p>${value}</p>
        </div>
    `).join("");
}

function setupMenu() {
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#main-nav");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");

        if (navigation.classList.contains("open")) {
            menuButton.textContent = "✕";
            menuButton.setAttribute("aria-label", "Close navigation menu");
        } else {
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-label", "Open navigation menu");
        }
    });
}

function setupFavoriteForm() {
    const form = document.querySelector("#favorite-form");
    const message = document.querySelector("#form-message");

    if (!form || !message) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const favorite = document.querySelector("#favorite").value;

        if (name === "" || favorite === "") {
            message.textContent = "Please complete all fields.";
            return;
        }

        const favoriteData = {
            name: name,
            favorite: favorite
        };

        localStorage.setItem(
            "favoriteCulture",
            JSON.stringify(favoriteData)
        );

        message.textContent = `Thank you, ${name}! Your favorite part of Samoan culture is ${favorite}.`;
        form.reset();
    });
}

function loadFavorite() {
    const message = document.querySelector("#form-message");

    if (!message) {
        return;
    }

    const savedFavorite = localStorage.getItem("favoriteCulture");

    if (savedFavorite) {
        const favoriteData = JSON.parse(savedFavorite);

        message.textContent = `Welcome back, ${favoriteData.name}! You previously selected ${favoriteData.favorite}.`;
    }
}

function setupValueButton() {
    const button = document.querySelector("#value-button");
    const display = document.querySelector("#value-display");

    if (!button || !display) {
        return;
    }

    button.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * culturalValues.length);

        display.textContent = `Cultural value: ${culturalValues[randomIndex]}`;
    });
}

displayCultureItems();
displayValues();
setupMenu();
setupFavoriteForm();
loadFavorite();
setupValueButton();
