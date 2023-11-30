
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart, Line } from 'react-chartjs-2'

ChartJS.register(...registerables);
const GrowthChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [500, 300, 600, 660, 200, 450, 700],
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'category',
                labels: data.labels,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
}
const Overview = () => {
    return (<>

        <Grid container spacing={2} className='content'>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">ยอดขายรวม</Typography>
                        350,000
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">จำนวนสินค้าที่ขายได้</Typography>
                        20,000
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h5">จำนวนลูกค้าใหม่</Typography>
                        +1500
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <GrowthChart />
            </Grid>

        </Grid>

    </>


    );
}

export default Overview;
