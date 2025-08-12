// ======== Ajuste automático de altura no textarea ========
const campo = document.getElementById("campo");

campo.addEventListener("input", () => {
    campo.style.height = "auto"; // reseta a altura
    campo.style.height = campo.scrollHeight + "px"; // ajusta conforme conteúdo
});

// ======== Envio para WhatsApp ========
document.getElementById("enviar").addEventListener("click", () => {
    const nome = document.getElementById("nome").value.trim();
    const mensagem = campo.value.trim();

    if (!nome || !mensagem) {
        alert("Por favor, preencha seu nome e mensagem antes de enviar.");
        return;
    }

    // Número no formato internacional
    const numero = "559293429329"; // seu número aqui

    // Mensagem codificada
    const texto = encodeURIComponent(`Nome: ${nome}\n\nMensagem: ${mensagem}`);

    // Abre via link oficial (funciona no PC e celular)
    window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
});

// accordion//
const btn = document.querySelector(".accordion-btn");
const content = document.querySelector(".accordion-content");

btn.addEventListener("click", () => {
  if (content.style.maxHeight) {
    content.style.maxHeight = null; // fecha
  } else {
    content.style.maxHeight = content.scrollHeight + "px"; // abre
  }
});

//cpnfig imgs//
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  // move o container para mostrar o slide atual
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// autoplay a cada 5 segundos
function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000);
}

// pausa o autoplay ao passar mouse
document.querySelector(".slider").addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

// retoma o autoplay ao tirar mouse
document.querySelector(".slider").addEventListener("mouseleave", () => {
  startSlideShow();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
});

nextBtn.addEventListener("click", () => {
  nextSlide();
});

// inicia mostrando o slide 0
showSlide(currentIndex);
startSlideShow();