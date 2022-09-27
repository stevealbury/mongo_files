populate = function(area, start, stop){
	for(var i = start; i < stop; i++){
		var country = 1 + (( Math.random() * 8) << 0);
	        var num = (country + 1e10) + (area * 1e7) + i;
	        var full_num = " +" + country + " " + area + "-" + i;
	        db.phones.insertOne({
			_id: full_num ,
			components: {
                            country: country,
			    area: area,
			    prefix: (i * 1e-4) << 0,
			    number: i
			},
			display: full_num
	                });
		print("Inserted num " + full_num)
	} 
	print("Done!");
}
