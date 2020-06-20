// Код popup Товар добавлен в корзину 

let buy = document.querySelectorAll(".buy-tool");
let productAddedCart = document.querySelector(".notice-item-added-to-cart");
let buttonClose = productAddedCart.querySelector(".button-close");


for(let i = 0; i < buy.length; i++) {
  let buyClick = buy[i];
    buyClick.addEventListener("click", function(evt) {
      evt.preventDefault();
      productAddedCart.classList.add("notice-item-added-to-cart-show");
    });
  }

buttonClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  productAddedCart.classList.remove("notice-item-added-to-cart-show");
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(productAddedCart.classList.contains("notice-item-added-to-cart-show")) {
     evt.preventDefault(); 
      productAddedCart.classList.remove("notice-item-added-to-cart-show");
    }
  }
});
//Код popup form

/*ищем подходящий селектор во всем документе*/

let buttonOpenForm = document.querySelector(".open-form-feedback"); 
let popupForm = document.querySelector(".popup-form");

/*ищем подходящий селектор в форме*/

let popupClose = popupForm.querySelector(".button-close"); 
let formFeedback = popupForm.querySelector('.form-feedback');
let nameField = popupForm.querySelector(".name-field");
let emailField = popupForm.querySelector(".email-field");

/*Не все браузеры поддерживают localStorage поэтому проверим работоспособность.*/

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

/*Обработчик событй для отображения формы */

  buttonOpenForm.addEventListener("click", (evt) => {

 /*Стандартное действие по умолчанию у ссылки переход на другую страницу. 
 Такое поведение нам не нужно, поэтому отключим его.*/   

    evt.preventDefault(); 
    popupForm.classList.add("popup-form-show");
    if(storage) {
      nameField.value = storage;
      emailField.focus();
     } else {

    /*Установим фокус при открытии модального окна в поле ввода логина. */

      nameField.focus(); 
    }
  });
  
  /*Обработчик событий для закрытия формы*/

  popupClose.addEventListener("click", (evt) => {
    evt.preventDefault();
    popupForm.classList.remove("popup-form-show");
    popupForm.classList.remove("popup-form-error");
  });

  /*Повесим обработчик отправки данных на форму и отменим его. */

  formFeedback.addEventListener("submit", function(evt) {
    if(!nameField.value || !emailField.value) {
      evt.preventDefault();
      popupForm.classList.remove("popup-form-error");
      popupForm.offsetWidth = popupForm.offsetWidth;
      popupForm.classList.add("popup-form-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", nameField.value);
      }
    }
  });

  /*Добавим обработчик события, который будет отлавливать 
  нажатие кнопки Esc и в случае, если модальное окно открыто, закрывать его.*/

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupForm.classList.contains("popup-form-show")) {
        evt.preventDefault();
        popupForm.classList.remove("popup-form-show");
        popupForm.classList.remove("popup-form-error");
      }
    }
  });


// Popup Map

let mapsLink = document.querySelector(".maps-link");
let popupMap = document.querySelector(".maps-popup");
let buttonCloseMap = popupMap.querySelector(".button-close");


mapsLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  popupMap.classList.add("maps-popup-show");
});

buttonCloseMap.addEventListener("click", function(evt) {
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





