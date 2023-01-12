import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { Home } from "./views/Home";
import { Header } from "./views/inc/Header";
import { Login } from "./views/User/Login";
import { About } from "./views/about/About";
import { Footer } from "./views/footer/Footer";
function App() {
  let loca = useLocation();
  return (
    <>
      {loca.pathname === "/login" ? <></> : <Header />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Login />}></Route>
        <Route exact path="/about" element={<About />} />
      </Routes>
      {loca.pathname === "/login" ? <></> : <Footer />}
    </>
  );
}

export default App;
