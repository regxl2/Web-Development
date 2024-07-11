export function Grid(){
    return (
        <div className="grid grid-cols-10">
            <div className="bg-red-500 col-span-4 text-center">red</div>
            <div className="bg-green-500 col-span-4 text-center">green</div>
            <div className="bg-blue-500 col-span-2 text-center">blue</div>
        </div>
        // You can also do the above same thing with the flex box by using width in percentage
    // <div className="flex">
    //     <div className="bg-red-500 w-[40%] text-center">red</div>
    //     <div className="bg-green-500 w-[40%] text-center">green</div>
    //     <div className="bg-blue-500 w-[20%] text-center">blue</div>
    // </div>
    )
}