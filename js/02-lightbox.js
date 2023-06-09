"use strict";

// 1. creare mark-up
// 2. initializare librarie

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

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
