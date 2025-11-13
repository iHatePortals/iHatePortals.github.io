const gradients = [
  "linear-gradient(135deg, #4a90e2, #50e3c2)", // mavi-turkuaz
  "linear-gradient(135deg, #9b59b6, #8e33ad)", // mor tonu
  "linear-gradient(135deg, #2ecc71, #27ae60)", // yeşil tonları
  "linear-gradient(135deg, #f39c12, #f1c40f)", // turuncu-sarı tonları
  "linear-gradient(135deg, #e74c3c, #c0392b)", // kırmızı tonları
  "linear-gradient(135deg, #000000, #51535a)"  // siyah-gri tonu
];

let index = 0;

const button = document.getElementById("colorPicker");

button.addEventListener("click", () => {
  document.body.style.background = gradients[index];
  index = (index + 1) % gradients.length; // sırayla dön
});
