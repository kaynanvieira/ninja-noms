import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrolltoTop";
import Toast from "./components/Toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Ingredients from "./pages/Ingredients";
import FastFood from "./pages/FastFood";
import Ecommerce from "./pages/Ecommerce";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toast />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/ingredientes" element={<Ingredients />} />
          <Route path="/fastfood" element={<FastFood />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;