import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallerySet = document.querySelector('.gallery');
gallerySet.addEventListener('click', event);

function renderGallery() {
    const markUpGallerry = items
        .map(
            item =>
                `<a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>`,
        )
        .join('');
    gallerySet.insertAdjacentHTML('beforeend', markUpGallerry);
}
var lightbox = new SimpleLightbox('.gallery a', {
    captionType: `alt`,
    captionDelay: 250,
});
