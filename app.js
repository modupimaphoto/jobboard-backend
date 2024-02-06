import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();

import jobsRoutes from './routes/jobsRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/jobs', jobsRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Welcome jobboard"
    })
})

app.listen(port, () => {
    console.log(`Server up running at port ${ port }`);
})
