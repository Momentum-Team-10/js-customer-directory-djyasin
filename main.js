const root = document.getElementById("root");
const container = document.createElement("div");
root.appendChild(container);
container.classList.add("uk-container-large", "uk-flex", "uk-flex-between", "uk-form-icon");

for (let customer of customers) {
  const customerCard = document.createElement("div");
  customerCard.id = `${customer.id.value}`;
  container.appendChild(customerCard);
customerCard.classList.add(
 "uk-card",
  "uk-card-body",
  "uk-card-default",
  "uk-width-medium");
  customerCard.innerHTML = `

<img src=${customer.picture.thumbnail} />
<p><h3>${capitalizeFirstLetter(customer.name.first)}</h3></p>
<p><h3>${capitalizeFirstLetter(customer.name.last)}</h3></p>
<p>${customer.email}</p>
<p>${customer.location.street.number}</p>
<p>${customer.location.street.name}</p> 
<p>${customer.location.city}</p>
<p>${customer.location.state}</p>
<p>${customer.location.postcode}</p>
<p>DOB: ${moment(customer.dob.age).format("MMM D, YYYY")}</p>
<p>Customer Since: ${moment(customer.registered.date).format("MMM D, YYYY")}</p>
`;
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//investigate border radius for thumbnail