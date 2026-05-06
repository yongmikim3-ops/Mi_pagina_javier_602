Scrip

 function da_click (){
     let mensaje=document.getElementById("sobre_mi");
     mensaje.innerHTML ="🐾Cuida y proteje a los animales";
     mensaje.style.display = "black";

  setTimeout (() => {
     mensaje.style.opacity = "1";
     mensaje.style.transform = "transformateY/(0)";
   }, 50);
 }
 

function mostrar_mensaje (){
     let mensaje=document.getElementById("mensaje");
     mensaje.innerHTML ="🐾Los animales deben de tener una vida digna";
     mensaje.style.display = "black";

  setTimeout (() => {
     mensaje.style.opacity = "1";
     mensaje.style.transform = "transformateY/(0)";
  }, 50);
 }
 const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Guardar preferencia
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Cargar preferencia al iniciar
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});
