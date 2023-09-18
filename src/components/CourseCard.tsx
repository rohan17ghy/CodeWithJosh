import { useState } from "react"
import DurationIcon from "./DurationIcon"

const CourseCard = () => {
  
    const [isPublished] = useState(true) 
    return (
    <div className="max-w-[350px] rounded-md border-custom-border border hover:outline-none hover:border-gray-400 ">
        <a href="#">
            <img src="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FA90ijraxStiEoemCcNUn&w=384&q=75" alt="" />
        </a>
        <div className="p-7">
            <div className="flex flex-nowrap justify-between mb-4">
                <h2 className="text-white font-bold"><a className="hover:text-violet-400 cursor-pointer">Mastering Next.js 13 with TypeScript</a></h2>
                <DurationIcon hour="11h"></DurationIcon>
            </div>
            <p className="mb-4">Become the best coder you can be with unlimited access to all the existing and future courses</p>
            {isPublished ? 
            <p className="font-bold text-lg text-white">$29/m<span className=" ml-2 font-normal text-base line-through">$149</span></p>:
            <DurationIcon hour="Coming Soon" />
            }
        </div>
    </div>
    )
}

export default CourseCard