const dropZone = document.getElementById("drop-zone");
const preview = document.getElementById("preview");
const fileInput = document.getElementById("file-input");
const selectButton = document.getElementById("select-button");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.style.borderColor = "#007bff";
});

dropZone.addEventListener("dragleave", () => {
  dropZone.style.borderColor = "#ccc";
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.style.borderColor = "#ccc";
  const file = e.dataTransfer.files[0];
  if (file) {
    preview.innerHTML = `<img src="${URL.createObjectURL(file)}" alt="Preview">`;
  }
});

selectButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    preview.innerHTML = `<img src="${URL.createObjectURL(file)}" alt="Preview">`;
  }
});
