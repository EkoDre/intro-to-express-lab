const express = require("express");
const app = express();


// exercise 1 

//const express = require("express");
//const app = express(); // defined express here don't need to for the others 

// Route to greet the user
app.get("/greetings/:username", (req, res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}!`);
});





//exercise 2

// import express from "express";

 //const app = express();

app.get("/roll/:number", (req, res) => {
    const numParam = req.params.number;
    if (isNaN(numParam)) {
      return res.send("You must specify a number.");
    }
    const maxNumber = Number(numParam);
    const randomResult = Math.floor(Math.random() * (maxNumber + 1));
    res.send(`You rolled a ${randomResult}.`); //back tick string interp
  });
  
  // Exercise 3 

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get("/collectibles/:index", (req, res) => {
    
    const index = parseInt(req.params.index); // this converts into a string into a number because of ParsInt. idk why just does

    if (index < 0 || index >= collectibles.length || isNaN(index)) { 
        return res.send("This item is not yet in stock. Check back soon!");  // number checker
    }

    const item = collectibles[index]; // grabs collectible 

    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`); // res = response (reminds me of console log)
});


// exercise 4 

//Query

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get("/shoes", (req, res) => {
    let filteredShoes = [...shoes]; //...shoes prevents changes 

    const minPrice = parseFloat(req.query["min-price"]); // Convert to low number
    const maxPrice = parseFloat(req.query["max-price"]); // Convert to high number

const type = req.query.type; // this gets type as a string 

if (!isNaN(minPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice); // call back function
}
if (!isNaN(maxPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice); //
}
if (type) {
    filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());
}

res.json(filteredShoes);  //this is response for the filtered list
});

app.listen(3000, () => {
    console.log("Server is running on port 3000...");
});



