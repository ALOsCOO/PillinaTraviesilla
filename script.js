document.getElementById("btn_yes").addEventListener("click", () => {
  Swal.fire({
    title: "❤️ I <3 You ❤️",
    html: "<p>Deseo que seas muy feliz amor, tengo muchísimas ganas de ya por fin poder estar juntos. Te amo con locura 😍💕❤️</p>",
    icon: "info",
    confirmButtonText: "Ir a",
  }).then(() => {
    openUrl_zip(); // Llama la función
  });
});

function openUrl_zip() {
  window.open(
    "https://drive.usercontent.google.com/download?id=1gfSLvoVFsqpzYk1FnmhNDeC5cIj-d3WM&export=download",
    "_blank"
  );
}

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  setTimeout(() => {
    card.classList.add("hovered");
  }, 500); // Espera 0.5 segundos antes de aplicar la clase
});
