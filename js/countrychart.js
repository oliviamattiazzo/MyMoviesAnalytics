function countContryVotes() {
	arrCountries = [];
	
	arrTitleInfo.forEach(function(element) {
		var movieCountry = getsMainCountry(element.Country);
		
		const filteredMoviesCountries = arrCountries.filter(el => el.Label == movieCountry);

		if(filteredMoviesCountries.length == 0) {
			arrCountries.push({ Label: movieCountry, Counter: 1 });
		}

		filteredMoviesCountries.forEach(el => el.Counter++);
	});
}

function generateCountryChart() {
	countContryVotes();

	document.getElementById("canvas-holder").innerHTML = '&nbsp;';
	document.getElementById("canvas-holder").innerHTML = '<canvas id="graphCountry"></canvas>';
	var ctx = document.getElementById("graphCountry").getContext('2d');

	setValueNumberOfMoviesCounter(arrTitleInfo.length);
	setValueTimeWatchingMoviesCounter();

	countryChart = new Chart(ctx, {
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

	arr = arrCountries.map(function(vote){
		if (index.toUpperCase() == "L")
			return vote.Label
		else
			return vote.Counter;
	});

	return arr;
}

function getsMainCountry(moviesCountry) {
	const splitCountries = moviesCountry.split(",");

	if (splitCountries.length == 0)
		return moviesCountry;
	return splitCountries[0].trim();
}