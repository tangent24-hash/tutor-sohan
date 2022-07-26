import "./App.css";
import Header from "./Pages/Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Checkout from "./Pages/Checkout/Checkout";
import NotFound from "./Pages/Shared/NotFound";
import Footer from "./Pages/Shared/Footer";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div className="bg-light">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
