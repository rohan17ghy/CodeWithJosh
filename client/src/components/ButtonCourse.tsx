import {ReactNode} from 'react';

type ButtonCourseProps = {
    className?: string,
    children?: ReactNode,
    padding?: string,
    text?: string,
}

const ButtonCourse = ({ className, children, padding = 'px-6 py-3', text = 'text-sm' }: ButtonCourseProps) => {
  return (
    <button className={`btn flex rounded-full uppercase ${padding} tracking-wider font-medium md:font-semibold items-center justify-center ${text} text-white ${className}`}>{children}</button>
  )
}

export default ButtonCourse