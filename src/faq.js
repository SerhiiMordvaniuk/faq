import Accordion from 'accordion-js';



new Accordion('.accordion-container', {
  duration: 750,
  showMultiple: false,
    openOnInit: [0],
  onOpen: function(currentElement) {
    },
  
});


const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
  const theme = document.querySelector(".tututu");
  
  if (theme.getAttribute("href") === "/css/light-styles.css") {
    darkTheme()
  }
  else {
    lightTheme()
  }
}
)

function darkTheme() {
  theme.href = "/css/dark.css";
}

function lightTheme() {
  theme.href = "/css/light-styles.css";
}

document.addEventListener("", () => {
  
})