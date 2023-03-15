const products = [
  { name: "Sneakers", price: 1000000 },
  { name: "Sepatu Futsal", price: 500000 },
  { name: "Sepatu Pentopel", price: 750000 },
  { name: "Sepatu Running", price: 900000 }
];

const barangInput = document.getElementById("barang");
const hargaInput = document.getElementById("harga");

let productList = document.createElement("ul");
productList.classList.add("product-list");

barangInput.addEventListener("input", showProductList);

function showProductList() {
  const input = this.value.toLowerCase();

  products.forEach(function(product) {
    if (product.name.toLowerCase().indexOf(input) > -1) {
      const li = document.createElement("li");
      li.textContent = product.name;
      productList.appendChild(li);

      // Add click event listener to select product
      li.addEventListener("click", function() {
        const currentValue = barangInput.value;
        const newValue = currentValue.replace(input, product.name);
        barangInput.value = newValue;

        // Remove existing price
        let currentHarga = hargaInput.value;
        currentHarga = currentHarga.replace("Rp. ", "").split(".").join("");
        currentHarga = parseInt(currentHarga);

        // Add new price
        const newHarga = currentHarga + product.price;
        hargaInput.value = "Rp. " + newHarga.toLocaleString() + ",-";

        productList.remove();
        productList = document.createElement("ul");
        productList.classList.add("product-list");
        barangInput.parentNode.appendChild(productList);
      });
    }
  });

  const existingProductList = document.querySelector(".product-list");
  if (existingProductList) {
    existingProductList.remove();
  }

  barangInput.parentNode.appendChild(productList);

  // Remove the productList when another field is clicked
  const formFields = document.querySelectorAll("input, textarea");
  formFields.forEach(function(field) {
    if (field !== barangInput) {
      field.addEventListener("click", function() {
        productList.remove();
      });
    }
  });

  // Remove the productList when clicked outside the box
  document.addEventListener("click", function(event) {
    const isClickInside = barangInput.contains(event.target) || productList.contains(event.target);
    if (!isClickInside) {
      productList.remove();
    }
  });
}

// Listen for changes in the barang field
barangInput.addEventListener("input", function() {
  let harga = 0;

  const barangValue = this.value;
  const barangArray = barangValue.split(",");

  barangArray.forEach(function(barang) {
    const product = products.find(function(product) {
      return product.name.toLowerCase() === barang.trim().toLowerCase();
    });

    if (product) {
      harga += product.price;
    }
  });

  hargaInput.value = "Rp. " + harga.toLocaleString() + ",-";
});
