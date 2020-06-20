let mapsLink = document.querySelector(".maps-link");
let popupMap = document.querySelector(".maps-popup");
let buttonClose = popupMap.querySelector(".button-close");


mapsLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  popupMap.classList.add("maps-popup-show");
});

buttonClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("maps-popup-show");
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(popupMap.classList.contains("maps-popup-show")) {
     evt.preventDefault(); 
      popupMap.classList.remove("maps-popup-show");
    }
  }
});