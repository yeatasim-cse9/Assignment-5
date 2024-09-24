document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const buttonTabs = document.querySelector(".button-tabs");

  const adjustButtonTabsPosition = function () {
    const headerHeight = header.offsetHeight;
    buttonTabs.style.top = `${headerHeight}px`;
  };
  adjustButtonTabsPosition();
  window.addEventListener("resize", adjustButtonTabsPosition);
});
