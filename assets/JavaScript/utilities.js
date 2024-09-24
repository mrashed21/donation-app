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
  return donatInitialBalance;
}
