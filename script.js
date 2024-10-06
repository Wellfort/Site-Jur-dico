/* Selecionando o botão e o menu */
const menuBtn = document.getElementById("menu-btn");
const menuCollapse = document.getElementById("menu-collapse");

/* Adicionando evento de clique ao botão */
menuBtn.addEventListener("click", function() {
  /* Adicionando e removendo classes */
  menuBtn.classList.toggle("open");
  menuCollapse.classList.toggle("open");
});

/** teste dropdown */

// Adicione este código JavaScript para alternar a classe "open" no clique do botão

document.querySelector('.dropdown-button').addEventListener('click', function() {
  document.querySelector('.dropdown').classList.toggle('open');
});



