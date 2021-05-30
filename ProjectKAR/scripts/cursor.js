options = {
  cursorOuter: "circle-basic",
  hoverEffect: "pointer-overlay",
  hoverItemMove: true,
  defaultCursor: false,
  outerWidth: 30,
  outerHeight: 30,
};
magicMouse(options);

$(".bulb__image").click(function () {
  $("#magicPointer").css({
    backgroundColor: "var(--colorinv-cursor)",
    border: "1px solid var(--color-cursor)",
    transition: "background 0.2s, border 0.2s",
  });
});
$("html").mousedown(function () {
  $("#magicPointer").css({
    backgroundColor: "var(--colorinv-cursor)",
    border: "1px solid var(--color-cursor)",
    transition: "background 0s, border 0s",
  });
});
$("html").mouseup(function () {
  $("#magicPointer").css({
    backgroundColor: "var(--color-cursor)",
    border: "1px solid var(--colorinv-cursor)",
    transition: "background 0.2s, border 0.2s",
  });
});
