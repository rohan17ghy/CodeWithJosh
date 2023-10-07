import { VideoCameraIcon } from "@heroicons/react/20/solid"
import ButtonCourse from "./ButtonCourse";
import { FileLines } from "./svgs";

//duration is in seconds
type Chapter = {
    heading: string,
    lectures: {
        heading: string,
        isFile: boolean,
        isPreviewAval: boolean,
        duration: number
    }[],
    duration: number  
}


export const CourseContent = ({className, chapters}: { className?: string, chapters: Chapter[]}) => {

    chapters  = [{
        heading: "Getting Started",
        lectures: [{
            heading: "Welcome",
            isFile: false,
            isPreviewAval: true,
            duration: 12
        },{
            heading: "Prerequisites",
            isFile: false,
            isPreviewAval: true,
            duration: 12            
        },{
            heading: "Connect with Me",
            isFile: true,
            isPreviewAval: false,
            duration: 0
        }],
        duration: 32        
    },{
        heading: "Getting started with React",
        lectures:[{
            heading: "What is React",
            isFile: false,
            isPreviewAval: true,
            duration: 8
        },{
            heading: "Setting Up the Development Environment",
            isFile: false,
            isPreviewAval: true,
            duration: 8 
        }],
        duration: 18
    },{
        heading: "Building Components",
        lectures:[{
            heading: "Introduction",
            isFile: false,
            isPreviewAval: false,
            duration: 9 
        },{
            heading: "Creating a ListGroup Component",
            isFile: false,
            isPreviewAval: false,
            duration: 10
        }],
        duration: 58 
    }]
    
    return (
        <div id="accordion-collapse" data-accordion="collapse" className={`${className}`}>
            {chapters.map((chapter, index) => {
                return (
                    <>                        
                    <h2 id={`accordion-collapse-heading-${index}`}>
                        <button type="button" className={`flex items-center justify-between w-full p-5 font-medium text-left border ${index != chapters.length-1 ? 'border-b-0': ''} ${index == 0 ? 'rounded-t-xl': ''} dark:border-gray-700 dark:text-gray-400`} data-accordion-target={`#accordion-collapse-body-${index}`} aria-expanded="false" aria-controls={`accordion-collapse-body-${index}`}>
                            <span className="text-white">{chapter.heading} ({chapter.duration})</span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                            </svg>
                        </button>
                    </h2>
                    <div id={`accordion-collapse-body-${index}`} className="hidden" aria-labelledby={`accordion-collapse-body-${index}`}>
                        <div className={`p-5 border ${index != chapters.length-1 ? 'border-b-0': ''} border-gray-200 dark:border-gray-700 dark:bg-gray-900`}>                    
                            <ul>
                                {chapter.lectures.map(lecture => (
                                    <li className="flex items-center text-base my-2">
                                        {lecture.isFile ? <FileLines className=" text-gray-500 h-5 w-5 mr-3" /> : <VideoCameraIcon className=" text-gray-500 h-5 w-5 mr-3"/>} 
                                        <h3 className="flex-grow">{lecture.heading}</h3>
                                        {!lecture.isFile ?
                                        (lecture.isPreviewAval ?
                                        <ButtonCourse padding="px-3 py-1" text="text-xs" className=" w-full md:w-auto bg-violet-600 hover:bg-violet-700">Preview</ButtonCourse>
                                        : <span>0m 12sec</span>)
                                        : null
                                        }                            
                                    </li>
                                ))}
                                
                            </ul>
                        </div>
                    </div>                    
                    </>               
                )
            })}    
        </div>
            
            
            
        
    )
}
