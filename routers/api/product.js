const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const fs = require('fs');
const path = require('path');

const Product = require('../../models/Product');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    GET api/product
// @desc     Get all product
// @access   Private
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ date: -1 })
      .populate('user', ['name']);
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/product
// @desc     Create a product
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Product name is required').not().isEmpty(),
      check('category', 'Category is required').not().isEmpty(),
      check('stock', 'Stock is required').not().isEmpty(),
      check('price', 'Price is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (req.files === null)
      return res.status(400).json({
        errors: [
          {
            msg: 'Product image is required',
            param: 'imageSource',
            location: 'files',
          },
        ],
      });

    const { name, category, stock, price, status, description } = req.body;
    const imageSource = req.files.imageSource;

    try {
      const productExist = await Product.findOne({
        name: name,
      });

      if (productExist) {
        return res.status(401).json({
          errors: [{ msg: 'This product already exist' }],
        });
      }

      const reqData = {
        fileName: Date.now() + imageSource.name,
        mimeType: imageSource.mimetype,
        fileSize: imageSource.size,
        filePath: `/uploads/${Date.now() + imageSource.name}`,
      };

      if (
        // reqData.mimeType !== 'image/png' ||
        reqData.mimeType !== 'image/jpeg'
      ) {
        return res.status(400).json({
          errors: [{ msg: 'Please, upload only JPEG, JPG, PNG images' }],
        });
      }

      // move file to uploads directory
      imageSource.mv(
        path.join(
          __dirname,
          '...',
          `../../../client/public/uploads/${reqData.fileName}`
        )
      );

      const product = new Product({
        name,
        stock,
        price,
        status,
        description,
        user: req.user.id,
        category,
        imageSource: reqData,
      });

      await product.save();

      res.json(
        await Product.find().sort({ date: -1 }).populate('user', ['name'])
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    PUT api/product
// @desc     Update a product
// @access   Private
router.put(
  '/:id',
  [
    auth,
    checkObjectId('id'),
    [
      check('name', 'Product name is required').not().isEmpty(),
      check('category', 'Category is required').not().isEmpty(),
      check('stock', 'Stock is required').not().isEmpty(),
      check('price', 'Price is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (req.files === null)
      return res.status(400).json({
        errors: [
          {
            msg: 'Product image is required',
            param: 'imageSource',
            location: 'files',
          },
        ],
      });

    const { name, category, stock, price, status, description } = req.body;
    const imageSource = req.files.imageSource;

    try {
      const productExist = await Product.findById(req.params.id);

      const reqData = {
        fileName: Date.now() + imageSource.name,
        mimeType: imageSource.mimetype,
        fileSize: imageSource.size,
        filePath: `/uploads/${Date.now() + imageSource.name}`,
      };

      if (reqData.mimeType !== 'image/png') {
        return res.status(400).json({
          errors: [{ msg: 'Please, upload only JPEG, JPG, PNG images' }],
        });
      }

      fs.unlink(
        path.join(
          __dirname,
          '...',
          `../../../client/public/uploads/${productExist.imageSource.fileName}`
        ),
        (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
        }
      );

      // move file to uploads directory
      imageSource.mv(
        path.join(
          __dirname,
          '...',
          `../../../client/public/uploads/${reqData.fileName}`
        )
      );

      await Product.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            name,
            stock,
            price,
            status,
            description,
            user: req.user.id,
            category,
            imageSource: reqData,
          },
        }
      );

      res.json(
        await Product.find().sort({ date: -1 }).populate('user', ['name'])
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/product
// @desc     Update a product
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  const id = req.params.id;

  try {
    const productExist = await Product.findById({ _id: id });

    fs.unlink(
      path.join(
        __dirname,
        '...',
        `../../../client/public/uploads/${productExist.imageSource.fileName}`
      ),
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
      }
    );

    await Product.remove({ _id: id });

    res.json(
      await Product.find().sort({ date: -1 }).populate('user', ['name'])
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
