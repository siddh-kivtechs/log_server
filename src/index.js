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
//  Set & Initialize Supabase 
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
  
const ulidgen = ulid(); 
  

app.all("*", async (req, res) => {  
  try {  
    const data = req.body;  
    const logs = data.logs; 
  
    console.log(logs); 
  
    // let dbdata = {  
    //   data: data  
    // };  
 
    res.send(data);  
  //  Send the log to SUPABASE 

       supabase  
  .from('hooks')  
  .insert(data)  
  .then(response => {  
    console.log('Data sent to Supabase successfully:', response);  
  })  
  .catch(error => {  
    console.error('Error sending data to Supabase:', error);  
  });  


   
  } catch (error) {  
    console.error(error);  
    res.status(500).send('Internal Server Error');  
  }  
});  
 

app.listen(PORT, () => {  
  console.log(`Server listening on port ${PORT}`);  
});  
