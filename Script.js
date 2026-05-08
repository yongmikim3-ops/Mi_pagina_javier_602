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
   <script>
    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }
  </script>
