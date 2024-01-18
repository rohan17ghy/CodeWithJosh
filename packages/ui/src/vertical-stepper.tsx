import { CircleFilled } from "./icons"

export const VerticalStepper = ():JSX.Element => {
  return (
    <div className="my-5">
        <div className="flex items-stretch">
            <div className="flex flex-col items-center  bg-pink-500 h-auto w-[2px] translate-y-3">
                <CircleFilled/>
            </div>
            <div className="ml-5 pb-7">
                <h3 className="my-0 text-xl text-white">
                    <a className="no-underline hover:underline underline-offset-4" href="/p/the-ultimate-html-css-part1" style={{ textDecorationColor: '#ff4bbe'}}>Ultimate HTML &amp; CSS: Part 1</a>
                </h3>
                <div>Beginner . 3h</div>
            </div>
        </div>
        <div className="flex items-stretch">
            <div className="flex flex-col items-center bg-pink-500 h-auto w-[2px] translate-y-3">
                <CircleFilled/>
            </div>
            <div className="ml-5 pb-7">
                <h3 className="my-0 text-xl text-white">
                    <a className="no-underline hover:underline underline-offset-4" href="/p/the-ultimate-html-css-part2" style={{ textDecorationColor: '#ff4bbe'}}>Ultimate HTML &amp; CSS: Part 2</a>
                </h3>
                <div>Intermediate . 5h</div>
            </div>
        </div>
        <div className="flex items-start">
            <div className="flex flex-col items-center bg-pink-500 h-auto w-[2px] translate-y-3">
                <CircleFilled/>
            </div>
            <div className="ml-5 pb-7">
                <h3 className="my-0 text-xl text-white">
                    <a className="no-underline hover:underline underline-offset-4" href="/p/the-ultimate-html-css-part3" style={{ textDecorationColor: '#ff4bbe'}}>Ultimate HTML &amp; CSS: Part 3</a>
                </h3>
                <div>Intermediate . 6h</div>
            </div>
        </div>  
    </div>
    )
}