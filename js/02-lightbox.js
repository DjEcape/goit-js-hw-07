import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "afterbegin",
  galleryItems
    .map(
      ({preview, original, description }) =>
        `<a class="gallery__item" href="${original}"> 
    <img class="gallery__image"
    src="${preview}"
    alt ="${description}"/>
    </a>`
    )
    .join("")
);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  close: false,
  showCounter: false,
  animationSpeed: 200,

});
