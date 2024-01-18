import type {ReactNode} from 'react';

interface ButtonCourseProps {
    className?: string,
    children?: ReactNode,
    padding?: string,
    text?: string,
}

export const ButtonCourse = ({ className, children, padding = 'px-6 py-3', text = 'text-sm' }: ButtonCourseProps):JSX.Element => {
  return (
    <button className={`btn flex rounded-full uppercase ${padding} tracking-wider font-medium md:font-semibold items-center justify-center ${text} text-white ${className}`} type='button'>{children}</button>
  );
};


