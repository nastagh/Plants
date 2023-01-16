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

serviceButtonContainer.addEventListener("click", (e) =>
  console.log(e.target.value)
);

const mediaSize = '(max-width: 768px) 260px';
const description = 'Lorem Ipsum has been the industry';

const projects = [
  {
    id: 1,
    img: {
      srcset:
        "/assets/images/first.png    1220w, /assets/images/first768.png  768w",
      sizes: mediaSize,
      src: "/assets/images/first.png",
      alt: "garden care",
    },
    text: 'Garden care',
    description: description,
  },
  {
    id: 2,
    img: {
      srcset:
        "/assets/images/first-2.png     1220w, /assets/images/first-2-768.png  768w",
      sizes: mediaSize,
      src: "/assets/images/first-2.png",
      alt: "Planting",
    },
    text: 'Planting',
    description: description,
  },
  {
    id: 3,
    img: {
      srcset:
        "/assets/images/first-3.png     1220w, /assets/images/first-3-768.png  768w",
      sizes: mediaSize,
      src: "/assets/images/first-3.png",
      alt: "Lawn care",
    },
    text: 'Lawn care',
    description: description
  },
  {
    id: 4,
    img: {
      srcset:
        "/assets/images/first-4.png     1220w, /assets/images/first-4-768.png  768w",
      sizes: mediaSize,
      src: "/assets/images/first-4.png",
      alt: "Planting",
    },
    text: 'Planting',
    description: description
  },
  {
    id: 5,
    img: {
      srcset:
        "/assets/images/first-5.png     1220w, /assets/images/first-5-768.png  768w",
      sizes: mediaSize,
      src: "/assets/images/first-5.png",
      alt: "Garden care",
    },
    text: 'Garden care',
    description: description
  },
  {
    id: 6,
    img: {
      srcset:
        "/assets/images/first-6.png     1220w, /assets/images/first-6-768.png  768w",
      sizes: mediaSize,
      src: "/assets/images/first-6.png",
      alt: "Planting",
    },
    text: 'Planting',
    description: description
  },
];


const serviceItemContainer = document.getElementsByClassName('services-item-container')[0];

projects.forEach(project => {
  const item = document.createElement('div');
  item.classList.add('service-item');
  item.classList.add('blur');
  const img = document.createElement('img');
  img.setAttribute('srcset', project.img.srcset);
  img.setAttribute('sizes', project.img.sizes);
  img.setAttribute('src', project.img.src);
  img.setAttribute('alt', project.img.alt);
  item.append(img);

  const itemText = document.createElement('div');
  itemText.classList.add('service-item__text');
  const subtitle = document.createElement('p');
  subtitle.classList.add('service-item__text_subtitle');
  subtitle.innerHTML=project.text;
  itemText.append(subtitle);

  const descr = document.createElement('p');
  descr.classList.add('service-item__text_desc');
  descr.innerHTML= project.description;
  itemText.append(descr);

  item.append(itemText);
  serviceItemContainer.append(item);
})