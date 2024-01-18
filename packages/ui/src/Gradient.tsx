export const Gradient = ():JSX.Element => {
  return (
    <div className="flex flex-row">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full" />
        <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full" />
    </div>
  )
}
