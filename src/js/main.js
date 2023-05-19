import cardsData from "./data/cards_data.js";

window.onload = () => {
  // Set greeting
  const greetingEl = document.getElementById("home_greeting");
  greetingEl.textContent = getTimeBasedMessage();

  // Create portfolio cards
  const portfolioGridEl = document.getElementById("portfolio_grid");
  createPortfolioCards(cardsData, portfolioGridEl);
};

function getTimeBasedMessage() {
  let time = new Date();
  time = time.getHours();

  if (time >= 1 && time < 12) {
    return "Good morning";
  } else if (time >= 12 && time < 19) {
    return "Good afternoon";
  } else if (time >= 19) {
    return "Good evening";
  }
}

function createPortfolioCards(data, container) {
  data.forEach((card) => {
    const gridItemEl = document.createElement("div");
    const projectHeading = document.createElement("h3");
    const projectLink = document.createElement("a");
    const projectDescription = document.createElement("p");

    projectLink.textContent = card.name;
    projectLink.href = card.link;
    projectDescription.textContent = card.description;

    projectHeading.appendChild(projectLink);
    gridItemEl.appendChild(projectHeading);
    gridItemEl.appendChild(projectDescription);
    container.appendChild(gridItemEl);
  });
}
