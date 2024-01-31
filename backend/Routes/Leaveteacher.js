// Assuming your Express app is defined and initialized somewhere else in your code.

const express = require('express');
const router = express.Router();
const client = require('../connection');

router.get('/', async (req, res) => {
    try {
        const result = await client.db('schoolmanagement').collection('leaveteacher').find({}).toArray();
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});





module.exports = router;
