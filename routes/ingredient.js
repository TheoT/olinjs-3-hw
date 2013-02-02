var models=require('../models');

Ingredient=models.Ingredient;

exports.new = function(req, res){
  res.render('new_ingredient',{title:'Add New Ingredient'});
};

exports.create=function(req,res){
	newIngred= new Ingredient();
	newIngred.name=req.body.add_ingredient;
	newIngred.cost=req.body.add_price;
	newIngred.save(function (err) {
		if (err)
			return console.log('error saving new ingredient');
		res.send('Congrats on adding the ingredient "'+req.body.add_ingredient+'"');
	});
	
};