import mongoose from 'mongoose';  
import dotenv from 'dotenv';  
  
dotenv.config();  
  
const MONGO_KEY = process.env.MONGO_KEY;  
  
mongoose.connect(MONGO_KEY);  
  
const logSchema = new mongoose.Schema({  
  log_id: String,  
  data: mongoose.Schema.Types.Mixed  
});  
  
const Log = mongoose.model('Log', logSchema, 'logs');  
  
export default Log;  
