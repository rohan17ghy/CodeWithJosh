import {CourseCard} from './CourseCard';

const Prerequisites = ({className, paras, courses}: {className:string, paras: string[], courses: CourseCard[]}) => {
    paras =[
        "You don't need prior knowledge of React to take this course. However, you should have some basic knowledge of web development, including HTML, CSS, and modern JavaScript.",
        "Please note that we'll be using TypeScript in this course, but don't worry if you've never used TypeScript before - I'll cover everything from scratch.",
        "Here are the courses we recommend if you need to strengthen the fundamentals."
    ] 

    courses = [{ 
        title: 'Mastering Next.js 13 with TypeScript',
        description: 'Become the best coder you can be with unlimited access to all the existing and future courses',
        duration: 11,
        newPrice: 15, 
        oldPrice: 149, 
        image: 'https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FA90ijraxStiEoemCcNUn&w=384&q=75'
    },{
        title: 'Mastering Next.js 13 with TypeScript',
        description: 'Become the best coder you can be with unlimited access to all the existing and future courses',
        duration: 11,
        newPrice: 15, 
        oldPrice: 149, 
        image: 'https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FA90ijraxStiEoemCcNUn&w=384&q=75'
    }]

    return (
        <>
            <div>
                {paras.map((para, index) =>  (
                    <div key={index} className={`mb-3 ${className}`}>{para}</div>
                ))}
            </div>
            <div className='flex gap-10 mt-10'>
                {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}            
            </div>
        </>
    
    )
}

export default Prerequisites