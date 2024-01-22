import { useState } from "react"
import {DurationIcon} from "./duration-icon"
import { Card } from "./card"

export interface CourseCard {
    title: string,
    description: string,
    duration: number,
    newPrice: number,
    oldPrice: number,
    image: string
} 

export const CourseCard = ({course} : {course: CourseCard}):JSX.Element => {
  
    const [isPublished] = useState(true) 
    return (
        <Card
            imgSrc="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FA90ijraxStiEoemCcNUn&w=384&q=75"
            content={
                <>
                    <div className="flex flex-nowrap justify-between mb-4">
                        <h2 className="text-white font-bold"><a className="hover:text-violet-400 cursor-pointer">{course.title}</a></h2>
                        <DurationIcon hour="11h" />
                    </div>
                    <p className="mb-4">{course.description}</p>
                    {isPublished ? 
                    <p className="font-bold text-lg text-white">${course.newPrice}/m<span className=" ml-2 font-normal text-base line-through">${course.oldPrice}</span></p>:
                    <DurationIcon hour="Coming Soon" />
                    }
                </>
            }
        />
    )
}
