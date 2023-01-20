//BurgerMenu

const burger = document.getElementsByClassName("hamburger")[0];
const navigateBurger = document.getElementsByClassName(
  "container-link-navigate"
)[0];
const overlay = document.getElementsByClassName("overlay")[0];
const body = document.body;

const burgerMenuItem = [burger, navigateBurger, overlay];

const createBurgerMenu = () => {
  burger.classList.toggle("active");
  navigateBurger.classList.toggle("active");
  body.classList.toggle("lock");
};

burgerMenuItem.forEach((el) => el.addEventListener("click", createBurgerMenu));

//Choose service section

const serviceButtonContainer = document.getElementsByClassName(
  "services-buttons-container"
)[0];
const serviceButtons = ["Gardens", "Lawn", "Planting"];

serviceButtons.forEach((btn) => {
  const button = document.createElement("button");
  button.classList.add("button");
  button.classList.add("button_service");
  button.value = btn;
  button.innerHTML = btn;
  serviceButtonContainer.append(button);
});

const mediaSize = "(max-width: 768px) 260px";
const description = "Lorem Ipsum has been the industry";

const projects = [
  {
    id: 1,
    img: {
      srcset:
        "./assets/images/first.png    1220w, ./assets/images/first768.png  768w",
      sizes: mediaSize,
      src: "./assets/images/first.png",
      alt: "garden care",
    },
    text: "Garden care",
    description: description,
  },
  {
    id: 2,
    img: {
      srcset:
        "./assets/images/first-2.png     1220w, ./assets/images/first-2-768.png  768w",
      sizes: mediaSize,
      src: "./assets/images/first-2.png",
      alt: "Planting",
    },
    text: "Planting",
    description: description,
  },
  {
    id: 3,
    img: {
      srcset:
        "./assets/images/first-3.png     1220w, ./assets/images/first-3-768.png  768w",
      sizes: mediaSize,
      src: "./assets/images/first-3.png",
      alt: "Lawn care",
    },
    text: "Lawn care",
    description: description,
  },
  {
    id: 4,
    img: {
      srcset:
        "./assets/images/first-4.png     1220w, ./assets/images/first-4-768.png  768w",
      sizes: mediaSize,
      src: "./assets/images/first-4.png",
      alt: "Planting",
    },
    text: "Planting",
    description: description,
  },
  {
    id: 5,
    img: {
      srcset:
        "./assets/images/first-5.png     1220w, ./assets/images/first-5-768.png  768w",
      sizes: mediaSize,
      src: "./assets/images/first-5.png",
      alt: "Garden care",
    },
    text: "Garden care",
    description: description,
  },
  {
    id: 6,
    img: {
      srcset:
        "./assets/images/first-6.png     1220w, ./assets/images/first-6-768.png  768w",
      sizes: mediaSize,
      src: "./assets/images/first-6.png",
      alt: "Planting",
    },
    text: "Planting",
    description: description,
  },
];

const serviceItemContainer = document.getElementsByClassName(
  "services-item-container"
)[0];

let checkedProjects = [];

const drawProjectsCards = (projectsArray) => {
  serviceItemContainer.innerHTML = "";
  return projects.forEach((project) => {
    const item = document.createElement("div");
    item.classList.add("service-item");
    item.classList.add("blur");

    if (projectsArray.length) {
      projectsArray.forEach((el) => {
        if (
          project.text.toLowerCase().includes(el) ||
          (project.text.split(" ")[0] + "s").toLowerCase().includes(el)
        ) {
          item.classList.remove("blur");
        }
      });
    }

    item.innerHTML = `<img
    srcset=${project.img.srcset}
    sizes=${project.img.sizes}
    src=${project.img.src}
    alt=${project.img.alt}
  />
  <div class="service-item__text">
    <p class="service-item__text_subtitle">${project.text}</p>
    <p class="service-item__text_desc">
      ${project.description}
    </p>
  </div>`;
    serviceItemContainer.append(item);
  });
};

drawProjectsCards(checkedProjects);

serviceButtonContainer.addEventListener("click", (e) => {
  const item = e.target.value.toLowerCase();
  if (checkedProjects.includes(item)) {
    checkedProjects = checkedProjects.filter((el) => el != item);
    e.target.classList.toggle("button_checked");
  } else {
    if (checkedProjects.length < 2) {
      checkedProjects.push(item);
      e.target.classList.toggle("button_checked");
    }
  }
  drawProjectsCards(checkedProjects);
});

//Prices accordion

const priceDescription =
  "Release of Letraset sheets containing Lorem Ipsum passages, and more recently";
const imagePath = "./assets/images/arrow.svg";
const dataPrices = [
  {
    type: "Basics",
    price: "$15",
  },
  {
    type: "Standard",
    price: "$25",
  },
  {
    type: "Pro care",
    price: "$35",
  },
];

const pricesItemContainer = document.getElementsByClassName(
  "prices-item-container"
)[0];

const drawPricesCard = (item) => {
  const container = document.createElement("div");
  container.classList.add("accordion-container");
  const pricesItem = document.createElement("div");
  pricesItem.classList.add("prices-item");
  const title = document.createElement("p");
  title.classList.add("prices-item-title");
  title.innerHTML = `${item.type}`;
  pricesItem.append(title);
  const arrowButton = document.createElement("button");
  arrowButton.classList.add("button-prices-item");
  arrowButton.value = `${item.type}`;
  const img = document.createElement("img");
  img.setAttribute("src", `${imagePath}`);
  arrowButton.append(img);
  pricesItem.append(arrowButton);
  container.append(pricesItem);
  const bottomAccordion = document.createElement("div");
  bottomAccordion.classList.add("accordion-bottom");
  bottomAccordion.classList.add("hidden");
  bottomAccordion.innerHTML = `<p>
${priceDescription}
</p>
<div>
 <span>${item.price}</span>
 <span>/per hour</span>
</div>
<button><a href="#contacts" title="Contacts">Order</a></button>`;
  container.append(bottomAccordion);
  arrowButton.addEventListener("click", (e) => {
    bottomAccordion.classList.toggle("hidden");
    container.classList.toggle("opened");
  });

  return container;
};

const drawPricesCards = () => {
  dataPrices.forEach((el) => {
    pricesItemContainer.append(drawPricesCard(el));
  });
};
drawPricesCards();

//contact selector

const dataCity = [
  {
    city: "Canandaigua, NY",
    phone: "+1	585	393 0001",
    address: "151 Charlotte Street",
  },
  {
    city: "New York City",
    phone: "+1	212	456 0002",
    address: "9 East 91st Street",
  },
  {
    city: "Yonkers, NY",
    phone: "+1	914	678 0003",
    address: "511 Warburton Ave",
  },
  {
    city: "Sherrill, NY",
    phone: "+1	315	908 0004",
    address: "14 WEST Noyes BLVD",
  },
];

const contactsButton = document.getElementsByClassName("button-contact")[0];
const contactsAccordion =
  document.getElementsByClassName("accordion-contacts")[0];
const selectCity = document.getElementsByClassName("select-city")[0];
const currentCity = document.getElementById("current-city");
const addressCard = document.getElementsByClassName(
  "address-card-container"
)[0];

const toggleAccordion = () => {
  contactsAccordion.classList.toggle("hidden");
  selectCity.classList.toggle("select-city_shadow");
  contactsButton.classList.toggle("opened-city");
};

contactsButton.addEventListener("click", toggleAccordion);

const createCity = (item) => {
  const city = document.createElement("p");
  city.innerHTML = `${item.city}`;

  city.addEventListener("click", () => {
    toggleAccordion();
    currentCity.innerHTML = `${item.city}`;
    addressCard.innerHTML = "";
    addressCard.append(createAddressCard(item));
    addressCard.classList.remove("hidden");
  });

  return city;
};

dataCity.forEach((el) => contactsAccordion.append(createCity(el)));

const createRow = (name, value) => {
  const container = document.createElement("div");
  const nameContainer = document.createElement("p");
  nameContainer.innerHTML = `${name}`;
  container.append(nameContainer);
  const valueContainer = document.createElement("p");
  valueContainer.innerHTML = `${value}`;
  container.append(valueContainer);
  return container;
};

const createAddressCard = (item) => {
  const container = document.createElement("div");
  container.classList.add("address-card");
  container.append(createRow("City:", item.city));
  container.append(createRow("Phone:", item.phone));
  container.append(createRow("Office address:", item.address));
  const buttonContainer = document.createElement("div");
  const button = document.createElement("button");
  button.innerHTML = "Call us";
  buttonContainer.append(button);
  container.append(buttonContainer);
  return container;
};
