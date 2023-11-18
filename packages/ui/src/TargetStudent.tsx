import { BulletIcon } from "./icons"

const TargetStudent = ({className, points}: { className?: string, points: string[]}) => {
    points = [
        "Beginners who want to learn React from scratch and build real-world apps",
        "React developers who want to fill in the gaps in their knowledge and take their skills to the next level",
        "Anyone who wants to become a confident and proficient React developer"
    ]
    return (
        <div className={`${className}`}>
            <ul>
                {points.map((point, index) => (                
                    <li key={index} className="flex items-start space-x-2">
                        <div>
                            <BulletIcon className=" mr-2" />
                        </div>                        
                        <span>{point}</span>
                    </li>                
                ))}
            </ul>
        </div>
    )
}

export default TargetStudent