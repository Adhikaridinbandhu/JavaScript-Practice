getData();
function getData() {
  fetch("https://fakestoreapi.com/products")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      displayData(json);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function displayData(data) {
  let parentElement = document.getElementById("card-container");
  let html = "";
  data.forEach(function (element) {
    html =
      html +
      `  <div class="card" id="card" style="width: 18rem">
        <img
          src="${element.image}"
          class="card-img-top"
          alt="image-data"
        />
        <div class="card-body">
          <h5 class="card-title"><strong>Title: </strong></h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <li class="details-container">
            <ul>
              <strong>Category:</strong>
            </ul>
            <ul>
              <strong>price:</strong>
            </ul>
            <ul>
              <strong>Id:</strong>
            </ul>
            <ul>
              <strong>Rating:</strong>
            </ul>
          </li>
          <div class="btn-container">
            <button class="btn btn-primary">Details</button>
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>`;
  });
  ss;
}
