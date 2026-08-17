const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Mini iGaming Tournament Platform API"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});