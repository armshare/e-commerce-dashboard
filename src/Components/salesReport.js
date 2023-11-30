// SalesReport.js
import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
} from '@mui/material';

const SalesReport = () => {
    const [filter, setFilter] = useState('');
    const [salesData, setSalesData] = useState([
        { id: 1, productName: 'Product A', quantity: 100, amount: 500 },
        { id: 2, productName: 'Product B', quantity: 150, amount: 750 },
        { id: 3, productName: 'Product AB', quantity: 150, amount: 750 }
    ]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredSalesData = salesData.filter((item) =>
        item.productName.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className='content'>
            <TextField
                label="Filter by Product Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={filter}
                onChange={handleFilterChange}
            />

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredSalesData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.productName}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default SalesReport;
