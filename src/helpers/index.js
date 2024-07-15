const cart = new Set();
export function addToCart(id) {
  cart.add(id);
  console.log("Thanks for adding this item, now you have amount -", cart.size);
}

export function removeFromCart(id) {
  cart.delete(id);
  console.log(
    "Thanks for removing this item, now you have amount -",
    cart.size
  );
}
