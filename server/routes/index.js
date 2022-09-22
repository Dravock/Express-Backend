const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');

const router = express.Router();

// GET REQUEST
router.get('/', async (request, resolve, next) => {
    console.log('hier')
    try{
        let results = await db.all();
        resolve.json(results);
    }catch(err){
        console.error(err);
        resolve.sendStatus(500)
    }
});

router.get('/:id', async (request, resolve, next) => {
    try{
        let results = await db.one(request.params.id);
        resolve.json(results);
    }catch(err){
        console.error(err);
        resolve.sendStatus(500)
    }
});


// POST REQUEST
router.post('/', async (request, resolve, next) => {
    var hashedPW
    const { vorname,nachname,email,password } = request.body;
    try{
        if(password){
            var hashedPW = await bcrypt.hash(password,10);
        }
        const dbPostData ={vorname,nachname,email,hashedPW}
        let results = await db.post (dbPostData);
        resolve.json(results);
    }catch(err){
        console.error(err);
        resolve.sendStatus(500)
    }
});

// PUT REQUEST

// DELETE REQUEST


module.exports = router;