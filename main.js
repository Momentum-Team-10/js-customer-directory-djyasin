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
<p><h3>${customer.name.first}</h3></p>
<p><h3>${customer.name.last}</h3></p>
<p>${customer.email}</p>
<p>${customer.location.street.number}</p>
<p>${customer.location.street.name}</p> 
<p>${customer.location.city}</p>
<p>${customer.location.state}</p>
<p>${customer.location.postcode}</p>
<p>DOB: ${customer.dob.age}</p>
<p>Customer Since: ${customer.moment}</p>
`;
}
let customer = customers[0];
console.log(customer);

let date = moment().format("MMM Do YY"); 

for (let i = 0; i < 3; i++) {
  customer.registered.date;
  let date = moment().format("MMM Do YY"); 

}