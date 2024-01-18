export const TextBox = ():JSX.Element => {
    return (
        <div className="block lg:w-[23rem] w-full mt-2 rounded-md shadow-sm">
            <input 
                spellCheck={false}
                type="text"
                name="price"
                id="price"
                className="w-full bg-custom-bg rounded-md border-custom-border border pl-3 py-1.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400  m:text-sm sm:leading-6"
                placeholder="Search"
            />
        </div>
    )
}