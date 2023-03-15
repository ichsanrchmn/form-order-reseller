const form = document.getElementById("form");

form.addEventListener("submit", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const barang = document.getElementById("barang").value;
  const harga = document.getElementById("harga").value;

  const doc = new jsPDF();

  doc.text("INVOICE", 105, 15, null, null, "center");
  doc.text(`Nama: ${name}`, 20, 40);
  doc.text(`Email: ${email}`, 20, 50);
  doc.text(`No. HP: ${phone}`, 20, 60);
  doc.text(`Alamat Lengkap: ${address}`, 20, 70);
  doc.text(`Barang yang dipesan: ${barang}`, 20, 80);
  doc.text(`Harga: ${harga}`, 20, 90);
  doc.save(`Invoice ${name}.pdf`);
});
