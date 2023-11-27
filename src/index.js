// In src/index.js
const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;

// *** REMOVE ***
app.all("*", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});


app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
