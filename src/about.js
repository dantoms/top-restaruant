export function about() {
  const content = document.querySelector("#content");
  const about = document.createElement("div");
  about.classList.add("card");
  about.classList.add("about");
  const contact = document.createElement("div");
  contact.classList.add("card");
  contact.classList.add("contact");

  // history
  const history = document.createElement("div");
  history.classList.add("history");
  const historyHeading = document.createElement("h2");
  historyHeading.textContent = "A Little History";
  history.append(historyHeading);
  const historyParagraph = document.createElement("p");
  historyParagraph.textContent =
    "Founded in 1952 by Kenneth (Kay) Miller, what began as a single service station operation grew into a global phenomenon through Kay’s tireless franchising efforts, proving that consistent, high-energy engineering could bring the perfect crunch to the masses. Decades later, we remain committed to that original pressure-fry method, serving the same mother-cluckin' recipe that turned a local roadside stop into a neon-lit legacy of innovation and flavor.";
  history.append(historyParagraph);

  // Contact
  const details = document.createElement("h2");
  details.textContent = "Get In Touch";
  contact.append(details);
  const detailsItems = document.createElement("p");
  detailsItems.textContent = `Dine with us:
12 Garrick Street, 
Covent Garden, 
London, 
WC2 9BH

Tel: 020 7242 5658
Email: contact@kayeffsee.com
Socials: @kayeffsee`;
  contact.append(detailsItems);

  about.append(history);
  content.append(about, contact);
}
