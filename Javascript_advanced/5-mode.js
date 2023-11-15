function changeMode(size, weight, transform, background, color) {
	return function () {
		document.body.style.fontSize = size + 'px';
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	}
}

function main() {
	const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
	const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
	const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

	var paragraph = document.createElement("p");
	paragraph.textContent = "Welcome Holberton!";
	document.body.appendChild(paragraph);

	var spookyButt = document.createElement("button");
	spookyButt.textContent = "Spooky";
	spookyButt.onclick = spooky;
	document.body.appendChild(spookyButt);

	var darkButt = document.createElement("button");
	darkButt.textContent = "Dark mode";
	darkButt.onclick = darkMode;
	document.body.appendChild(darkButt);

	var screamButt = document.createElement("button");
	screamButt.textContent = "Scream mode";
	screamButt.onclick = screamMode;
	document.body.appendChild(screamButt);
}

main();
