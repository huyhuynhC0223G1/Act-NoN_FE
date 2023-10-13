import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login/Login";
import {AxiosBearer} from "./service/AxiosBearer";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
    AxiosBearer();

  return (
   <>
     <BrowserRouter>
         <Header></Header>
         <Routes>
             <Route path="/" element={<Home />}></Route>
             <Route path="/login" element={<Login />}></Route>
         </Routes>
         <Footer></Footer>
     </BrowserRouter>
   </>
  );
}

export default App;
