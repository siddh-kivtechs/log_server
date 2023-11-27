const express = require("express");  
const app = express();  
const PORT = process.env.PORT || 3000;  
  
// Add body parsing middleware  
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
  
app.all("*", (req, res) => {  
  res.send(req.body);  
  console.log(req.body);  
});  
  
app.listen(PORT, () => {  
  console.log(`API is listening on port ${PORT}`);  
});  
