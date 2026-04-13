import theCluck from "./thecluck-transparent-small.png";
import familyFeast from "./familyfeast-transparent-small.png";
import cola from "./cola-transparent.png";
import beer from "./beer-transparent.png";
import fries from "./fries-transparent.png";

export function menu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const buckets = document.createElement("div");
  buckets.classList.add("buckets");
  const drinks = document.createElement("div");
  drinks.classList.add("drinks");
  const drinksAndFries = document.createElement("div");
  drinksAndFries.classList.add("drinks-and-fries");

  const items = [
    {
      section: "buckets",
      title: "The Cluck",
      description: "8 pcs",
      image: theCluck,
      imageAlt: "8 piece chicken bucket",
      price: "£15.00",
    },
    {
      section: "buckets",
      title: "Family Feast",
      description: "12 pcs",
      image: familyFeast,
      imageAlt: "12 piece chicken bucket",
      price: "£22.99",
    },
    {
      section: "drinks",
      title: "Kay's Cola",
      description: "Ahh, refreshing",
      image: cola,
      imageAlt: "cola drink",
      price: "£2.99",
    },
    {
      section: "drinks",
      title: "Kay's Beer",
      description: "A cold one",
      image: beer,
      imageAlt: "beer drink",
      price: "£3.99",
    },
  ];

  items.forEach((element) => {
    // Create cluck card
    const cluckCard = document.createElement("div");
    cluckCard.classList.add("card");

    const cluckH2 = document.createElement("h2");
    cluckH2.textContent = element.title;

    const cluckP = document.createElement("p");
    cluckP.textContent = element.description;

    const cluckImg = document.createElement("img");
    cluckImg.setAttribute("src", element.image);
    cluckImg.setAttribute("alt", element.imageAlt);

    const cluckH3 = document.createElement("h3");
    cluckH3.textContent = element.price;

    // Build card
    cluckCard.append(cluckH2, cluckP, cluckImg, cluckH3);
    // Append card to parent
    if (element.section === "buckets") {
      buckets.appendChild(cluckCard);
    } else if (element.section === "drinks") {
      drinks.appendChild(cluckCard);
    }
  });

  // The card for the fries is a little different
  // so we have to build it separately
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("fries");

  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", fries);
  cardImg.setAttribute("alt", "fries");

  const cardText = document.createElement("div");
  cardText.classList.add("card-text");

  const cardH2 = document.createElement("h2");
  cardH2.textContent = "Kay's Fries";

  const cardH3 = document.createElement("h3");
  cardH3.textContent = "£3.99";

  cardText.append(cardH2, cardH3);
  card.append(cardImg, cardText);

  // Append to content
  drinksAndFries.append(drinks, card);
  content.appendChild(buckets);
  content.appendChild(drinksAndFries);
}
