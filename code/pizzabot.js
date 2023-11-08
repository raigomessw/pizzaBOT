const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

function checkOrderName(orderName) {
  const cleanedOrderName = orderName.trim().toLowerCase();
  return (
    cleanedOrderName === vegetarian.toLowerCase() ||
    cleanedOrderName === hawaiian.toLowerCase() ||
    cleanedOrderName === pepperoni.toLowerCase()
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

function submitOrder() {
  const orderName = document.getElementById("pizzaType").value;
  const orderQuantity = parseInt(
    document.getElementById("pizzaQuantity").value
  );

  console.log(orderName);

  if (orderName == "") { 
    alert("Please enter the name of the pizza you want to order.");
  }

  if (checkOrderName(orderName)) {
    const cost = totalCost(orderQuantity);
    const time = cookingTime(orderQuantity);

    const responseMessage = `Great, I'll get started on your ${orderName} right away, it will cost ${cost} kr. The pizzas will take ${time} minutes.`;

    document.getElementById("response").innerText = responseMessage;
  } else {
    alert(
      "Sorry, we don't have that pizza on the menu. Please choose Vegetarian Pizza, Hawaiian Pizza, or Pepperoni Pizza."
    );
  }
}
