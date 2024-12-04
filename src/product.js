const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const navBtn = document.querySelector(".nav");
const prices = document.querySelector(".price");
const names = document.querySelector(".name");
const lists = document.querySelector(".list");
const nums = document.querySelector(".nums");
let cart = [];
let prod = [];
let counts = [];
let numss = 0;
quantity = 0;

// Close Cart Modal
closeBtn.addEventListener("click", () => {
  navBtn.classList.toggle("translate-x-0");
});

// Open Cart Modal
openBtn.addEventListener("click", () => {
  navBtn.classList.toggle("translate-x-0");
});

// Function to add products to the cart
function addToCart(productName, productPrice, image, index) {
  if (counts.includes(index)) {
    console.log("Already added");
  } else {
    numss += 1;
    counts.push(index);
    cart.push({
      id: index,
      name: productName,
      price: productPrice,
      img: image,
    });
    updateCart();
  }
  // console.log(counts);
}

// Update cart modal
function updateCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    nums.innerHTML = numss;
    li.innerHTML = `<li
            class="flex items-center justify-between py-2 border-t-[2px] border-solid border-white/40"
          >
            <img
              src=${item.img}
              alt="Vegetables"
              class="w-10 h-10 object-cover rounded-md"
            />
            <p>$${item.price.split("/")[0]}</p>
            <p>${item.name.split(" ")[1]}</p>
            <div class="flex items-center justify-between w-16">
              <div
                class=" text-black h-6 w-6 bg-green-400 rounded-full grid place-content-center"
              >
                <ion-icon name="add-outline" class=" size-7"></ion-icon>
              </div>
              <p>${"1"}</p>
              <div
                class="text-black h-6 w-6 bg-green-400 rounded-full grid place-content-center"
              >
                <ion-icon name="remove-outline" class="size-7"></ion-icon>
              </div>
            </div>
          </li>`;
    cartItemsContainer.appendChild(li);
    prod += item.name.split(" ")[1];
    total += parseFloat(item.price);
  });
  cartTotal.textContent = total.toFixed(2);
}

// Checkout functionality
function checkout() {
  alert("Proceeding to Checkout...");
}

// Add event listener to buttons
document.querySelectorAll(".add-to-cart").forEach((button, index) => {
  button.addEventListener("click", (e) => {
    const productName = e.target
      .closest(".product")
      .querySelector("h2").textContent;
    const productPrice = e.target
      .closest(".product")
      .querySelector(".text-green-500")
      .textContent.replace("$", "");
    const image = e.target.closest(".product").querySelector("img").src;
    addToCart(productName, productPrice, image, index + 1);
    // console.log(cart[index]?.id, "index", index + 1);
  });
});

// document.addEventListener("click", (event) => {
//   if (event.target.name === "add-outline") {
//     console.log("plus");
//     addToCart(productName, productPrice, image, index + 1, quantity++);
//   }
//   if (event.target.name === "remove-outline") {
//     console.log("minus");
//   }
// });

// Filter products by category
function filterProducts(category) {
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    if (category === "all" || product.classList.contains(category)) {
      product.classList.remove("hidden");
    } else {
      product.classList.add("hidden");
    }
  });
}
