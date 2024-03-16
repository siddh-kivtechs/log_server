import cors from 'cors';  
import bodyParser from 'body-parser';  
import helmet from 'helmet';  
import morgan from 'morgan';  
  
const middleware = [  
  cors(),  
  bodyParser.json(),  
  morgan('combined'),  
  helmet()  
];  
  
export default middleware;  
