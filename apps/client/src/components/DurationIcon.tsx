
const DurationIcon = ({hour} : {hour: string}) => {
  return (
    <div>
        <span className=" bg-custom-bg-hour text-pink-500 font-extrabold flex-grow-0 rounded-2xl px-3 py-1">{hour}</span>
    </div>
  )
}

export default DurationIcon