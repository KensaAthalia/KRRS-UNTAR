const express = require('express')
const router = express.Router()

router.get('/adminHome',(req,res) =>{
    //check user session
    res.render('pages/admin/adminHome');
})


module.exports = router;