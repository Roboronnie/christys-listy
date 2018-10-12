const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/company', (req,res) => {
    const queryText = `INSERT INTO company (name) VALUES ($1);`;
    const queryValue = [req.body.company];
    pool.query(queryText,queryValue)
        .then(()=>{
            res.sendStatus(201);
        }).catch((error)=>{
            res.sendStatus(500);
            console.log('error posting to company: ', error);
        });
});

router.post('/:company', (req,res) => {
    console.log('reached server router for company and representatives');
    console.log(req.body); // representatives
    console.log(req.params); // company
    // get company ID 
    pool.query(`SELECT company.id from company where company.name = '${req.params.company}'`)
        .then((result)=>{
            console.log('result.rows: ',result.rows); //currently empty array

            // loop through representatives and insert into rep table
            const queryText = `INSERT INTO representatives (name, company_id) VALUES ($1, $2);`;
            const queryValue = [req.body.company];

        }).catch((error)=>{
            console.log('error selecting company id: ', error);
        });
    // insert into rep table with company ID

});

module.exports = router;