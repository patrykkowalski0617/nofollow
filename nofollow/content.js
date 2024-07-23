/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
window.addEventListener("keypress", (e) => {
  if (e.code === "KeyQ" && e.ctrlKey) {
    const aElements = document.querySelectorAll("a");
    aElements.forEach((aElement) => {
      if (aElement.rel === "nofollow") {
        aElement.style.outline = "2px solid red";
      }
    });
  }
});

/******/ })()
;
//# sourceMappingURL=content.js.map