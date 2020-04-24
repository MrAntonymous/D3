var data =   [];

for(var i =0; i< 10; i++){
	// Math.round() round the number
	var num = Math.round(d3.randomUniform(1,50)());  //Math.floor(Math.random()*50);
	data.push(num);
}

//console.log(data);

// Create SVG Element
var chart_width = 800;
var chart_heigth = 400;
var bar_padding = 5;
var svg = 	d3.select('#chart')
			.append('svg')
			.attr('width', chart_width)
			.attr('height',chart_heigth);
// Bind data and create bars
svg.selectAll('#chart')
	.data(data)
	.enter()
	.append('rect')
	.attr('x', function(d, i){
		return i * (chart_width/data.length); //
	})
	.attr('y',function(d){
		return chart_heigth - d*5;
	})
	.attr('width', chart_width / data.length - bar_padding)
	.attr('height', function(d){
		return d * 10;
	})
	.attr('fill', 'blue');

// Create lables
svg.selectAll('text')
	.data(data)
	.enter()
	.append('text')
	.text(function(d){
		return d
	})
	.attr('x', function(d, i){
		return i * 	(chart_width/data.length) +
					(chart_width/data.length - bar_padding) / 2; //
	})
	.attr('y',function(d){
		return chart_heigth - d*5;
	})
	.attr('width', chart_width / data.length - bar_padding)
	.attr('height', function(d){
		return d * 10+15;
	})
	.attr('font-size', 14)
	//.attr('fill', '#000')
	.attr('text-anchor', 'middle');