import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const body = document.querySelector("body");

gallery.insertAdjacentHTML(
  "afterbegin",
  galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"/>
          </a>
        </div>`
    )
    .join("")
);

gallery.addEventListener("click", onSelectedImage);

function onSelectedImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  document.addEventListener("keydown", onEscapeToCloseModal);

  function onEscapeToCloseModal(event) {
    if (event.key === "Escape") instance.close();
    

    // document.removeEventListener("keydown", onEscapeToCloseModal);
  }
  const imageLink = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src ="${imageLink}">`);
  instance.show();
}

// Выполняй это задание в файлах
// 01-gallery.html и 01-gallery.js.
// Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных
// galleryItems и предоставленному шаблону элемента
// галереи.
// Реализация делегирования на div.gallery и
//  получение url большого изображения.
// Подключение скрипта и стилей библиотеки
//  модального окна basicLightbox.
//   Используй CDN сервис jsdelivr и добавь в проект
//    ссылки на минифицированные (.min)
//    файлы библиотеки.
// Открытие модального окна по клику на элементе
// галереи. Для этого ознакомься с документацией
// и примерами.
// Замена значения атрибута src элемента <img>
// в модальном окне перед открытием. Используй
// готовую разметку модального окна с изображением
// из примеров библиотеки basicLightbox.

// Ссылка на оригинальное изображение должна
// храниться в data-атрибуте source на элементе
// <img>, и указываться в href ссылки.
//  Не добавляй другие HTML теги или CSS классы
//  кроме тех, что есть в этом шаблоне.
