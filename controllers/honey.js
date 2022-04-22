const honey = require('../models/honey');
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
exports.honey_detail =async function(req, res) { 
   // for a specific Costume. 

    console.log("detail"  + req.params.id) 
    try { 
        result = await honey.findById( req.params.id) 
        res.send(result) 
    } 
    catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`);  
     } 
} 
 

 
// Handle honey delete on DELETE. 
exports.honey_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await honey.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Costume update form on PUT. 
exports.honey_update_put =async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await honey.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
        if(req.body.description) 
                toUpdate.description = req.body.description; 
        if(req.body.price) 
                toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
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

 // Handle a show one view with id specified by query 
 exports.honey_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await honey.findById( req.query.id) 
        res.render('honeydetail',  
{ title: 'honey Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.honey_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('honeycreate', { title: 'honey Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.honey_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await honey.findById(req.query.id) 
        res.render('honeyupdate', { title: 'honey Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.honey_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await honey.findById(req.query.id) 
        res.render('honeydelete', { title: 'honey Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 

 