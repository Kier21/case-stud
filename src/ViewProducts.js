import React from 'react';
import { Table, Button, InputGroup, FormControl, Container } from 'react-bootstrap';

const ViewProducts = ({ products, onEdit, onDelete }) => {
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [isEditing, setIsEditing] = React.useState(false);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setIsEditing(true); // Set editing mode to true
    };

    return (
        <Container>
            <h2>Product List</h2>
            <InputGroup className="mb-3">
                <FormControl placeholder="Search Products" />
            </InputGroup>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Barcode</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.barcode}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.category}</td>
                            <td>
                            <Button variant="warning" onClick={() => {
                                setSelectedProduct(product); // Set the product to edit
                                setIsEditing(true); // Open edit mode}}>Edit</Button>
                            }}>Edit</Button>
                                <Button variant="danger" onClick={() => onDelete(product.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ViewProducts;
