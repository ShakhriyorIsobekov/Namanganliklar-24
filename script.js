const elModal = document.querySelector(".modal");
const modalOpener = document.querySelector(".main__ad-btn");

modalOpener.addEventListener("click", function() {
   elModal.classList.add("modal__open");
})

const modalCloser = document.querySelector(".main__modal-close-btn");

modalCloser.addEventListener("click", function() {
   elModal.classList.remove("modal__open");
})