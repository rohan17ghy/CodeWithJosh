import type {ReactNode} from 'react'

export const Card = ({imgSrc, content}: {imgSrc:string, content: ReactNode}): JSX.Element => {
    
return (
        <div className="max-w-[350px] rounded-md border-custom-border border hover:outline-none hover:border-gray-400 ">
            <img src={imgSrc} alt="" className='cursor-pointer' />
            <div className="p-7">
                {content}
            </div>
        </div>
)};
