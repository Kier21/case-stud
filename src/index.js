import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css'; // Your custom styles
import ViewProduct from './ViewProducts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ViewProduct />); // DID CHANGE THIS ONE TO CHECK IF THE GET PRODUCT IS WORKING
