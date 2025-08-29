document.querySelectorAll(".popular-card").forEach(card => {
  const minusBtn = card.querySelector(".cart-minus");
  const plusBtn = card.querySelector(".cart-plus");
  const quantity = card.querySelector(".cart-quantity");

  minusBtn.addEventListener("click", () => {
    let value = parseInt(quantity.textContent);
    if (value > 1) quantity.textContent = value - 1;
  });

  plusBtn.addEventListener("click", () => {
    let value = parseInt(quantity.textContent);
    quantity.textContent = value + 1;
  });
});
