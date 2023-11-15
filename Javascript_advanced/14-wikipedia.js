function createElement(data) {
	let paragraph = document.createElement("p");
	paragraph.textContent = data;
	document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
	let request = new XMLHttpRequest();

	request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);

	request.onload = function() {
		let data = JSON.parse(request.responseText);
		callback(data.query.pages[21721040].extract);
	};

	request.send();
}

queryWikipedia(createElement);
