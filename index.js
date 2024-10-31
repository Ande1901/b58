const express = require("express");
const app = express();
const port = 1000;

// routing
app.get("/", (req, res) => {
  res.send("Hello Worldd!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
