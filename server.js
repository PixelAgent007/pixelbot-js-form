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
app.use(cors());

const pathToClientBuild = path.join(__dirname, "/build");
app.use(express.static(pathToClientBuild));

app.get("/", function (req, res) {
    res.sendFile(path.join(pathToClientBuild, "index.html"));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
