var Honey = require('../models/honey'); 
 
// List of all Honey
exports.honey_list = async function(req, res) { 
    try{ 
        theHoney = await Honey.find(); 
        res.send(theHoney); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// for a specific Costume. 
exports.honey_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Honey detail: ' + req.params.id); 
}; 
 

 
// Handle Costume delete form on DELETE. 
exports.honey_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Honey delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.honey_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Honey update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.honey_view_all_Page = async function(req, res) { 
    try{ 
        theHoney = await Honey.find(); 
        res.render('honey', { title: 'Honey Search Results', results: theHoney }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.honey_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Honey(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.description = req.body.description; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 