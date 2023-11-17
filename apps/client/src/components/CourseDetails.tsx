import ButtonCourse from "./ButtonCourse"
import CourseOverview from "./CourseOverview"
import { LearningPoints } from "./LearningPoints";
import Rating from "./Rating"
import { AspectRatio } from '@mantine/core';
import { Bulb, ProfileIcon, QuestionMark, Tasks } from "./svgs";
import { CourseContent } from "./CourseContent";
import TargetStudent from "./TargetStudent";
import Prerequisites from "./Prerequisites";

const CourseDetails = () => {
    
    const points = [
        "Confidently build front-end apps with React and TypeScript",
        "Build reusable function components",
        "Style your components using vanilla CSS, CSS modules, and CSS-in-JS",
        "Manage component state",
        "Build forms with React Hook Forms",
        "Implement form validation using Zod",
        "Connect your React apps to the backend",
        "Deploy your React apps",
        "Use VSCode shortcuts to increase your productivity",
        "Apply the latest techniques and best practices",
        "Troubleshoot errors with ease",
        "Write clean code like a pro"
    ]
    return (
        <div className="container">
            <div className="flex gap-2 justify-between">
                <div className="max-w-lg text-center md:text-left pt-5 lg:pt-24">
                    <h1 className=" text-4xl text-white font-extrabold ">React 18 for Beginners</h1>
                    <p className="text-xl md:text-2xl leading-7 md:leading-9 my-5">A step-by-step guide to building web apps with React 18+ and TypeScript</p>
                    <Rating className="my-10 justify-center md:justify-start"></Rating>
                    <ButtonCourse className=" w-full md:w-auto mt-3 bg-gradient-to-r from-pink-500 to-violet-600 group">Access All Courses for $29/M</ButtonCourse>
                    <div className="mt-3 flex items-center justify-center md:justify-start ">
                        <hr className="inline-block w-6 mr-2 bg-white"></hr>
                        <span className="text-white">or</span>
                        <hr className="inline-block w-6 ml-2 bg-white"></hr>
                    </div>
                    <ButtonCourse className=" w-full md:w-auto mt-3 bg-violet-600 hover:bg-violet-700">Buy this course for $10 <span className=" line-through ml-1 text-xs">$149</span></ButtonCourse>
                    
                </div> 
                <CourseOverview/>
            </div>    
            <div className="my-20">
                <h2 className=" text-white text-center font-bold my-12 mb-10 text-3xl">Clear. Concise. Comprehensive.</h2>
                <p className="mb-14 text-center max-w-xl mx-auto text-xl leading-8">Tired of piecing together disconnected tutorials or dealing with rambling, confusing instructors? This course is for you! It's perfectly structured into a series of bite-sized, easy-to-follow videos that cover both theory and practice.</p>
                <AspectRatio className='mx-auto' ratio={16 / 9}>
                    <iframe
                        src="https://res.cloudinary.com/codewithmosh/video/upload/v1685377456/promo-videos/website-intro.mp4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </AspectRatio>
            </div>
            <div className="mx-4 mb-20">
                <div className="flex items-center justify-center w-12 h-12 rounded-full my-3 bg-indigo-950">
                    <Bulb className="text-violet-500" />
                </div>                
                <span className="text-violet-500 mb-3 inline-block font-medium md:font-semibold">Highly practical</span>
                <h2 className="text-3xl text-white font-extrabold mb-6">What You'll Learn</h2>
                <LearningPoints points={points} />
            </div>
            <div className="mx-4 mb-20">
                <div className="flex items-center justify-center w-12 h-12 rounded-full my-3 bg-indigo-950">
                    <Tasks className=" text-teal-300" />
                </div>
                <span className="text-teal-300 mb-3 inline-block font-medium md:font-semibold">A perfectly structured course</span>
                <h2 className="text-3xl text-white font-extrabold mb-6">Course Content</h2>
                <CourseContent className=" max-w-prose" chapters={[]} />
            </div>
            <div className="mx-4 mb-20">
                <div className="flex items-center justify-center w-12 h-12 rounded-full my-3 bg-indigo-950">
                    <ProfileIcon className=" text-pink-400" />
                </div>
                <span className="text-pink-400 mb-3 inline-block font-medium md:font-semibold">Target student</span>
                <h2 className="text-3xl text-white font-extrabold mb-6">Who Is This For?</h2>
                <TargetStudent className=" max-w-prose" points={[]} />
            </div>
            <div className="mx-4 mb-20">
                <div className="flex items-center justify-center w-12 h-12 rounded-full my-3 bg-indigo-950">
                    <QuestionMark className=" text-orange-400" />
                </div>
                <span className="text-orange-400 mb-3 inline-block font-medium md:font-semibold">What you should know</span>
                <h2 className="text-3xl text-white font-extrabold mb-6">Prerequisites</h2>
                <Prerequisites className=" max-w-prose" paras={[]} courses={[]} />
            </div>
            
        </div>  
    )
}

export default CourseDetails