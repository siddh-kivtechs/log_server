import express from 'express';  
import Log from './mongo.js';  
  
const router = express.Router();  
  
router.post('/logs', async (req, res) => {  
  try {  
    const logs = req.body.logs;  
  
    for (const logData of logs) {  
      const log = new Log(logData);  
      log.markModified('data');  
      await log.save();  
    }  
  
    res.send({status: 'success', message: 'Logs saved successfully'});  
  } catch (error) {  
    console.error(error);  
    res.status(500).send('Internal Server Error');  
  }  
});  
  
export default router;  
