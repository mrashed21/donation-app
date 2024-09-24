/*****initialBalance*****/
let initial = document.getElementById("initialBalance").innerText;
let initialBalance = parseFloat(initial);

function getdonateAmount(id) {
    let amount = document.getElementById(id).value;
    return parseFloat(amount);
}

function donateSumbit(id) {
    const donateButton = document.getElementById(id);
    return donateButton;
}

function donatInitial(id) {
    const donatInitialBalance = document.getElementById(id).innerText;
    return parseFloat(donatInitialBalance);
}

/* User Action */
const historyContainer = donateSumbit("historyData");
const userUI = donateSumbit("userUI");

const uiButton = donateSumbit("uiBtn");
uiButton.addEventListener("click", () => {
    userUI.classList.remove("hidden");
    historyContainer.classList.add("hidden");
});

const historyButton = donateSumbit("historyBtn");
historyButton.addEventListener("click", () => {
    historyContainer.classList.remove("hidden");
    userUI.classList.add("hidden");
});

/*****Donate for Noakhali*****/
const donateNoakhali = donateSumbit("donateNoakhali");
donateNoakhali.addEventListener("click", () => {
    let amountNoakhali = getdonateAmount("amountNoakhali");
    let initialBalanceNoakhali = donatInitial("initialBalanceNoakhali");
    
    if (
        isNaN(amountNoakhali) ||
        amountNoakhali <= 0 ||
        amountNoakhali > initialBalance
    ) {
        const modal = document.getElementById("donateFailed");
        const closePopUp = document.getElementById("close-popup");
        modal.classList.remove("hidden");
        modal.showModal();
        
        // popup close
        closePopUp.addEventListener("click", function () {
            document.getElementById("donateFailed").classList.add("hidden");
        });
    } else {
        /* Update Donate Amount */
        let result = initialBalanceNoakhali + amountNoakhali;
        document.getElementById("initialBalanceNoakhali").innerText = result;

        /* Update Current Balance */
        initialBalance -= amountNoakhali;  // Update the global initialBalance
        document.getElementById("initialBalance").innerText = initialBalance;

        if (initialBalance < 0) {
            return alert("Insufficient Funds!");
        }

        /* Donation Success Modal */
        const modal = document.getElementById("donateSuccess");
        const closePopUp = document.getElementById("close-popup");
        modal.classList.remove("hidden");
        modal.showModal();
        
        // popup close
        closePopUp.addEventListener("click", function () {
            document.getElementById("donateSuccess").classList.add("hidden");
            location.reload();
        });

        /* Donation History */
        const date = new Date();
        const history = document.getElementById("historyData");
        const div = document.createElement("div");
        div.innerHTML = `<h2 class="font-semibold text-xl primary-txt">
                ${amountNoakhali} donated for Flood Relief in Noakhali, Bangladesh
            </h2>
            <p class="text-base font-light secondarytxt bg-gray-100 rounded-xl p-4 mt-4">
                Date: ${date}
            </p>`;
        history.appendChild(div);
    }
});

/*****Donate for Feni*****/
const donateFeni = donateSumbit("donateFeni");
donateFeni.addEventListener("click", () => {
    let amountFeni = getdonateAmount("amountFeni");
    let initialBalanceFeni = donatInitial("initialBalanceFeni");
    
    if (
        isNaN(amountFeni) ||
        amountFeni <= 0 ||
        amountFeni > initialBalance
    ) {
        const modal = document.getElementById("donateFailed");
        const closePopUp = document.getElementById("close-popup");
        modal.classList.remove("hidden");
        modal.showModal();
        
        // popup close
        closePopUp.addEventListener("click", function () {
            document.getElementById("donateFailed").classList.add("hidden");
        });
    } else {
        /* Update Donate Amount */
        let result = initialBalanceFeni + amountFeni;
        document.getElementById("initialBalanceFeni").innerText = result;

        /* Update Current Balance */
        initialBalance -= amountFeni;  // Update the global initialBalance
        document.getElementById("initialBalance").innerText = initialBalance;

        if (initialBalance < 0) {
            return alert("Insufficient Funds!");
        }

        /* Donation Success Modal */
        const modal = document.getElementById("donateSuccess");
        const closePopUp = document.getElementById("close-popup");
        modal.classList.remove("hidden");
        modal.showModal();
        
        // popup close
        closePopUp.addEventListener("click", function () {
            document.getElementById("donateSuccess").classList.add("hidden");
            location.reload();
        });

        /* Donation History */
        const date = new Date();
        const history = document.getElementById("historyData");
        const div = document.createElement("div");
        div.innerHTML = `<h2 class="font-semibold text-xl primary-txt">
                ${amountFeni} donated for Flood Relief in Feni, Bangladesh
            </h2>
            <p class="text-base font-light secondarytxt bg-gray-100 rounded-xl p-4 mt-4">
                Date: ${date}
            </p>`;
        history.appendChild(div);
    }
});
