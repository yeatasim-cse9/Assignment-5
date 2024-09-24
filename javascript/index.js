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

// Global section

const donationTab = document.getElementById("donationTab");
const historyTab = document.getElementById("historyTab");
const donationSection = document.getElementById("donationSection");
const historySection = document.getElementById("historySection");

// Toggle section
function toggleTab(activeTab, inactiveTab, showSection, hideSection) {
  activeTab.classList.add("bg-green-500", "text-white");
  activeTab.classList.remove("bg-white", "text-gray-700", "border");
  inactiveTab.classList.remove("bg-green-500", "text-white");
  inactiveTab.classList.add("bg-white", "text-gray-700", "border");
  showSection.classList.remove("hidden");
  hideSection.classList.add("hidden");
}

// Toggle between Donation and History
donationTab.addEventListener("click", function () {
  toggleTab(donationTab, historyTab, donationSection, historySection);
});

historyTab.addEventListener("click", function () {
  toggleTab(historyTab, donationTab, historySection, donationSection);
});
