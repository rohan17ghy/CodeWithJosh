import express from 'express';
import courseRoutes from './routes/course'; 
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use('/course', courseRoutes);

app.listen(port, () => {
    console.log(`The server running at port ${port}`);
})