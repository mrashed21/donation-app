/*****initialBalance*****/
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

/*****Donate for Noakhali*****/
const donateNoakhali = donateSumbit("donateNoakhali");
donateNoakhali.addEventListener("click", () => {
  let amountNoakhali = getdonateAmount("amountNoakhali");
  let initialBalanceNoakhali = donatInitial("initialBalanceNoakhali");
  if (
    amountNoakhali === "" ||
    isNaN(amountNoakhali) ||
    amountNoakhali <= 0 ||
    amountNoakhali > initialBalance
  ) {
    const modal = document.getElementById("donateFailed");
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
    let result = parseFloat(initialBalanceNoakhali) + amountNoakhali;
    document.getElementById("initialBalanceNoakhali").innerText = result;

    /*update Current Balance*/
    initialBalance -= amountNoakhali;
    document.getElementById("initialBalance").innerText = initialBalance;

    /*Donation Success Modal*/
    const modal = document.getElementById("donateSuccess");
    const closePopUp = document.getElementById("close-popup");
    modal.close();
    modal.classList.add("hidden");
    modal.classList.remove("hidden");
    modal.showModal();
    closePopUp.addEventListener("click", function () {
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
              ${amountNoakhali} Donate for Flood at Noakhali, Bangladesh
            </h2>
            <p
              class="text-base font-light secondarytxt px-4 mb-4"
            >
              Time: ${time} Date: ${date}
            </p> `;
    history.appendChild(div);
  }
});

/*****Donate for Feni*****/
const donateFeni = donateSumbit("donateFeni");
donateFeni.addEventListener("click", () => {
  let amountFeni = getdonateAmount("amountFeni");
  let initialBalanceFeni = donatInitial("initialBalanceFeni");
  if (
    amountFeni === "" ||
    isNaN(amountFeni) ||
    amountFeni <= 0 ||
    amountFeni > initialBalance
  ) {
    const modal = document.getElementById("donateFailed");
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
    let result = parseFloat(initialBalanceFeni) + amountFeni;
    document.getElementById("initialBalanceFeni").innerText = result;

    /*update Current Balance*/
    initialBalance -= amountFeni;
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
              ${amountFeni} Donate for Flood Relief in Feni,Bangladesh
            </h2>
            <p
              class="text-base font-light secondarytxt px-4 mb-4"
            >
              Time: ${time} Date: ${date}
            </p> `;
    history.appendChild(div);
  }
});
