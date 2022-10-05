import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import Landing from "./components/Landing/Landing";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Landing />} />

            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Home/Product/:id" element={<CardDetail />} />
        </Routes>
    );
}

export default App;
