var express = require('express'); 
const honey_controlers= require('../controllers/honey'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', honey_controlers.honey_view_all_Page ); 
module.exports = router; 