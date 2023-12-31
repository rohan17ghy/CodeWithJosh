import express from 'express';
import prisma from 'db';
import courseRoutes from './routes/course'; 


const app = express();
const port = 3000;

app.use('/course', courseRoutes);

app.listen(port, () => {
    console.log(`The server running at port ${port}`);
})