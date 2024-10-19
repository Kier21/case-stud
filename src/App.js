import React, { useState } from 'react';
import Login from './Login';
import AddProduct from './AddProduct';
import ViewProducts from './ViewProducts';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);

  const handleLogin = (username, password) => {
    // Add authentication logic here (e.g., check credentials)
    setIsAuthenticated(true);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts(products.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  return (
    <div>
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <AddProduct onAddProduct={handleAddProduct} />
          <ViewProducts products={products}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct} />
        </>
      )}
    </div>
  );
};

export default App;
