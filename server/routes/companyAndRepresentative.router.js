const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/company', (req, res) => {
    const queryText = `INSERT INTO company (name) VALUES ($1);`;
    const queryValue = [req.body.company];
    pool.query(queryText, queryValue)
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            res.sendStatus(500);
            console.log('error posting to company: ', error);
        });
});

router.post('/:company', (req, res) => {
    const representativeList = req.body.representatives;
    pool.query(`SELECT company.id from company where company.name = '${req.params.company}'`)
        .then(async (result) => {
            const companyId = result.rows[0].id;
            representativeList.forEach( async rep => {
                const queryText = `INSERT INTO representatives (name, company_id) VALUES ($1, $2);`;
                const queryValue = [rep.name, companyId];
                await pool.query(queryText, queryValue)
                    .then(() => {
                        res.sendStatus(201);
                    }).catch((error) => {
                        res.sendStatus(500);
                        console.log('error posting rep and company to rep table');
                    });
            });
        }).catch((error) => {
            console.log('error selecting company id: ', error);
        });
});

router.get('/', (req, res) => {
    const queryText = `SELECT company.id as company_id, company.name as company_name, representatives.name as representative_name, 
        representatives.id as representative_id from company JOIN representatives ON company.id = representatives.company_id;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('error getting company and representatives: ', error);
        });
});

module.exports = router;