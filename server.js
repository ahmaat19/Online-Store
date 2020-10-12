const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(morgan('dev'));

// enable files upload
app.use(fileUpload());

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routers/api/users'));
app.use('/api/auth', require('./routers/api/auth'));
app.use('/api/product', require('./routers/api/product'));

const PORT = process.env.PORT || 5010;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
