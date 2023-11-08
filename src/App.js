import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Product from "./component/Products";
import Blog from "./component/Blog";
import About from "./component/About";
import Contact from "./component/Contact";
import StyleGuid from "./component/StyleGuid";

function App() {
  return (
    <div className="App font-Karla">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/product" element={<Product></Product>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/styleguid" element={<StyleGuid></StyleGuid>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
