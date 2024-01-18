import {Card} from "./card"

const LearningPaths = ():JSX.Element => {

    const learningPaths = [{
        heading: "Fundamentals",
        desc: "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!"
    },{
        heading: "Front-end Development",
        desc: "All the courses you need to build beautiful websites. HTML, CSS, JavaScript, React, and more!" 
    }]
    return (
    <div className="container mb-6 mt-3 md:my-6 lg:my-10 text-center">
        <div className="flex flex-col items-center">
            <h1 className=" text-center text-3xl lg:text-5xl text-white font-bold mx-auto">Learning Paths</h1>
            <span className="text-2xl mt-8">Discover your optimal learning path to reach your full potential.</span>
        </div>
        <div className="container mx-auto mt-20  overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {learningPaths.map((learningPath, index) => (
                    <Card key={index}
                        imgSrc="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FA90ijraxStiEoemCcNUn&w=384&q=75"
                        content={
                            <>
                                <a href="front-end">
                                    <h2 className="text-left text-white text-xl font-extrabold hover:underline hover:cursor-pointer underline-offset-4" style={{ textDecorationColor: '#ff4bbe'}}>{learningPath.heading}</h2>
                                </a>                                
                                <p className="text-left">{learningPath.desc}</p>
                            </>
                        }
                    />            
                ))}                
            </div>            
        </div>
    </div>
    )
}

export { LearningPaths }