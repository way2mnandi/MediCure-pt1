let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart. Cart total: R${getTotal()}`);
  }

  function getTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
  }


  function showCart() {
    const list = document.getElementById("cartItems");
    const total = document.getElementById("cartTotal");
    list.innerHTML = "";
    let sum = 0;

    cart.forEach((item, index) => {
      sum += item.price;
      list.innerHTML += `<li>${item.name} - R${item.price} 
        <button onclick="removeItem(${index})">Remove</button></li>`;
    });

    total.textContent = sum;
  }

  function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
  }

  function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
  }

  showCart();
  function searchProducts() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
      const name = product.querySelector("h3").textContent.toLowerCase();
      if (name.includes(input)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }