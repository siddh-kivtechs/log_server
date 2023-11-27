import express from 'express';  
 
import cors from 'cors';  
import { createClient } from "@supabase/supabase-js";  
import { ulid } from 'ulid';  
import bodyParser from 'body-parser';  
import helmet from 'helmet';  
import morgan from 'morgan';  

  
const app = express();  
const PORT = process.env.PORT || 3000;  
app.use(cors());  
app.use(bodyParser.json());  
app.use(morgan('combined'));  
app.use(helmet());  
  

const ulidgen=ulid();



  
app.all("*", async (req, res) => {  
  const data = req.body;  
  const jsonString = JSON.stringify(data);  
  const strippedStr = jsonString.replace(/`/g, '');  
  


    let dbdata={
        created_at: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
        data:data
    };
console.log(dbdata);
  res.send(data);

  

 
  
}); 


  
app.listen(PORT, () => {  
  console.log(`Server listening on port ${PORT}`);  
});  
