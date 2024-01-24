import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Tes from "./pages/tes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tes" element={<Tes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
