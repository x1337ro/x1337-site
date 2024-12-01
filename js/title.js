var i = 0;
var titleText = [
  "&#8205;",
  "x",
  "x1",
  "x13",
  "x133",
  "x1337",
  "x1337.",
  "x1337.r",
  "x1337.ro",
  "x1337.ro",
  "x1337.ro",
  "x1337.r",
  "x1337.",
  "x1337",
  "x133",
  "x13",
  "x1",
  "x",
];

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function () {
    loaded();
  });
} else if (document.attachEvent) {
  document.attachEvent("onreadystatechange", function () {
    loaded();
  });
}

function loaded() {
  setInterval(loop, 500);
}

function loop() {
  document.getElementsByTagName("title")[0].innerHTML =
    titleText[i++ % titleText.length];
}

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.onkeydown = function (e) {
  if (
    e.ctrlKey &&
    (e.keyCode === 67 ||
      e.keyCode === 86 ||
      e.keyCode === 85 ||
      e.keyCode === 83 ||
      e.keyCode === 117)
  ) {
    return false;
  } else {
    return true;
  }
};
