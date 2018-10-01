const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req,res) => {
    console.log(`inside '/api/student'`);
})

module.exports = router;