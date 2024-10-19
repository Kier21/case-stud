import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddProduct = ({ onAddProduct }) => {
  const [barcode, setBarcode] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ barcode, description, price, quantity, category });
  };

  return (
    <Container>
      <h2>Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBarcode">
          <Form.Label>Barcode</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter barcode" 
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)} 
          />
        </Form.Group>
        
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter product description" 
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter price" 
            value={price}
            onChange={(e) => setPrice(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formQuantity">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter quantity" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter category" 
            value={category}
            onChange={(e) => setCategory(e.target.value)} 
          />
        </Form.Group>

        <Button variant="primary" type="submit">Add Product</Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
