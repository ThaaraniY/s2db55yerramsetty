var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var honey_controller = require('../controllers/honey'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/honey', honey_controller.honey_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/honey/:id', honey_controller.honey_delete); 
 
// PUT request to update Costume. 
router.put('/honey/:id', honey_controller.honey_update_put); 
 
// GET request for one Costume. 
router.get('/honey/:id', honey_controller.honey_detail); 
 
// GET request for list of all Costume items. 
router.get('/honey', honey_controller.honey_list); 
 
module.exports = router; 