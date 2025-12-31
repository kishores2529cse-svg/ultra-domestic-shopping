let count = 0;

function addToCart() {
  count++;
  document.getElementById("cartCount").innerText = count;
  alert("Product added to cart!");
}