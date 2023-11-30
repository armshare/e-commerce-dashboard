// Inventory.js
import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from '@mui/material';

const Inventory = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A', quantity: 10, price: 50 },
        { id: 2, name: 'Product B', quantity: 15, price: 75 }
    ]);

    const [openDialog, setOpenDialog] = useState(false);
    const [formValues, setFormValues] = useState({
        id: '',
        name: '',
        quantity: '',
        price: '',
    });

    const handleOpenDialog = (product) => {
        setFormValues(product || { id: '', name: '', quantity: '', price: '' });
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleFormChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSaveChanges = () => {
        if (formValues.id) {
            // Update existing product
            const updatedProducts = products.map((product) =>
                product.id === formValues.id ? formValues : product
            );
            setProducts(updatedProducts);
        } else {
            // Add new product
            const newProduct = {
                id: Date.now(),
                ...formValues,
            };
            setProducts([...products, newProduct]);
        }

        handleCloseDialog();
    };

    const handleDeleteProduct = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    return (
        <div className='content'>
            <Button variant="contained" color="primary" onClick={() => handleOpenDialog()}>
                Add Inventory
            </Button>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleOpenDialog(product)}>Edit</Button>
                                    <Button onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>{formValues.id ? 'Edit Product' : 'Add Product'}</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        name="name"
                        value={formValues.name}
                        onChange={handleFormChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Quantity"
                        name="quantity"
                        value={formValues.quantity}
                        onChange={handleFormChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Price"
                        name="price"
                        value={formValues.price}
                        onChange={handleFormChange}
                        fullWidth
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleSaveChanges}>
                        {formValues.id ? 'Save Changes' : 'Add Product'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Inventory;
