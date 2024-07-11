import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/signup.tsx';
import { Logout } from './pages/logout.tsx';
import { User } from './pages/user.tsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = {'/signup'} element={<SignUp/>}/>
          <Route path = {'/user'} element={<User/>}/>
          <Route path = {'/logout'} element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
