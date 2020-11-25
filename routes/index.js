const express = require('express');
const router = express.Router();

const cat = require('../models/CatSchema');
const product = require('../models/productSchema');
const banner = require('../models/bannerSchema');
const tempcart = require('../models/tempcSchema');
const fs = require('fs');

const log_router = require('./api/login');
const home = require('./api/Home');
const userData = require('./api/UserData');
const Cart = require('./api/Cart');
const pro_router = require('./api/Products');

router.get('/', async (req, res) => {
  const s = await cat.find().exec();
  const w = await product.find({ todayspl: 'true' }).exec();
  const offer = await product.find({ offer_price: { $gte: 1 } }).exec();
  const tempc = await tempcart.find({
    remote_ip: req.connection.remoteAddress,
  });
  let d = [];
  for (let j = 0; j < w.length; j++) {
    for (let l = 0; l < s.length; l++) {
      if (w[j].cname == s[l].title) {
        console.log(w[j].cname);
        console.log(s[l].title);
        d.push({
          pname: w[j].title,
          cname: w[j].cname,
          description: w[j].description,
          p_photo: w[j].path,
          c_photo: s[l].path,
        });
      }
    }
  }
  const b = await banner.find();
  res.json({ d: d, b: b, offer: offer, tempc: tempc });
});
//menu
router.get('/menu', async (req, res) => {
  const c = await cat.find().exec();
  const w = await product.find().exec();
  res.json({ cat: c, pro: w });
});

router.get('/ip/', async (req, res) => {
  try {
    fs.unlinkSync(
      'client/public/assets/images/uploads/0d607ce0-1b46-11eb-bab5-c591102c04ac.jpeg'
    );
    res.send('deleted');
  } catch (err) {
    res.json(err);
  }
});

//offer
router.get('/menu', async (req, res) => {
  const offer = await product.find({ offer_price: { $gte: 1 } }).exec();
  res.json(offer);
});

router.use('/login', log_router);
router.use('/home', home);
router.use('/user', userData);
router.use('/cart', Cart);
router.use('/product', pro_router);

module.exports = router;
