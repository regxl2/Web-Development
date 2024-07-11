import React from "react";
import './WrapperComponent.css'

// This below code is the cleaner way to write the wrapper component.

// function Wrapper(){
//     return (
//         <div>
//             <WrapperCard innerComponent={<TextComponent/>}/>
//         </div>
//     )
// }
//
function TextComponent(){
    return (
        <div>
            hi there
        </div>
    )
}
//
// function WrapperCard({innerComponent}){
//     return (
//         <div id={"card"}>
//             {innerComponent}
//         </div>
//     )
// }


// This below is the best way to write the wrapper

function Wrapper(){
    return(
        <div>
            <WrapperCard>
                <TextComponent/>
                {/*All this written inside the Wrapper component will send as children prop in a Wrapper component.
                In this example, TextComponent will send as children as */}
            </WrapperCard>
        </div>
    )
}

function WrapperCard({children}){
    // by using children, we can access all the content written inside the T
    return(
        <div id={"card"}>
            {children}
        </div>
    )
}


export default Wrapper