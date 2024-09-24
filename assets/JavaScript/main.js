/*initialBalance*/
let initial = document.getElementById("initialBalance").innerText;
let initialBalance = parseFloat(initial);

/* User Action */
const historyContainer = donateSumbit("historyData");
const userUI = donateSumbit("userUI");

const uiButton = donateSumbit("uiBtn");
uiButton.addEventListener("click", () => {
  uiButton.classList.add("primary-bg");
  historyButton.classList.remove("primary-bg");
  userUI.classList.remove("hidden");
  historyContainer.classList.add("hidden");
});

const historyButton = donateSumbit("historyBtn");
historyButton.addEventListener("click", () => {
  historyButton.classList.add("primary-bg");
  uiButton.classList.remove("primary-bg");
  historyContainer.classList.remove("hidden");
  userUI.classList.add("hidden");
});

/* Donation Process Common Funtion */
function donationProcess(donetAmount, donatBalance, donetLocation, modalID) {
  let amount = getdonateAmount(donetAmount);
  let donateBalance = donatInitial(donatBalance);

  if (
    amount === "" ||
    isNaN(amount) ||
    parseFloat(amount) <= 0 ||
    parseFloat(amount) > initialBalance
  ) {
    /* Modal PopUp  */
    const modal = document.getElementById(modalID);
    const closePopUp = document.getElementById("close-popup");
    modal.close();
    modal.classList.add("hidden");
    modal.classList.remove("hidden");
    modal.showModal();
    closePopUp.addEventListener("click", function () {
      document.getElementById("donateFailed").classList.add("hidden");
    });
  } else {
    /* Update Donate Amount */
    let result = parseFloat(donateBalance) + parseFloat(amount);
    document.getElementById(donatBalance).innerText = result;

    /*update Current Balance*/
    initialBalance -= amount;
    document.getElementById("initialBalance").innerText = initialBalance;

    /*Donation Success Modal*/
    const modal = document.getElementById("donateSuccess");
    const closePopUp = document.getElementById("close-popup");
    modal.close();
    modal.classList.add("hidden");
    modal.classList.remove("hidden");
    modal.showModal();
    closePopUp.addEventListener("click", function (e) {
      document.getElementById("donateFailed").classList.add("hidden");
    });

    /*Donation History*/
    const timeDate = new Date();
    const time = timeDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const date = timeDate.toLocaleDateString("en-US");
    const history = document.getElementById("historyData");
    const div = document.createElement("div");
    div.classList.add(
      "bg-white",
      "shadow-md",
      "rounded-lg",
      "border-2",
      "border-gray-300"
    );
    div.innerHTML = `<h2 class="font-medium text-xl px-4 mt-4 primary-txt">
              ${amount} Taka is Donated for ${donetLocation}, Bangladesh
            </h2>
            <p
              class="text-base font-light secondarytxt px-4 mb-4"
            >
              Time: ${time} Date: ${date}
            </p> `;
    history.appendChild(div);
  }
}

/*****Donate for Noakhali*****/
const donateNoakhali = donateSumbit("donateNoakhali");
donateNoakhali.addEventListener("click", () => {
  donationProcess(
    "amountNoakhali",
    "initialBalanceNoakhali",
    "famine-2024 at Noakhali",
    "donateFailed"
  );
});

/*****Donate for Feni*****/
const donateFeni = donateSumbit("donateFeni");
donateFeni.addEventListener("click", () => {
  donationProcess(
    "amountFeni",
    "initialBalanceFeni",
    "Flood Relief in Feni",
    "donateFailed"
  );
});

/*****Donate for Quota*****/
const donateQuota = donateSumbit("donateQuota");
donateQuota.addEventListener("click", () => {
  donationProcess(
    "amountQuota",
    "initialBalanceQuota",
    "Aid for Injured in the Quota Movement",
    "donateFailed"
  );
});
