const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) =>{ 
    res.render('staff');
})


module.exports = router;