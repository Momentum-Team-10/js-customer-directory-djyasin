const root = document.getElementById("root");
const container = document.createElement("div");
root.appendChild(container);
container.classList.add("uk-container-large", "uk-flex", "uk-flex-between");

for (let customer of customers) {
const customerCard = document.createElement("div");
customerCard.id = `${customer.id}`;
container.appendChild(customerCard);
customerCard.classList.add(
  "uk-card",
  "uk-card-body",
  "uk-card-default",
  "uk-width-medium"
  );
customerCard.innerHTML = `
  <p class="uk-card-title" style="color: red !important; padding: 15px">${
   customer.name
}
<img src=${customer.thumbnail}/>
 <p>${customer.email}</p>
 <p>$${customer.age}</p>
 <p>${customer.location}</p>
 
`;
}
let customer = customers[0]
console.log(customer)
