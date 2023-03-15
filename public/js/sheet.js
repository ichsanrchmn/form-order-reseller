form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the default form submission behavior

  let data = new FormData(form);
  fetch("https://script.google.com/macros/s/AKfycbzi_qhYSQ799nDPoSvS6B9wtisWrc3mS9EXatjRBu0QBrMC8D7PCL96eSSoFMW1JS0/exec", { method: "POST", body: data })
    .then((res) => res.text())
    .then((data) => window.alert(data));
  // Clear all input and textarea fields
  form.querySelectorAll("input, textarea").forEach((field) => {
    field.value = "";
  });
});
