import React, { useState } from 'react'; // Ensure useState is imported
import { Container, Form, Button } from 'react-bootstrap'; // Import necessary components
as

const EditProduct = ({ product, onEditProduct }) => {
    const [barcode, setBarcode] = useState(product.barcode);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [quantity, setQuantity] = useState(product.quantity);
    const [category, setCategory] = useState(product.category);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onEditProduct({ ...product, barcode, description, price, quantity, category });
    };
  
    return (
      <Container>
        <h2>Edit Product</h2>
        <Form onSubmit={handleSubmit}>
        </Form>
      </Container>
    );
  };
  
  export default EditProduct;