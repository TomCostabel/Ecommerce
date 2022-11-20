import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";

import Cart from "./components/Cart/Cart";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home/Product/:id" element={<CardDetail />} />
            <Route path="/Home/Carrito" element={<Cart />} />
        </Routes>
    );
}

export default App;
