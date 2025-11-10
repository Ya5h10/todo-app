import express from 'express';
import cors from 'cors';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js';


const app = express();
const port = process.env.PORT || 3000;



// __filename and __dirname setup for getting url to search files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(cors());

console.log('Hello World!');
app.listen(port,()=>{
    console.log('Server is running on port: '+port);
})

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

//routes
app.use('/auth', authRoutes)

//todo routes
app.use('/todos', authMiddleware, todoRoutes)