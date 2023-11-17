import {ReactNode} from 'react';

const Rating = ({ className }: {className: ReactNode}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
        <span className="font-semibold text-lg">4.7</span>
        <img className=" h-4" src="https://codewithmosh.com/_next/static/media/4.5.fbc139f3.svg" alt="" />
        <span className='text-sm'>2355 reviews</span>
    </div>
  )
}

export default Rating