import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login/Login";
import {AxiosBearer} from "./service/AxiosBearer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";
import DetailProduct from "./components/detailProduct/DetailProduct";
import CartList from "./components/cart/CartList";
import ProductList from "./components/product/ProductList";
import HistoryOrder from "./components/history/HistoryOrder";
import DetailHistory from "./components/history/DetailHistory";
function App() {
    AxiosBearer();

  return (
   <>
     <BrowserRouter>
         <Header></Header>
         <Routes>
             <Route path="/" element={<Home />}></Route>
             <Route path="/login" element={<Login />}></Route>
             <Route path="/video" element={<VideoPlayer />}></Route>
             <Route path="/cart" element={<CartList />}></Route>
             <Route path="/product/detail/:id" element={<DetailProduct />}></Route>
             <Route path="/product" element={<ProductList />}></Route>
             <Route path="/history" element={<HistoryOrder />}></Route>
             <Route path="/history/detail/:id" element={<DetailHistory />}></Route>
         </Routes>
         <Footer></Footer>
     </BrowserRouter>
   </>
  );
}

export default App;
