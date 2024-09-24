/* Input Amount Common Funtion */
function getdonateAmount(id) {
  let amount = document.getElementById(id).value;
  return amount;
}

/* Donation Button Common Funtion */
function donateSumbit(id) {
  const donateButton = document.getElementById(id);
  return donateButton;
}

/* Total Donation Amount Common Funtion */
function donatInitial(id) {
  const donatInitialBalance = document.getElementById(id).innerText;
  return donatInitialBalance;
}

document.getElementById("blog-file").addEventListener("click", function () {
  window.location.href = "index.html";
  console.log("hello blog");
});
