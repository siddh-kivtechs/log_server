const express = require("express");  
const bodyParser = require("body-parser");  
const app = express();  
const PORT = process.env.PORT || 3000;  
  
// Add body parsing middleware  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));  
  
app.all("*", (req, res) => {  
  res.send(req.body);  
  console.log(req.body);  
});  
  
app.listen(PORT, () => {  
  console.log(`API is listening on port ${PORT}`);  
});  
