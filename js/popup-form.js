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


