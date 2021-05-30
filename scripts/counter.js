$(document).ready(function () {
  $(document.querySelectorAll(".counter__number")).each(function () {
    var $bgobj = $(this); // создаем объект
    let bgobj = this;
    let MaxBlockValue = bgobj.outerText;
    let btnHeight =
      bgobj.getBoundingClientRect().bottom - bgobj.getBoundingClientRect().top;

    $(window).scroll(function () {
      let blockCoords = bgobj.getBoundingClientRect().top + pageYOffset;
      let screenCoords = $window.innerHeight() + $window.scrollTop();
      let maxCoord = blockCoords - btnHeight * 2 + $window.innerHeight();
      let minCoord = blockCoords + btnHeight / 2;

      if (screenCoords > minCoord && screenCoords < maxCoord) {
        maxCoord - minCoord;
        number =
          (MaxBlockValue / (maxCoord - minCoord)) * (screenCoords - minCoord);

        bgobj.innerText = Math.trunc(number);
      } else if (screenCoords < minCoord) {
        number = 0;

        bgobj.innerText = Math.trunc(number);
      } else if (screenCoords > maxCoord) {
        number = MaxBlockValue;
        bgobj.innerText = Math.trunc(number);
      }
    });
  });
});
