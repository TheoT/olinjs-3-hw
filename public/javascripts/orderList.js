function deleteItem(obId){
	$.post("/order/delete", {id: obId});
	$("."+obId).remove();
}

$(function () {
	$('.del_order').submit(function(eventArgs){
		console.log($('.del_order').serialize());
		$.post("/order/delete", $('.del_order').serialize());
		return false;
	})
})

