import VerticalStepper from "./VerticalStepper"

const LearningPathDetails = () => {

    const learningPathDetails = {
        heading: "Front-end Development",
        paras: [
            "Every web or mobile application has two parts: a front-end and a back-end. The front-end is what the user sees and interacts with. It’s the app on your phone or the website you visit. So, front-end developers are in charge of building beautiful, interactive user interfaces.",
            "The average salary for a front-end Developer is $102,768 per year in the United States.",
            "Here are the courses I've created to help you pursue a career as a professional front-end developer. Depending on your knowledge and experience level, you can take all the courses in order or just pick the ones that you need."
        ],

    }
    return (
    <div className="container items-center mb-6 mt-3 md:my-6 lg:my-10">
        <div className="flex flex-col text-center mx-auto my-8">
            <h2 className=" uppercase text-pink-400 font-semibold text-sm mb-4">Learning Paths</h2>
            <h1 className=" text-5xl font-bold text-white mb-8">{learningPathDetails.heading}</h1>
            <p className=" text-2xl mb-3">The essential skills every front-end developer must have.</p>
        </div>
        <div className="max-w-prose">
            <div className="text-lg">
                {learningPathDetails.paras.map((p, index) => (
                    <p key={index} className="mb-3">{p}</p>
                ))}
            </div>
            <div>
                <section className="mt-14">
                    <h2 className="text-3xl text-white uppercase font-bold mb-4">HTML and CSS</h2>
                    <p className="">Front-end development starts with HTML and CSS. These are the languages behind every web page on the Internet. My HTML/CSS series teaches you everything you need to know from absolute basics to advanced concepts.</p>
                    <VerticalStepper />
                </section>        
            </div>
        </div>
        
    </div>
    )
}

export default LearningPathDetails