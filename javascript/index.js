document.addEventListener("DOMContentLoaded", function () {
  let totalBalance = 100000;
  const donationTab = document.getElementById("donationTab");
  const historyTab = document.getElementById("historyTab");
  const donationSection = document.getElementById("donationSection");
  const historySection = document.getElementById("historySection");
  const totalBalanceDisplay = document.getElementById("totalBalance");
  const historyList = document.getElementById("historyList");
  const successModal = document.getElementById("successModal");
  const closeModal = document.getElementById("closeModal");

  // Toggle Donation and History
  donationTab.addEventListener("click", function () {
    toggleTab(donationTab, historyTab, donationSection, historySection);
  });

  historyTab.addEventListener("click", function () {
    toggleTab(historyTab, donationTab, historySection, donationSection);
  });

  // Close the success modal
  closeModal.addEventListener("click", function () {
    successModal.classList.add("hidden");
  });

  // Reusable function of toggle buttons
  function toggleTab(activeTab, inactiveTab, showSection, hideSection) {
    activeTab.classList.add("bg-green-500", "text-white");
    activeTab.classList.remove("bg-white", "text-gray-700", "border");
    inactiveTab.classList.remove("bg-green-500", "text-white");
    inactiveTab.classList.add("bg-white", "text-gray-700", "border");
    showSection.classList.remove("hidden");
    hideSection.classList.add("hidden");
  }

  // Function to handle donation
  function donate(amount, cardAmountElement, donationName) {
    const donationAmount = parseFloat(amount);
    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }
    if (donationAmount > totalBalance) {
      alert("Insufficient balance.");
      return;
    }

    // Update balance and donation amount
    totalBalance -= donationAmount;
    totalBalanceDisplay.textContent = `${totalBalance} BDT`;
    const currentDonation = parseFloat(cardAmountElement.textContent);
    cardAmountElement.textContent = `${currentDonation + donationAmount} BDT`;

    // Add to history
    const date = new Date(Date.now()).toString(); // Full date string
    const historyItem = document.createElement("p");
    historyItem.className = "bg-white p-3 py-8 shadow rounded-md";
    historyItem.innerHTML = `<strong>${donationAmount} Taka is Donated for ${donationName}</strong> <br> <span class="donation-date">Date: ${date}</span>`;
    historyList.insertBefore(historyItem, historyList.firstChild);

    // Show success modal
    successModal.classList.remove("hidden");
  }

  // Attach event listeners for the "Donate Now" buttons
  const buttons = document.querySelectorAll(".donate-button");
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const card = button.closest(".donation-card");
    const inputField = card.querySelector(".donation-input");
    const cardAmountElement = card.querySelector(".donation-amount");
    const donationName = card.querySelector(".donation-title").textContent;

    button.addEventListener("click", function () {
      donate(inputField.value, cardAmountElement, donationName);
    });
  }
});
