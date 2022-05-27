let alerts = [{
    name: "Milk",
    days: 4
}, {
    name: "Basil",
    days: 3
}, {
    name: "Spinach",
    days: 2
}];

let idNum = 4;

let lists = [{
    name: "Shopping List",
    description: "Happy shopping!"
}, {
    name: "Dessert List",
    description: "When you've got a sweet tooth"
}, {
    name: "Fruits",
    description: "Gotta get the fruits"
}];

let items = [{
        id: 1,
        title: "French Bread",
        description: "Who doesn't like French Bread?",
        img: "https://cdn-icons-png.flaticon.com/512/883/883561.png",
        expiration: 4
    }, {
        id: 2,
        title: "Eggs",
        description: "Eat it scrambled, or sunny side up!",
        img: "https://cdn-icons-png.flaticon.com/512/3142/3142726.png",
        expiration: 5
    },
    {
        id: 3,
        title: "Lettuce",
        description: "Lotta crunch without the calories",
        img: "https://cdn-icons-png.flaticon.com/512/1514/1514951.png",
        expiration: 6
    },
];


function updateItems() {
    document.getElementById("food-item").innerHTML = "";
    let acc = "";
    for (const item of items) {
        let new_item = `<div class="food-item-wrapper" id="food-item-${item.id}"> <div class="food-item"  onclick="showDeleteItem(${item.id})"> <img class="food-icon" src="${item.img}"><div class="description"><h3> ${item.title} </h3><p>${item.description}</p></div><p class="expiration"> Expires in ${item.expiration} days </p></div></div>`;
        acc = acc + new_item;
    }
    acc = acc + '<div class="addNewItem" onclick="showInputs()"><h3>(+) Add a new item</h3></div>';
    document.getElementById("food-item").innerHTML = acc;
}


function showInputs() {
    document.getElementById("main").innerHTML = '<h1> Add a new food item </h1><div class="addNewFoodItem"><h2> Food Name </h2><input type="text" id="foodName"><h2> Description </h2><input type="text" id="foodDescription"><h2> Days until expiration </h2><input type="number" id="foodExpiration"><div class="addNewItem" onclick="addNewItem()"><h3> Submit </h3></div><div class="addNewItem cancel" onclick="showFoodList()"><h3> Cancel </h3></div></div>';
}

function addNewItem() {
    let name = document.getElementById("foodName").value;
    let desc = document.getElementById("foodDescription").value;
    let expr = document.getElementById("foodExpiration").value;

    if (name === "") {
        document.getElementById("foodName").className = "error";
    } else {
        document.getElementById("foodName").className = "";
    }
    if (desc === "") {
        document.getElementById("foodDescription").className = "error";
    } else {
        document.getElementById("foodDescription").className = "";
    }
    if (expr === "") {
        document.getElementById("foodExpiration").className = "error";
    } else {
        document.getElementById("foodExpiration").className = "";
    }

    if (name !== "" && desc !== "" && expr !== "") {
        let new_item = {
            title: name,
            description: desc,
            img: "https://cdn-icons-png.flaticon.com/512/1514/1514951.png",
            expiration: expr,
            id: idNum
        };
        items.push(new_item);
        idNum += 1;
        showFoodList();
    }
}

function showFoodList() {
    document.getElementById("home").setAttribute("class", "navbar-current");
    document.getElementById("lists").setAttribute("class", "navbar-icon");
    document.getElementById("main").innerHTML = '<h1> Food Items in your Pantry </h1><div class="foods" id="food-item"></div>';
    updateItems();
}

function showDeleteItem(id) {
    let html = document.getElementById("food-item-" + id.toString()).innerHTML;
    let toadd = `<div class="delete" onclick="deleteItem(${id})"><h2>Delete</h2></div>`;

    console.log(html);
    if (!html.includes('<div class="delete')) {
        document.getElementById("food-item-" + id.toString()).innerHTML += toadd;
    } else {
        document.getElementById("food-item-" + id.toString()).innerHTML = html.replace(toadd, '');
    }
}

function showAlerts() {
    document.getElementById("main").innerHTML = "";
    let toAdd = "<h1> Alerts </h1>";
    for (const alert of alerts) {
        let new_alert = `<h3> - ${alert.name} has been expired for <span class="red"> ${alert.days} </span> days </h3>`;
        toAdd = toAdd + new_alert;
    }
    document.getElementById("main").innerHTML = toAdd;

    document.getElementById("home").setAttribute("class", "navbar-icon");
    document.getElementById("lists").setAttribute("class", "navbar-icon");
    document.getElementById("alert").setAttribute("class", "");

    document.getElementById("alert").innerHTML = '<img class="navbar-icon" id="alert-icon" src="https://cdn-icons-png.flaticon.com/512/550/550096.png">';


}

function showLists() {
    document.getElementById("main").innerHTML = "";
    let toAdd = "<h1> Lists </h1>";
    for (const list of lists) {
        let new_item = `<div class="food-item"><div><h3> ${list.name} </h3><p> ${list.description} </p></div></div>`;
        toAdd = toAdd + new_item;
    }
    document.getElementById("main").innerHTML = toAdd;

    document.getElementById("home").setAttribute("class", "navbar-icon");
    document.getElementById("lists").setAttribute("class", "navbar-current");
}

function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    updateItems();
}

showFoodList();