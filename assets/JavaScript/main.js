/*****initialBalance*****/
let initial = document.getElementById("initialBalance").innerText;
let initialBalance = parseFloat(initial);

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
  }
});
