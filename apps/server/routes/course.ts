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
        return res.status(505).json(`Error fetching the list of courses, ${ex}`);
    }
    
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(`Getting the course with id: ${id}`);
    try{
        const course = await prisma.course.findUnique({
            where:{
                id: id
            },
            include: {
                chapters: {
                    include: {
                        lessons: true
                    }
                }
            }
        });
        return res.json(course);
    }
    catch(ex)
    {
        return res.status(505).json(`Error fetching the course with id: ${id}, ${ex}`);
    }
    
});

export default router 