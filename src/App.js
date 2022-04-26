import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./Pages/Home/Home";
import {Login} from "./Pages/Login/Login";
import {Store} from "./Pages/Store/Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="Store" element={<Store/>} />
        <Route path="Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
