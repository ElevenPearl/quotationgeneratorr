let productCount = 0;

const products = [
  {
  name: "NONE",
  description: "ENTER HERE",
  rate: 0,
  image: "images/NONE.png"
}, 
{
  name: "6 head lenia",
  description: "6 head lenia",
  rate: 350,
  image: "images/6 head lenia.png"
},
{
  name: "EP 19",
  description: "EP 19",
  rate: 350,
  image: "images/EP 19.png"
},
{
  name: "EP 19",
  description: "EP 19",
  rate: 350,
  image: "images/EP 19.png"
},
{
  name: "EP 24",
  description: "EP 24",
  rate: 350,
  image: "images/EP 24.png"
},
{
  name: "EP 126",
  description: "EP 126",
  rate: 350,
  image: "images/EP 126.png"
},
{
  name: "EP 126",
  description: "EP 126",
  rate: 350,
  image: "images/EP 126.png"
},
{
  name: "EP 126",
  description: "EP 126",
  rate: 350,
  image: "images/EP 126.png"
},
{
  name: "EP 204",
  description: "EP 204",
  rate: 350,
  image: "images/EP 204.png"
},
{
  name: "EP 207",
  description: "EP 207",
  rate: 350,
  image: "images/EP 207.png"
},
{
  name: "EP 207",
  description: "EP 207",
  rate: 350,
  image: "images/EP 207.png"
},
{
  name: "EP 207",
  description: "EP 207",
  rate: 350,
  image: "images/EP 207.png"
},
{
  name: "EP 289",
  description: "EP 289",
  rate: 350,
  image: "images/EP 289.png"
},
{
  name: "EP 289",
  description: "EP 289",
  rate: 350,
  image: "images/EP 289.png"
},
{
  name: "EP 0333",
  description: "EP 0333",
  rate: 350,
  image: "images/EP 0333.png"
},
{
  name: "EP 0333",
  description: "EP 0333",
  rate: 350,
  image: "images/EP 0333.png"
},
{
  name: "EP 0333",
  description: "EP 0333",
  rate: 350,
  image: "images/EP 0333.png"
},
{
  name: "EP 411",
  description: "EP 411",
  rate: 350,
  image: "images/EP 411.png"
},
{
  name: "EP 413",
  description: "EP 413",
  rate: 350,
  image: "images/EP 413.png"
},
{
  name: "EP 415",
  description: "EP 415",
  rate: 350,
  image: "images/EP 415.png"
},
{
  name: "EP 417",
  description: "EP 417",
  rate: 350,
  image: "images/EP 417.png"
},
{
  name: "EP 437",
  description: "EP 437",
  rate: 350,
  image: "images/EP 437.png"
},
{
  name: "EP 439",
  description: "EP 439",
  rate: 350,
  image: "images/EP 439.png"
},
{
  name: "EP 441",
  description: "EP 441",
  rate: 350,
  image: "images/EP 441.png"
},
{
  name: "EP 441",
  description: "EP 441",
  rate: 350,
  image: "images/EP 441.png"
},
{
  name: "EP 441",
  description: "EP 441",
  rate: 350,
  image: "images/EP 441.png"
},
{
  name: "EP 504",
  description: "EP 504",
  rate: 350,
  image: "images/EP 504.png"
},
{
  name: "EP 702",
  description: "EP 702",
  rate: 350,
  image: "images/EP 702.png"
},
{
  name: "EP 704",
  description: "EP 704",
  rate: 350,
  image: "images/EP 704.png"
},
{
  name: "EP 828",
  description: "EP 828",
  rate: 350,
  image: "images/EP 828.png"
},
{
  name: "EP 983",
  description: "EP 983",
  rate: 350,
  image: "images/EP 983.png"
},
{
  name: "EP 996",
  description: "EP 996",
  rate: 350,
  image: "images/EP 996.png"
},
{
  name: "EP 1008",
  description: "EP 1008",
  rate: 350,
  image: "images/EP 1008.png"
},
{
  name: "EP 1011",
  description: "EP 1011",
  rate: 350,
  image: "images/EP 1011.png"
},
{
  name: "EP 1030",
  description: "EP 1030",
  rate: 350,
  image: "images/EP 1030.png"
},
{
  name: "EP 1053",
  description: "EP 1053",
  rate: 350,
  image: "images/EP 1053.png"
},
{
  name: "EP 1064",
  description: "EP 1064",
  rate: 350,
  image: "images/EP 1064.png"
},
{
  name: "EP 1084",
  description: "EP 1084",
  rate: 350,
  image: "images/EP 1084.png"
},
{
  name: "EP 1124",
  description: "EP 1124",
  rate: 350,
  image: "images/EP 1124.png"
},
{
  name: "EP 2007 5 HEAD",
  description: "EP 2007 5 HEAD",
  rate: 350,
  image: "images/EP 2007 5 HEAD.png"
},
{
  name: "EP 2007 10 HEAD",
  description: "EP 2007 10 HEAD",
  rate: 350,
  image: "images/EP 2007 10 HEAD.png"
},
{
  name: "EP 3006",
  description: "EP 3006",
  rate: 350,
  image: "images/EP 3006.png"
},
{
  name: "EP 3060-1",
  description: "EP 3060-1",
  rate: 350,
  image: "images/EP 3060-1.png"
},
{
  name: "EP 3060-2",
  description: "EP 3060-2",
  rate: 350,
  image: "images/EP 3060-2.png"
},
{
  name: "EP HONEYCOMB",
  description: "EP HONEYCOMB",
  rate: 350,
  image: "images/EP HONEYCOMB.png"
},
{
  name: "METAL PANEL",
  description: "METAL PANEL",
  rate: 350,
  image: "images/METAL PANEL.png"
},
{
  name: "METAL SURFACE",
  description: "METAL SURFACE",
  rate: 350,
  image: "images/METAL SURFACE.png"
},
{
  name: "PC PANEL",
  description: "PC PANEL",
  rate: 350,
  image: "images/PC PANEL.png"
},
{
  name: "PC SURFACE",
  description: "PC SURFACE",
  rate: 350,
  image: "images/PC SURFACE.png"
},
{
  name: "CURTAIN STRIP",
  description: "CURTAIN STRIP",
  rate: 350,
  image: "images/CURTAIN STRIP.png"
},
  {
  name: "TRACK LIGHT",
  description: "TRACK LIGHT",
  rate: 350,
  image: "images/TRACK LIGHT.png"
}
];

function addProduct() {
  productCount++;
  const table = document.querySelector("#productTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${productCount}</td>
    <td class="image-cell"></td>
    <td><textarea class="description-field"></textarea></td>
    <td><input type="number" value="1" min="1" onchange="calculateTotal()"></td>
    <td><input type="number" value="0" onchange="calculateTotal()"></td>
    <td><input type="number" value="0" min="0" max="100" onchange="calculateTotal()"></td>
    <td class="amount">0.00</td>
    <td class="no-print"><button onclick="removeProduct(this)">Remove</button></td>
  `;

  const descField = row.querySelector(".description-field");
  descField.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });

  const select = document.createElement("select");
  select.classList.add("product-select");
  select.innerHTML =
    `<option value="">Select Product</option>` +
    products.map((p, i) => `<option value="${i}">${p.name}</option>`).join("");

  select.onchange = function () {
    const selected = products[this.value];
    if (!selected) return;
    row.querySelector(".image-cell").innerHTML = `<img src="${selected.image}" alt="Product">`;
    descField.value = selected.description;
    descField.style.height = "auto";
    descField.style.height = descField.scrollHeight + "px";
    row.cells[4].querySelector("input").value = selected.rate;
    calculateTotal();
  };

  row.querySelector(".image-cell").appendChild(select);
  table.appendChild(row);

  $(select).select2({
    placeholder: "Select Product",
    width: "160px"
  });

  calculateTotal();
}

function removeProduct(button) {
  const row = button.closest("tr");
  row.remove();
  updateSrNo();
  calculateTotal();
}

function updateSrNo() {
  const rows = document.querySelectorAll("#productTable tbody tr");
  rows.forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
  productCount = rows.length;
}

function calculateTotal() {
  let total = 0;
  const rows = document.querySelectorAll("#productTable tbody tr");

  rows.forEach(row => {
    const qty = parseFloat(row.cells[3].querySelector("input").value) || 0;
    const rate = parseFloat(row.cells[4].querySelector("input").value) || 0;
    const discount = parseFloat(row.cells[5].querySelector("input").value) || 0;
    const amount = qty * rate * (1 - discount / 100);
    row.cells[6].textContent = amount.toFixed(2);
    total += amount;
  });

  document.getElementById("totalAmount").textContent = total.toFixed(2);
}

function autoResize() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
}

function createDescriptionTextarea(value = '') {
  const textarea = document.createElement('textarea');
  textarea.className = 'description-field';
  textarea.value = value;
  textarea.style.width = '100%';
  textarea.style.minHeight = '30px';
  textarea.style.border = 'none';
  textarea.style.resize = 'none';
  textarea.style.overflow = 'hidden';
  textarea.style.fontSize = '13px';
  textarea.style.fontFamily = 'inherit';
  textarea.style.background = 'transparent';
  textarea.style.textAlign = 'left';
  textarea.addEventListener('input', autoResize);

  requestAnimationFrame(() => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  });

  return textarea;
}

function printQuotation() {
  const textareas = Array.from(document.querySelectorAll('.description-field'));
  if (textareas.length === 0) {
    window.print();
    return;
  }

  const originalValues = textareas.map(t => t.value);
  const replacedDivs = [];

  textareas.forEach((ta, i) => {
    const div = document.createElement('div');
    div.className = 'print-description';
    div.style.whiteSpace = 'pre-wrap';
    div.style.fontSize = '13px';
    div.style.padding = '4px 0';
    div.style.height = "auto";
    div.style.minHeight = "unset";
    div.style.overflow = "visible";
    div.textContent = originalValues[i];

    ta.parentNode.replaceChild(div, ta);
    replacedDivs.push(div);
  });

  setTimeout(() => {
    window.print();
    replacedDivs.forEach((div, idx) => {
      const ta = createDescriptionTextarea(originalValues[idx]);
      div.parentNode.replaceChild(ta, div);
    });
    calculateTotal();
  }, 150);
}

function saveQuotation() {
  const partyName = document.getElementById("partyName").value;
  const address = document.getElementById("address").value;
  const phoneNo = document.getElementById("phoneNo").value;
  const date = document.getElementById("date").value;

  const rows = document.querySelectorAll("#productTable tbody tr");
  const products = [];

  rows.forEach(row => {
    const select = row.querySelector("select.product-select");
    const productName = select ? select.options[select.selectedIndex].text : "";
    let description = "";
    const descInput = row.cells[2].querySelector("textarea");
    if (descInput) {
      description = descInput.value.trim();
    } else {
      description = row.cells[2].textContent.trim();
    }
    const qty = row.cells[3].querySelector("input")?.value || "0";
    const rate = row.cells[4].querySelector("input")?.value || "0";
    const discount = row.cells[5].querySelector("input")?.value || "0";
    const amount = row.cells[6]?.textContent || "0.00";
    products.push({ productName, description, qty, rate, discount, amount });
  });

  const quotationData = {
    partyName,
    address,
    phoneNo,
    date,
    products,
    totalAmount: document.getElementById("totalAmount").textContent
  };

  const jsonData = JSON.stringify(quotationData, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Quotation_${partyName}_${date}.json`;
  a.click();
  URL.revokeObjectURL(url);
  alert("Quotation saved successfully!");
}











