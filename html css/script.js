let selectedRow = null;

function onFormSubmit(event) {
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

// retrive the data
function readFormData() {
  let formData = {};
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["qty"] = document.getElementById("qty").value;
  formData["perPrice"] = document.getElementById("perPrice").value;
  return formData;
}
// insert the Data
function insertNewRecord(data) {
  let table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);

  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productCode;

  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;

  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.qty;

  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.perPrice;

  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onclick='onEdit(this)'>Edit</button> <button onclick='onDelete(this)'>Delete</button>`;
}

// edit cells
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.qty;
  selectedRow.cells[3].innerHTML = formData.perPrice;
}

// Delete

function onDelete(td) {
  if (confirm("Do you want to delete the Record !")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  resetForm();
}

// Reset the data
function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("perPrice").value = "";
}

document.querySelectorAll('input[type=text]').forEach(input => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/\D/, "");
  });
});
