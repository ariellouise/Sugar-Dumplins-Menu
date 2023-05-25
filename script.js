// create an array of menu with its items
const menu = [
  {
    id: 1,
    title: "Birthday Cake Cookie",
    category: "Cookies",
    price: 15,
    img: "./images/birthday-cake-cookie.png",
    desc: "I am a birthday cake cookie. nothing can rain on this parade. Sweet, sugary goodness. Fuck yes.",
  },
  {
    id: 2,
    title: "Chocolate Chip Cookie",
    category: "Cookies",
    price: 15,
    img: "./images/chocolate-chip-cookie.png",
    desc: "I am a chocolate chip cookie. nothing can rain on this parade. Sweet, chocolatey goodness. Fuck yes.",
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    console.log(item);
    return `<h1>${item.title}</h1>`;
  });
  console.log(displayMenu);
});
