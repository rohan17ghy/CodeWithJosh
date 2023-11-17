import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Getting the list of courses');
});

export default router 