import { Select } from "./select";
import { TextBox } from "./textbox";
import { CourseCard } from "./course-card";
import { useEffect, useState } from "react";
import { getAllCourses } from 'utils';
import type { Course } from "db";
import { Loader } from "./icons";

export const Courses = (): JSX.Element => 
{
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllCourses()
        .then((result) => {
            setCourses(result);
        })
        .catch(() => {            
            setCourses([]);
        }).finally(() => {
            setLoading(false);
        })
    }, [])  



    return (
        <div>
            <div className='container mx-auto flex flex-col items-center mb-6 mt-3 md:my-6 lg:my-10 text-center'>
                <div className='mb-8 text-3xl lg:text-5xl text-white font-extrabold' >Level Up Your Coding Skills</div>
                <div className='text-lg lg:text-2xl text-slate-300'>Whether you want to excel in web development, mobile development or strengthen your fundamental software engineering skills, there is a course for you.</div>
            </div>
            <div className="container mb-5 mx-auto flex flex-col lg:flex-row gap-4 ">
                <TextBox />
                <Select />
            </div>
            <div className="container mx-auto mt-20  overflow-hidden">                  
                {loading ? 
                    (<div className="flex items-center justify-center">
                        <Loader/>
                    </div>)
                    :
                    (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((c) => (
                            <CourseCard
                                key={c.id}
                                course={{
                                    title: c.title,
                                    description: c.description,
                                    duration: c.duration,
                                    newPrice: c.newPrice, 
                                    oldPrice: c.oldPrice, 
                                    image: 'https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FA90ijraxStiEoemCcNUn&w=384&q=75'
                                }}
                            />                            
                        ))}
                    </div>)
                }
            </div>
        </div>
  )
};
