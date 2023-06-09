"use strict";

// 1. creare mark-up
// 2. eveniment la click care declanseaza o functie
// 3. functia declansata de click, daca dai click pe imagine se deschide modala, daca nu atunci nu se executa nimic.
// 4. inchidere modala cu escape

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryMarkUp = document.querySelector(".gallery");
const galleryItem = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<li class = "gallery__item">
        <a class="gallery__link" href="${original}">
            <img class = "gallery__image" 
            src = "${preview}" 
            data-source = "${original}" 
            alt = "${description}">
        </a>
    </li>`
  )
  .join("");

galleryMarkUp.insertAdjacentHTML("beforeend", galleryItem);

galleryMarkUp.addEventListener("click", eventOnClick);

function eventOnClick(event) {
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,

    {
      onShow: (instance) => {window.addEventListener("keydown", onEscKeyClose)},
      onClose: (instance) => {window.removeEventListener("keydown", onEscKeyClose)},
    }
  );

  instance.show();

  function onEscKeyClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
