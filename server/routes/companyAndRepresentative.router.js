const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', async (req,res) => {
    console.log('reached server router for company and representatives');
});

module.exports = router;