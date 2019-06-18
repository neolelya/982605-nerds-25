var link = document.querySelector(".modal-link");
var popup =document.querySelector(".modal");
var close =popup.querySelector(".exit");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");


link.addEventListener("click",
  function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
  });

close.addEventListener("click",
  function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

ymaps.ready(function(){
  var map = new ymaps.Map(document.querySelector(".map"), {
    center: [59.938631, 30.323055],
    zoom: 17,
    controls: []
  });

  map.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
    iconLayout: 'default#image',
    iconImageHref: "img/map-marker.png",
    iconImageSize: [231, 190],
    iconImageOffset: [-50, -200]
  });

  map.geoObjects
    .add(myPlacemark);
});
