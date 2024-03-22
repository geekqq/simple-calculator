const express = require("express");

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 3009

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
})