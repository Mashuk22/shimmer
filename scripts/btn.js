$(document).ready(function () {
  let conteiner = document.querySelector(".btn-conteiner ");
  let elem = $(".btn--block-sm ");

  let blockHeight =
    conteiner.getBoundingClientRect().bottom -
    conteiner.getBoundingClientRect().top;

  $(window).scroll(function () {
    blockHeight =
      conteiner.getBoundingClientRect().bottom -
      conteiner.getBoundingClientRect().top;
    let conteinerCoords = conteiner.getBoundingClientRect().top;
    if (conteinerCoords - $window.innerHeight() < 0) {
      elem.slideDown("", "swing");
    }

    if (conteinerCoords - $window.innerHeight() > 0) {
      elem.slideUp("fast", "swing");
    }
  });

  let form = $(".modal-container");
  $(".btn--secondary").click(() => {
    form.css({ opacity: "1", "z-index": "1000" });
    $("body").css({ overflow: "hidden" });
  });
  $(".modal__close").click(() => {
    form.css({ opacity: "0", "z-index": "-10" });
    $("body").css({ overflow: "visible" });
  });
});
