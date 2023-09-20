import ButtonCourse from "./ButtonCourse"
import CourseOverview from "./CourseOverview"
import Rating from "./Rating"

const CourseDetails = () => {
  return (
    <div className="container">
        <div className="flex gap-2 justify-between">
            <div className="max-w-lg text-center md:text-left pt-5 lg:pt-24">
                <h1 className=" text-4xl text-white font-extrabold ">React 18 for Beginners</h1>
                <p className="text-xl md:text-2xl leading-7 md:leading-9 my-5">A step-by-step guide to building web apps with React 18+ and TypeScript</p>
                <Rating className="my-10 justify-center md:justify-start"></Rating>
                <ButtonCourse className=" w-full md:w-auto mt-3 font-medium md:font-semibold bg-gradient-to-r from-pink-500 to-violet-600 group">Access All Courses for $29/M</ButtonCourse>
                <div className="mt-3 flex items-center justify-center md:justify-start ">
                    <hr className="inline-block w-6 mr-2 bg-white"></hr>
                    <span className="text-white">or</span>
                    <hr className="inline-block w-6 ml-2 bg-white"></hr>
                </div>
                <ButtonCourse className=" w-full md:w-auto mt-3 font-medium md:font-semibold bg-violet-600 hover:bg-violet-700">Buy this course for $10 <span className=" line-through ml-1 text-xs">$149</span></ButtonCourse>
                
            </div> 
            <CourseOverview/>
        </div>    
    </div>  
  )
}

export default CourseDetails