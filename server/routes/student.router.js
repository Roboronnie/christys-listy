const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req,res) => {
    for(let i = 0; i < req.body.length; i++){
        const queryText = `INSERT INTO students (student) VALUES ($1);`;
        const queryValues = [req.body[i].name];
        pool.query(queryText,queryValues)
            .then(() => { res.sendStatus(201); })
            .catch((error) => {
                res.sendStatus(500);
                console.log('error posting new students', error);
            });
    };
});

module.exports = router;