var express = require('express'); 
const honey_controlers= require('../controllers/honey'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', honey_controlers.honey_view_all_Page );

/* GET detail honey page */ 
router.get('/detail', honey_controlers.honey_view_one_Page); 

/* GET create honey page */ 
router.get('/create', honey_controlers.honey_create_Page); 

/* GET create update page */ 
router.get('/update', honey_controlers.honey_update_Page); 
/* GET delete honey page */ 
router.get('/delete', honey_controlers.honey_delete_Page); 
module.exports = router; 