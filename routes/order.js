var models=require('../models');
Order=models.Order;
Ingredient=models.Ingredient;

exports.new= function (req,res) {
	Ingredient.find({}).execFind(function(err,ingredientsArray){
		if (err)
			return console.log(err)
		res.render('order', {
			ingredients: ingredientsArray,
			title: 'Please Select Ingredients'
		});
	});
}

exports.show=function(req,res) {
	newOrder=new Order();
	var ingreds=new Array();
	for (var ingred in req.body) {
		ingreds=ingreds.concat(ingred);
	}
	newOrder.ingredients=ingreds;
	newOrder.save(function(err){
		if(err)
			console.log(err)
		Order.find({}).populate('ingredients').execFind(function(err,orderArray){
		res.render('pending_orders',{
			orders:orderArray,
			title: 'All Pending Orders'})
		});
	});
}

exports.showAll=function(req,res){
	Order.find({}).populate('ingredients').execFind(function(err,orderArray){
		res.render('pending_orders',{
			orders:orderArray,
			title: 'All Pending Orders'})
	});
}

exports.remove=function(req,res) {
	console.log("starting post request " + req.body.id);
	Order.findOneAndRemove({_id:req.body.id},function(err,doc){
		//res.send("removed order #"+doc._id);
	})
}