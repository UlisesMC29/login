import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from "./Pages/Home/HomeScreen";
import {Login} from "./Pages/Login/Login";
import {Store} from "./Pages/Store/Store";
import Error from "./Pages/Error/Error";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path="Store" element={<Store/>} />
          <Route path="Login" element={<Login/>} />
          <Route path="*" element={<Error/>}  />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
