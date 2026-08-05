const express = require('express');
const cors= require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('🚀 WebFusion API is running...');
});

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});