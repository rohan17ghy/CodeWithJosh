import ButtonCourse from './ButtonCourse'
import { AspectRatio } from '@mantine/core';
import { ArrowSmallRightIcon } from '@heroicons/react/20/solid';
import Gradient from './Gradient';

const Landing = () => {
  return (
    <div className=' py-4'>
        <div className='mx-auto pt-10 pb-12 px-2 md:px-5 lg:px-8 2xl:max-w-7xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10'>
                <div className='p-2 pb-20 md:pb-10 lg:pt-10 xl:max-w-xl'>
                    <h1 className='text-4xl lg:text-[2.6rem] text-white font-extrabold leading-10 lg:leading-[2.9rem]'>Become the <span className='text-green-300'>software engineer</span> that companies <span className='text-pink-500'>love to hire</span></h1>
                    <p className='text-gray-300 text-lg md:text-xl my-5 md:my-7'>All the <strong className='text-white'>coding courses</strong> you need to excel <strong className='text-white'>in one place.</strong></p>
                    <ButtonCourse className='font-medium bg-gradient-to-r from-pink-500 to-violet-600 group'>
                        View Courses
                        <ArrowSmallRightIcon className='w-6 h-6 fill-slate-50  group-hover:ml-3'></ArrowSmallRightIcon>
                    </ButtonCourse>
                </div>
                <div className="bg-gradient-to-r from-[#11152c] to-[#0e1139] rounded-lg select-none border border-indigo-900 relative">
                    <Gradient/>
                    <div className="px-8 py-5">
                        <div className="flex flex-row space-x-2">
                            <div className="rounded-full bg-red-400 w-3 h-3"></div>
                            <div className="rounded-full bg-orange-400 w-3 h-3"></div>
                            <div className="rounded-full bg-green-200 w-3 h-3"></div>
                        </div>
                    </div>
                    <div className="px-8 py-8 border-t-[2px] border-indigo-900 overflow-hidden">
                        <code className="font-mono">
                            <div className=" border-r-white border-r-[4px] inline-block pr-2 animate-blink"><span className="text-pink-500 mr-2">const</span><span className="text-white mr-2">coder</span><span className="text-pink-500 mr-2">=</span><span className="text-gray-400">{'{'}</span></div>
                            <div><span className="text-white ml-8 mr-2">name:</span><span className="text-gray-400">&#x27;</span><span className="text-amber-300">Master Coder</span><span className="text-gray-400">&#x27;,</span></div>
                            <div><span className="text-white ml-8 mr-2">skills:</span><span className="text-gray-400">[&#x27;</span><span className="text-amber-300">React</span><span className="text-gray-400">&#x27;, &#x27;</span><span className="text-amber-300">Node</span><span className="text-gray-400">&#x27;],</span></div>
                            <div><span className="text-white ml-8 mr-2">hardWorker:</span><span className="text-orange-400">true</span><span className="text-gray-400">,</span></div>
                            <div><span className="text-white ml-8 mr-2">problemSolver:</span><span className="text-orange-400">true</span><span className="text-gray-400">,</span></div>
                            <div><span className="text-green-400 ml-8 mr-2">hireable:</span><span className="text-orange-400">function</span><span className="text-gray-400">() {'{'}</span></div>
                            <div><span className="text-orange-400 ml-16 mr-2">return</span><span className="text-gray-400">(</span></div>
                            <div><span className="text-cyan-400 ml-24">this.</span><span className="text-white mr-2">hardWorker</span><span className="text-amber-300">&amp;&amp;</span></div>
                            <div><span className="text-cyan-400 ml-24">this.</span><span className="text-white mr-2">problemSolver</span><span className="text-amber-300">&amp;&amp;</span></div>
                            <div><span className="text-cyan-400 ml-24">this.</span><span className="text-white mr-2">skills.length</span><span className="text-amber-300 mr-2">&gt;=</span><span className="text-orange-400">5</span></div>
                            <div><span className="text-gray-400 ml-16 mr-2">);</span></div>
                            <div><span className="text-gray-400 ml-8">{'}'}</span></div>
                            <div><span className="text-gray-400">{'}'}</span></div>
                        </code>
                    </div>
                </div>
            </div>   
        </div>  
        <div className='mt-24'>
            <p className='text-purple-500 my-3 tracking-wider text-center font-semibold'>HELLO,</p>
            <h2 className='text-white text-3xl text-center font-extrabold '>I'm Josh Hamedani</h2>
            <p className='text-lg my-10 text-center w-1/2 mx-auto max-w-[60ch]'>Are you feeling stuck or overwhelmed in your coding journey? Don't worry, I've got your back! Together, we'll work to level up your skills, increase your earning potential, and build a brighter future.</p>
        </div>
        <AspectRatio className=' max-w-[650px] mx-auto' ratio={16 / 9}>
            <iframe
                src="https://res.cloudinary.com/codewithmosh/video/upload/v1685377456/promo-videos/website-intro.mp4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </AspectRatio>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4 justify-center mx-auto my-20 max-w-[900px]'>
            <div>
                <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-3/4 mx-auto"></div>
                <div className='flex flex-col text-center p-8 border-custom-iconBorder border-2 bg-custom-iconBackground rounded-md'>                
                    <p className='font-bold mb-2 text-violet-500 text-2xl md:text-3xl lg:text-4xl'>10M+</p>
                    <p className='text-sm lg:text-base text-gray-300'>Students taught</p>
                </div>
            </div>
            <div>
                <div className="h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent w-3/4 mx-auto"></div>
                <div className='flex flex-col text-center p-8 border-custom-iconBorder border-2 bg-custom-iconBackground rounded-md'>
                    <p className='font-bold mb-2 text-teal-400 text-2xl md:text-3xl lg:text-4xl'>3M+</p>
                    <p className='text-sm lg:text-base text-gray-300'>Youtube fans</p>
                </div>
            </div>
            <div>
                <div className="h-[1px] bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent w-3/4 mx-auto"></div>
                <div className='flex flex-col text-center p-8 border-custom-iconBorder border-2 bg-custom-iconBackground rounded-md'>
                    <p className='font-bold mb-2 text-fuchsia-400 text-2xl md:text-3xl lg:text-4xl'>20+</p>
                    <p className='text-sm lg:text-base text-gray-300'>Years of experience</p>
                </div>
            </div>
            <div>
                <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent w-3/4 mx-auto"></div>
                <div className='flex flex-col text-center p-8 border-custom-iconBorder border-2 bg-custom-iconBackground rounded-md'>
                    <p className='font-bold mb-2 text-orange-400 text-2xl md:text-3xl lg:text-4xl'>45</p>
                    <p className='text-sm lg:text-base text-gray-300'>Coding Courses</p>
                </div>
            </div>            
            
        </div>
    </div>  
  )
}

export default Landing