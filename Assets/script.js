// Abre menu mobile
function ativaMenu() {
    const menu = document.querySelector('.links-menu');
    const icon = document.querySelector('.icone-mobile');
    menu.classList.toggle('ativo');
    icon.classList.toggle('ativo');
}

// Modal
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});