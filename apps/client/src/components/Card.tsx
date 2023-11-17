import {ReactNode} from 'react'

const Card = ({imgSrc, content}: {imgSrc:string, content: ReactNode}) => {

    return (
        <div className="max-w-[350px] rounded-md border-custom-border border hover:outline-none hover:border-gray-400 ">
            <a href="#">
                <img src={imgSrc} alt="" />
            </a>
            <div className="p-7">
                {content}
            </div>
        </div>
        )
}

export default Card