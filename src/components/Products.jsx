import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // ✅ para redirigir
import { CartContext } from "./CartContext";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); // ✅ hook de navegación

  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          image: item.image,
          price: Math.floor(Math.random() * 201) + 100,
          selectedQuantity: 1
        }));
        setProducts(formatted);
      });
  }, []);

  const handleQuantityChange = (id, value) => {
    setProducts(products.map(p =>
      p.id === id
        ? { ...p, selectedQuantity: parseInt(value) || 1 }
        : p
    ));
  };

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
    };

addToCart(productToAdd, product.selectedQuantity); 

  };

  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><strong>Precio:</strong> Q{product.price}</p>
          <img src={product.image} alt={product.title} />
          <div>
            <label>Cantidad:</label>
            <input
              type="number"
              min="1"
              value={product.selectedQuantity}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
            />
            <button onClick={() => handleAddToCart(product)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;




