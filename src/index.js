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
  
const ulidgen = ulid(); 
  

app.all("*", async (req, res) => {  
  try {  
    const data = req.body;  
    const logs = data.logs; // Access the "logs" array  
  
    console.log(logs); // Print the entire logs array  
  
    let dbdata = {  
      created_at: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),  
      data: data  
    };  
 
    res.send(data);  
  } catch (error) {  
    console.error(error);  
    res.status(500).send('Internal Server Error');  
  }  
});  
 

app.listen(PORT, () => {  
  console.log(`Server listening on port ${PORT}`);  
});  
