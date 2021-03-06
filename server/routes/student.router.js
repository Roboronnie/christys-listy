const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', async (req,res) => {
    req.body.forEach(async element => {
        const queryText = `INSERT INTO students (student) VALUES ($1);`;
        const queryValue = [element.name];
        await pool.query(queryText,queryValue)
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            res.sendStatus(500);
            console.log('error posting new students', error);
        });
    });
});


router.get('/', (req,res) => {
    const queryText = `SELECT * FROM students`;
    pool.query(queryText)
        .then((result)=>{
            res.send(result.rows);
            console.log(result.rows);
        }).catch((error)=>{
            console.log('error getting students', error);
            res.sendStatus(500);
        });
});

module.exports = router;