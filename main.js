const root = document.getElementById("root");
const container = document.createElement("div");
root.appendChild(container);
container.classList.add("uk-container-large", "uk-flex", "uk-flex-between");

for (let customer of customers) {
  const customerCard = document.createElement("div");
  customerCard.id = `${customer.id.value}`;
  container.appendChild(customerCard);
  customerCard.classList.add(
    "uk-card",
    "uk-card-body",
    "uk-card-default",
    "uk-width-medium"
  );
  customerCard.innerHTML = `
  <p class="uk-card-title" style="color: red !important; padding: 15px">${customer.name}
<img src=${customer.thumbnail}/>
<p><h3>${customer.name.first}</h3></p>
<p><h3>${customer.name.last}</h3></p>
<p>${customer.email}</p>
<p>${customer.location.street.number}</p>
<p>${customer.location.street.name}</p> 
<p>${customer.location.city}</p>
<p>${customer.location.state}</p>
<p>${customer.location.postcode}</p>
<p>DOB: ${customer.dob.age}</p>
<p>Customer Since: ${customer.since}</p>
`;
}
let customer = customers[0];
console.log(customer);
