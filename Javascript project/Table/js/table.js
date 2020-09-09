let Fetch = document.querySelector(".btn");
let mytable = document.querySelector(".myTable");
let emp = [
  { name: "rahul", age: "21", country: "India" },
  { name: "anish", age: "17", country: "China" },
  { name: "manish", age: "15", country: "Australia" },
  { name: "uttam", age: "20", country: "America" },
  { name: "vicky", age: "19", country: "Spain" },
  { name: "ankit", age: "14", country: "United kingdom" },
];
let headers = ["name", "age", "country"];
Fetch.addEventListener("click", () => {
  let Table = document.createElement("table");
  let headerRow = document.createElement("tr");
  headers.forEach((headerText) => {
    let header = document.createElement("th");
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  Table.appendChild(headerRow);


  emp.forEach((e) => {
    let Row = document.createElement("tr");
    Object.values(e).forEach(text=>
    {
      let cell = document.createElement("td");
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      Row.appendChild(cell);
    })
    Table.appendChild(Row);
  });
  mytable.appendChild(Table);
});
