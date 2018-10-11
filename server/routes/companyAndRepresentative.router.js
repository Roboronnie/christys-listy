const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', async (req,res) => {
    console.log('reached server router for company and representatives');
    console.log(req.body);
    // { company: 'homi',
//   representatives: [ { name: 'kevin' }, { name: 'mai yer' } ] }
    console.log(req.body.company);
    console.log(req.body.representatives);
    const queryText = `INSERT INTO company (name) VALUES ($1);`;
    const queryValue = [req.body.company];
    pool.query(queryText,queryValue)
        .then(() => {
            console.log('here are the representatives: ', req.body.representatives);
            // select company ID from company table and insert rep into rep table using company ID 
         })
        .catch((error) => {
            res.sendStatus(500);
            console.log('error posting new company', error);
        });
});

module.exports = router;