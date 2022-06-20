// install and import express
const express = require("express");
const data = require("./assets/user.json");
let app = express();

// Code here
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send(data).sendFile('./assets/users.html', {root: __dirnamme })
});

app.get("/users", async (req, res) => {
    try {
        return res.status(200).send(data);
    }
    catch(err) {
        return res.status(500).send({ message: err.message });
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const user = data.filter(e => e.id == req.params.id)
        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(500).send({ message: err.message });
    }
});

app.post("/users", async (req, res) => {
    try {
        const user = data.push(req.body);
        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(500).send({ message: err.message });
    }
});

// app.listen(8000, async () => {
//     console.log("Listening on port 8000...");
// })

// Note: Do not remove this export statement
module.exports = app;
