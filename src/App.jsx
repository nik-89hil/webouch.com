
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Front from './pages/Front'
import Info from './pages/Info'
import Service from './pages/Service'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Front/>}/>
      <Route path={"/about"} element={<Info/>}/>
      <Route path={"/services_and_prices"} element={<Service/>}/>
      <Route path={"*"} element={"Page Not Found | 404"}/>
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
