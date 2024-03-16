import express from 'express';  
import middleware from './middleware.js';  
import routes from './routes.js';  
  
const app = express();  
  
app.use(middleware);  
app.use(routes);  
  
export default app;  
