const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(morgan('dev'));

// Enable files upload
app.use(fileUpload());

// Define Routes
app.use('/api/users', require('./routers/api/users'));
app.use('/api/auth', require('./routers/api/auth'));
app.use('/api/product', require('./routers/api/product'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5010;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
