const rate_list = document.querySelectorAll(".list li");
const submit_btn = document.querySelector(".submit-btn");
const rate_point = document.getElementById("rate");
const row = document.querySelector(".row");
const thank_row = document.querySelector(".thank_row");
const thank_div = document.getElementById(`thank`);
let rate = null;


rate_list.forEach((rating_card) => {
  rating_card.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    rate = e.target.innerText;
    console.log(rate);
  });
});

submit_btn.addEventListener("click", () => {
  if (rate) {
    rate_point.innerText = rate;
    row.classList.add("thank_row");
    thank_row.classList.remove("thank_row");
  }
});