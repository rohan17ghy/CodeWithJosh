import {ReactNode} from 'react';

const ButtonCourse = ({ className, children }: {className?: string, children?: ReactNode}) => {
  return (
    <button className={`btn flex rounded-full uppercase px-6 py-3 tracking-wider items-center justify-center text-sm text-white ${className}`}>{children}</button>
  )
}

export default ButtonCourse