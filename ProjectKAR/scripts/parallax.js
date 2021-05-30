//------------SCROLL-----------

$(document).ready(function () {
  $('[data-type="background"]').each(function () {
    var $bgobj = $(this); // создаем объект
    $window = $(window);
    $window.scroll(function () {
      var yPos = -(($window.scrollTop() * 4) / $bgobj.data("speed")); // вычисляем коэффициент
      // Присваиваем значение background-position
      var coords = yPos + "px";
      // Создаем эффект Parallax Scrolling
      $bgobj.css({ top: coords });
    });
  });

  $('[data-type="img"]').each(function () {
    var $bgobj = $(this); // создаем объект
    let bgobj = this;
    $window = $(window);
    $window.scroll(function () {
      let btnCoords = bgobj.getBoundingClientRect().top;
      let screenCoords = $window.innerHeight();
      if (btnCoords - screenCoords < 0) {
        var yPos = -(-btnCoords / $bgobj.data("speed")); // вычисляем коэффициент
        // Присваиваем значение background-position
        var coords = yPos + "px";
        // Создаем эффект Parallax Scrolling
        $bgobj.css({ top: coords });
      }
    });
  });

  $('[data-type="start-btn"]').each(function () {
    var $bgobj = $(this); // создаем объект
    let bgobj = this;
    let coords = 0;
    let btnHeight =
      bgobj.getBoundingClientRect().bottom - bgobj.getBoundingClientRect().top;
    let btnCoords = bgobj.getBoundingClientRect().top + pageYOffset;
    let screenCoords = $window.innerHeight();
    if (btnCoords - screenCoords > 0) {
      coords = 40;
      $bgobj.css({ "margin-left": coords + "%" });

      $(window).scroll(function () {
        btnCoords = bgobj.getBoundingClientRect().top + pageYOffset;
        screenCoords = $window.innerHeight() + $window.scrollTop();
        let maxCoord = btnCoords + btnHeight * 4;
        let minCoord = btnCoords + btnHeight * 0;

        if (screenCoords > minCoord && screenCoords < maxCoord) {
          maxCoord - minCoord;
          coords = (40 / (maxCoord - minCoord)) * (maxCoord - screenCoords);
          $bgobj.css({ "margin-left": coords + "%" });
        } else if (screenCoords > minCoord) {
          $bgobj.css({ "margin-left": 0 + "%" });
        }
      });
    }
  });
});

//------------MOUSE-----------

var description = document.querySelectorAll(".parallax-counter");
let input = document.querySelector(".l-quarter");
for (i of description) {
  var parallax = new Parallax(i, {
    relativeInput: true,
    clipRelativeInput: true,
  });
  parallax.invert(false, false);
}
