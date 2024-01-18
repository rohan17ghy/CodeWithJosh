import express from 'express';
const prisma = require('db');

const router = express.Router();

router.get('/all', async (req, res) => {
    console.log('Getting the list of courses');
    try{
        const courses = await prisma.course.findMany({
            include: {
                chapters: {
                    include: {
                        lessons: true
                    }
                }
            }
        });
        return res.json(courses);
    }
    catch(ex)
    {
        return res.status(505).json("Error fetching the list of courses");
    }
    
});

export default router 