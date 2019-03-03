function countContryVotes() {
	arrCountries = [];
	arrTitleInfo.forEach(function(element) {
		var movieCountry = element.Country;
		if (arrCountries.some(el => el.Label == movieCountry)) {
			arrCountries.forEach(function(element){
				if (element.Label == movieCountry)
					element.Counter++;
			});
		}
		else
		{
			arrCountries.push({ Label: movieCountry, Counter: 1 });
		}
	});
}

function generateCountryChart() {
	var ctx = document.getElementById("graphCountry").getContext('2d');

	var myChart = new Chart(ctx, {
	type: 'pie',
	data: {
		labels: generateListLabelOrCounter("L"),
		datasets: [{
			data: generateListLabelOrCounter("C"),
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
				'rgba(255,99,132,1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			]
		}]
	}});
}

function generateListLabelOrCounter(index) {
	var arr = [];

	arrCountries.forEach(function(element){
		if (index.toUpperCase() == "L") 
			arr.push(element.Label);

		if (index.toUpperCase() == "C")
			arr.push(element.Counter);
	});

	return arr;
}