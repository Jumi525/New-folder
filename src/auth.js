const names = document.getElementById("full-name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const descript = document.getElementById("description");

// Function to create a toast
function showToast(message, type = "success", duration = 3000) {
  const toastContainer = document.getElementById("toast-container");

  // Create the toast element
  const toast = document.createElement("div");
  toast.className = `flex items-center bg-gray-900 text-white p-4 max-w-sm w-full bg-${
    type === "success" ? "green" : "red"
  }-100 text-${type === "success" ? "green" : "red"}-800 border-2 border-${
    type === "success" ? "green" : "red"
  }-200 rounded-lg shadow-lg animate-fadeIn`;

  toast.innerHTML = `
  <span class="mr-2">
    ${
      type === "success"
        ? "✅" // Success icon
        : "❌" // Error icon
    }
  </span>
  <span class="flex-grow">${message}</span>
  <button
    class="ml-4 text-${type === "success" ? "green" : "red"}-600 hover:text-${
    type === "success" ? "green" : "red"
  }-800 focus:outline-none"
  >
    ✖
  </button>
`;

  // Append toast to container
  toastContainer.appendChild(toast);

  // Add event listener to close button
  toast.querySelector("button").addEventListener("click", () => {
    toast.classList.replace("animate-fadeIn", "animate-fadeOut");
    setTimeout(() => toast.remove(), 300);
  });

  // Automatically remove toast after the specified duration
  setTimeout(() => {
    if (toast.parentElement) {
      toast.classList.replace("animate-fadeIn", "animate-fadeOut");
      setTimeout(() => toast.remove(), 300);
    }
  }, duration);
}

// Add animation classes
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(10px); }
  }
  .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
  .animate-fadeOut { animation: fadeOut 0.3s ease-out forwards; }
</style>`
);

function handleLoginSubmit(event) {
  event.preventDefault();
  showToast("Successful! Welcome, onboard!");
  email.value = "";
  pass.value = "";
}

// Handle form submission
function handleSignup(event) {
  event.preventDefault();
  showToast("Sign up successful! Welcome, " + names.value + "!", "success");
  names.value = "";
  email.value = "";
  pass.value = "";
}

function handleFeedback(event) {
  event.preventDefault();
  showToast(
    `Thank you ${
      names.value.split(" ")[1] || ""
    }!, Your message has been delivered`
  );
  names.value = "";
  email.value = "";
  descript.value = "";
}
