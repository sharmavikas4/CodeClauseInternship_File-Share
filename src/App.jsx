import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
function App() {
  const [login,setLogin] = useState(false);
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={login?<Home/>:<Login login={setLogin}/>}></Route>
        <Route path="/login" element={<Login login={setLogin}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
