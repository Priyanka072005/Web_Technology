function calculateCost() {

    let fuel = Number(document.getElementById("fuel").value);
    let food = Number(document.getElementById("food").value);
    let toll = Number(document.getElementById("toll").value);
    let friends = Number(document.getElementById("friends").value);

    let totalDisplay = document.getElementById("total");
    let perPersonDisplay = document.getElementById("perPerson");
    let message = document.getElementById("message");

    if (friends <= 0) {
        totalDisplay.textContent = "Enter valid number of friends!";
        totalDisplay.style.color = "red";
        perPersonDisplay.textContent = "";
        message.textContent = "";
        return;
    }

    let totalCost = fuel + food + toll;
    let perPerson = totalCost / friends;

    totalDisplay.textContent = "Total Trip Cost: ₹" + totalCost;
    perPersonDisplay.textContent = "Cost Per Person: ₹" + perPerson.toFixed(2);


    if (totalCost > 5000) {
        document.body.style.background = "#ff9a9e";
        message.textContent = "Expensive Trip! ";
    } 
    else if (totalCost > 2000) {
        document.body.style.background = "#fbc2eb";
        message.textContent = "Moderate Budget";
    } 
    else {
        document.body.style.background = "#a1ffce";
        message.textContent = "Budget Friendly Trip";
    }
}