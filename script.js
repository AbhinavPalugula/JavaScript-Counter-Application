var number;
var localStorageNumber = localStorage.getItem("displayNumber");
if (localStorageNumber == null) {
  number = 0;
  document.querySelector(".number").innerHTML = number;
  localStorage.setItem("displayNumber", number);
} else {
  number = +localStorageNumber;
  document.querySelector(".number").innerHTML = number;
}
document.querySelector(".decrease-number-btn").addEventListener("click", () => {
  number -= 1;
  document.querySelector(".number").innerHTML = number;
  localStorage.setItem("displayNumber", number);
});
document.querySelector(".increase-number-btn").addEventListener("click", () => {
  number += 1;
  document.querySelector(".number").innerHTML = number;
  localStorage.setItem("displayNumber", number);
});
document.querySelector(".reset-btn").addEventListener("click", () => {
  number = 0;
  document.querySelector(".number").innerHTML = number;
  localStorage.setItem("displayNumber", number);
});
