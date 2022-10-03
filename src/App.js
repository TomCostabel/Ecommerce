import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";

function App() {
    return (
        <Routes>
            <Route exact path="/Home" element={<Home />} />
        </Routes>
    );
}

export default App;
