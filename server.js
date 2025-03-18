import express from "express";

const app = express();

app.get("/roll/:number", (req, res) => {
    const { username } = req.params;
    res.send(`<h1>Sup, ${username}!</h1>`);
});

app.listen(3000, () => {
    console.log("Express app is running on port 3000...");
});

