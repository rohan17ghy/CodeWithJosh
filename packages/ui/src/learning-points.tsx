import { Check } from "./icons";

export const LearningPoints = ({points} : { points: string[] }):JSX.Element => {
    return (
        <ul className="space-y-4">
            {points.map((p, index) => (
                <li className="flex items-center" key={index}>
                    <Check className="h-[1.2rem] text-teal-600 mr-2"  />    
                    <span>{p}</span>
                </li>
            ))}
        </ul>               
    )
}

