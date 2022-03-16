const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Defining API listening port
const port = 3001;

// Defining http server
const app = express();

// Setting up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up cors
app.use(cors({ origin: 'https://apply.oskar.global', }));

app.post("/v1/submit_application", async (req, res) => {
    await fetch('http://localhost:3000/v1/submit_application', {
        method: "POST",
        headers: req.headers,
        body: JSON.stringify(req.body),
    }).then((response) => {
        res.json(response.body);
        res.status(response.status);
    });
});

const pathToClientBuild = path.join(__dirname, "/build");
app.use(express.static(pathToClientBuild));

app.get("/", (req, res) => {
    res.sendFile(path.join(pathToClientBuild, "index.html"));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
