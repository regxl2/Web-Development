export function Responsive(){
    return (
        // tailwind css is mobile first. So, md means if the width of screen is greater than the md then apply
        // this type of style.
        <div className="grid grid-cols-12">
            <div className="bg-red-500 col-span-12 text-green-500 md:col-span-5">Red</div>
            <div className="bg-green-500 col-span-12 text-blue-500 md:col-span-5">Green</div>
            <div className="bg-blue-500 col-span-12 text-red-500 md:col-span-2">Blue</div>
        </div>
    )
}