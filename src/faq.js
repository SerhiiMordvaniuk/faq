import Accordion from 'accordion-js';



new Accordion('.accordion-container', {
  duration: 750,
  showMultiple: false,
    openOnInit: [0],
  onOpen: function(currentElement) {
    },
  
});


const btn = document.querySelector(".btn");

const theme = document.querySelector("#theme");

btn.addEventListener("click", () => {
  
  if (theme.getAttribute("href") === "/css/light-styles.css") {
    theme.href = "/css/dark.css";
    localStorage.setItem("theme", "/css/dark-styles.css")
  }
  else {
    theme.href = "/css/light-styles.css"
    localStorage.setItem("theme", "/css/light-styles.css")

  }

}
)