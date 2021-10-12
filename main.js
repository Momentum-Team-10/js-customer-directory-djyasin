console.log(customers);
//console.log(states);

const container = document.createElement("div");
root.appendChild(container);
container.classList.add("uk-container-large", "uk-flex", "uk-flex-between");

for (let customer of customers) {
  const customerCard = document.createElement("div");
  customerCard.id = `${email.id}`;
  container.appendChild(customerCard);
  customerCard.classList.add(
    "uk-card",
    "uk-card-body",
    "uk-card-default",
    "uk-width-medium"
  );

  let title = document.createElement("p");
  title.innerText = customer.title;
  customerCard.appendChild(title);

  let templateLiteral = `${customer.name}`;
  console.log(templateLiteral);

  customerCard.innerHTML = `
  <p class="uk-card-title" style="color: red !important; padding: 15px">${
    customer.title
  }</p>
  <img src=${customer.thumbnail} />
  <p>${customer.email}</p>
  <p>$${customer.age}</p>
  <p>${customer.location}</p>
 
`;
}
