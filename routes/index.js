'use strict';

// パッケージの読み込み
const express = require('express');
const router = express.Router();

/* ホームページ */
router.get('/', (req, res, next)=>{
  res.render('index', {user: req.user});
});

module.exports = router;
