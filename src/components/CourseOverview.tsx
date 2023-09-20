import Gradient from "./Gradient"
import { BarChart, Video, Lessons, Download, Exercises, Captions, Medal, LifeTime, Pace } from "./svgs"

const CourseOverview = () => {

    const overviews = [
        {icon: BarChart , text: 'Beginner'}, {icon: Video, text: '8 hours of HD video'}, {icon: Lessons, text: '140 lessons'},
        {icon: Download, text: 'Downloadable content'}, {icon: Exercises, text: 'Hands-on exercises'}, {icon: Captions, text: 'English captions'},
        {icon: Medal, text: 'Certificate of completion'}, {icon: LifeTime, text: 'Lifetime access'}, {icon: Pace, text: 'Learn at your own pace'}
    ]
    return (
        <div className="mt-7">
            <Gradient/>
            <div className=" rounded-md p-10 border-custom-iconBorder border-2 bg-custom-iconBackground">
                <h2 className="uppercase text-lg font-bold tracking-wide">Course Overview</h2>
                <div className=" w-16 h-[5px] bg-gradient-to-r from-pink-500 to-violet-600 mt-4 mb-10"></div>
                <ul>
                    {overviews.map((item, index) => (
                        <li key={index} className=" mt-4 font-normal">
                            <div className="flex items-center text-lg">
                                {<item.icon className="text-custom-iconColor" />}
                                <p className="text-custom-courseOverviewText">{item.text}</p>
                            </div>                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CourseOverview