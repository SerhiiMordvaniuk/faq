import Accordion from 'accordion-js';



new Accordion('.accordion-container', {
  duration: 750,
    showMultiple: false,
  onOpen: function(currentElement) {
    console.log(currentElement);
    },
  
});