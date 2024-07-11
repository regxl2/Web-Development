import React, {useState, lazy, Suspense} from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Landing from "./components/Landing.jsx";

const Dashboard = lazy(() => import('./components/Dashboard.jsx'));
// In client side loading, we are loading a whole bundle of site on the client side, but assume that the website has 20 pages and
// users mostly use landing page then, we are loading the unnecessary files of other pages. So, by using React.lazy(), we will
// optimize and avoid loading a whole bundle and lazily fetching whenever a user visits that page.

function App() {
    // const navigate = useNavigate();

    return (
        <div>
            {/*<header>*/}
            {/*    <nav>*/}
            {/*        <ul id={"nav-list"}>*/}
            {/*            /!*code1: -*!/*/}
            {/*            /!*<li onClick={()=>{*!/*/}
            {/*            /!*    window.location.href = '/'*!/*/}
            {/*            /!*}}>Landing</li>*!/*/}

            {/*            /!*<li onClick={() =>{*!/*/}
            {/*            /!*    window.location.href = '/dashboard'*!/*/}
            {/*            /!*}}>Dashboard</li>*!/*/}
            {/*            /!*Above, using window.location.href is bad, if you are trying to do client side routing*!/*/}
            {/*            /!*clicking on the list item will re-fetch the whole files from the server side.*!/*/}
            {/*            /!*so, to avoid the hard reload of the page, we must use the useNavigate hook provided by the React*!/*/}

            {/*            /!*code2: -*!/*/}
            {/*            /!*<li onClick={()=>{*!/*/}
            {/*            /!*    navigate('/')*!/*/}
            {/*            /!*}}>Landing</li>*!/*/}
            {/*            /!*<li onClick={()=>{*!/*/}
            {/*            /!*    navigate('/dashboard')*!/*/}
            {/*            /!*}}>Dashboard</li>*!/*/}
            {/*            /!*This useNavigate hook will not work because we are using it outside the BrowserRoute component.*!/*/}
            {/*            /!*So, to solve that problem, we will make AppBar component and use it inside the BrowserRoute component*!/*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*</header>*/}
            <BrowserRouter>
                <AppBar/>
                <Routes>
                    <Route path={"/"} element={<Landing/>}/>
                    <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard/></Suspense>}/>
                    // since, the  Dashboard is Asynchronous, the react provide us the Suspense api
                    // in which there is fallback attribute in which we pass another component until the asynchronous
                    // component is loading.
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function AppBar(){
    // by using useNavigate hook inside the AppBar component and using AppBar component
    // inside BrowserRoute, we avoided the hard reloading (re-fetching the whole files) of the page.
    const navigate = useNavigate();
    return(
        <div>
            <header>
                <nav>
                    <ul id={"nav-list"}>
                        <li onClick={
                            () => navigate("/")
                        }>Landing</li>
                        <li onClick={
                            ()=>{ navigate("/dashboard")}
                        }>Dashboard</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default App
