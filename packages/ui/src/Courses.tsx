import { Select } from "./select";
import TextBox from "./TextBox";
import {CourseCard} from "./CourseCard";

const Courses = () => {
  return (
    <div>
        <div className='container mx-auto flex flex-col items-center mb-6 mt-3 md:my-6 lg:my-10 text-center'>
            <div className='mb-8 text-3xl lg:text-5xl text-white font-extrabold' >Level Up Your Coding Skills</div>
            <div className='text-lg lg:text-2xl text-slate-300'>Whether you want to excel in web development, mobile development or strengthen your fundamental software engineering skills, there is a course for you.</div>
        </div>
        <div className="container mb-5 mx-auto flex flex-col lg:flex-row gap-4 ">
            <TextBox></TextBox>
            <Select></Select>
        </div>
        <div className="container mx-auto mt-20  overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CourseCard course={{ 
                    title: 'Mastering Next.js 13 with TypeScript',
                    description: 'Become the best coder you can be with unlimited access to all the existing and future courses',
                    duration: 11,
                    newPrice: 15, 
                    oldPrice: 149, 
                    image: 'https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FA90ijraxStiEoemCcNUn&w=384&q=75'}} />
            </div>
            
        </div>
    </div>
  )
}

export { Courses }