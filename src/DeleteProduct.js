import React from 'react';
import { Button } from 'react-bootstrap';


const DeleteProduct = ({ productId, onDeleteProduct }) => {
    const handleDelete = () => {
      // Call delete API
      onDeleteProduct(productId);
    };
  
    return (
      <Button variant="danger" onClick={handleDelete}>
        Delete Product
      </Button>
    );
  };
  
  export default DeleteProduct