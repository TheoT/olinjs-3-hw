var mongoose= require('mongoose');

var ingredientSchema= mongoose.Schema({
	name: String,
	cost: Number
});

var orderSchema= mongoose.Schema({
	customerName: String,
	ingredients: [{type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient'}]
});


var Ingredient=mongoose.model('Ingredient',ingredientSchema);
var Order=mongoose.model('Order',orderSchema);

exports.Ingredient=Ingredient;
exports.Order=Order;