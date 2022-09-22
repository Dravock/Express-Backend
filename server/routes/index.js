const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (request, resolve, next) => {
    try{
        let results = await db.all();
        resolve.json(results);
    }catch(err){
        console.error(err);
        resolve.sendStatus(500)
    }
});

module.exports = router;




