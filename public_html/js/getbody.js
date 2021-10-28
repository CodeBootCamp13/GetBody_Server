let xhr = new XMLHttpRequest();
xhr.open('get', '/weight');
xhr.onload = function() {
	// display the weights
	let weights = JSON.parse( this.responseText );
	let output = '';
	let days = [];
	let weightArray = [];
	for ( let i = 0; i < weights.length; i++ ) {
		let d = new Date( weights[i].date );
		let dateString = (d.getMonth() + 1) + '/' + d.getDate() + '/' + (d.getFullYear());
		days.push(dateString);
		weightArray.push(weights[i].weight);
		output = output + 
			`<li><strong class="weight">${weights[i].weight}</strong><span id="unit">lbs</span> - ${dateString}</li>`;
	}
	document.getElementById('weightList').innerHTML = output;

	// chart the output

	// charting example
	const ctx = document.getElementById('myChart').getContext('2d');
	days.reverse();
	weightArray.reverse();
	const data = {
		labels: days,
		datasets: [{
			label: 'My Weight',
			data: weightArray,
			fill: false,
			borderColor: 'rgb(75, 192, 192)',
			tension: 0.1
		}]
	};

	const myChart = new Chart(ctx, {
		type: 'line',
		data: data,
		borderColor: 'rgba(125,255,125,1)',
		fill: true
		
	});



}
xhr.send();



