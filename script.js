const elModal = document.querySelector(".modal");
const modalOpener = document.querySelector(".main__ad-btn");

if(modalOpener) {

   modalOpener.addEventListener("click", function() {
      elModal.classList.add("modal__open");
   })
}

const modalCloser = document.querySelector(".main__modal-close-btn");
if(modalCloser) {
   modalCloser.addEventListener("click", function() {
      elModal.classList.remove("modal__open");
   })
}

// 4 soniyadan kein modal pageini ochib beradi

setTimeout(function() {
   elModal.classList.add("modal__open");
}, 400000);