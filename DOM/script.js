let informationData = [
  {
    name: "Shiva",
    age: 27,
    city: "Kathmandu",
  },
  {
    name: "Bipin",
    age: 23,
    city: "Pokhara",
  },
  {
    name: "Bandhu",
    age: 30,
    city: "Galyang",
  },
];
// let repeatedData = `  <tr>
//           <th scope="row">1</th>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//           <td>
//             <button class="btn btn-primary">Edit</button>
//             <button class="btn btn-danger">Delete</button>
//           </td>
//         </tr>`;

displayData();
function displayData() {
  console.log("Calling display function");
  let html = "";
  let tableBody = document.getElementById("table-body");
  informationData.forEach(function (element, index) {
    html =
      html +
      `<tr>
          <th scope="row">${index + 1}</th>
          <td>${element.name}</td>
          <td>${element.age}</td>
          <td>${element.city}</td>
          <td>
            <button class="btn btn-primary" onClick='edit(${index})'>Edit</button>
            <button class="btn btn-danger" onClick='deleteInfo(${index})'>Delete</button>
          </td>
        </tr>`;
  });
  //   console.log(html);
  if (!informationData.length < 1) {
    tableBody.innerHTML = html;
  } else {
    tableBody.innerHTML = `<p class='text-center'>No data found please add some</p>`;
  }
}

function edit(index) {
  console.log("Editing index ", index);
}
function deleteInfo(index) {
  console.log("Deleting index ", index);
  informationData.splice(index, 1);
  displayData();
}
