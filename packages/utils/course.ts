import axios from 'axios';
import { Course } from 'db';

export async function getAllCourses(): Promise<Course[]> {
    try{
        const response = await axios.get("http://localhost:3000/course/all");
        const courses = response.data as Course[];
        console.log(courses)
        return courses;
    }
    catch(err){
        console.error("Error getting all the courses: ", err)
        return [];
    }    

}