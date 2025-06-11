import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav"; // ✅ Importación de la barra

function App() {
  return (
    <Router>
      <Nav /> {/* ✅ Siempre visible */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/finish-shop" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

