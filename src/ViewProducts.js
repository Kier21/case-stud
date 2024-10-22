import React, { useEffect, useState } from 'react';
import { Table, Button, InputGroup, FormControl, Container } from 'react-bootstrap';

const ViewProducts = ({ onDelete }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');


    //FETCH ALL THE PRODUCT FROM OUR BACKEND
    useEffect(() => {
        const fetchData = () => {
            fetch('http://127.0.0.1:8000/api/products/')
                .then(response => response.json())
                .then(data => setData(data)) 
                .catch(error => console.error('Error fetching data:', error));
        };
        fetchData();
    }, []);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setIsEditing(true);
    };


    //FILTERED BY PROUDCT BARCODE
    const filteredProducts = data.filter(product =>
        product.barcode.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Container>
            <h2>Product List</h2>
            <InputGroup className="mb-3">
                <FormControl
                        placeholder="Search Products"
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
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
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.barcode}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.category}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEditClick(product)}>
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => onDelete(product.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ViewProducts;
