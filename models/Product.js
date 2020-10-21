const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  stock: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imageSource: {
    fileName: {
      type: String,
    },
    mimeType: {
      type: String,
    },
    fileSize: {
      type: String,
    },
    filePath: {
      type: String,
    },
  },
  status: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('product', ProductSchema);
