import data from "./data.js";

// CV Iterator

function CVIterator(profiles) {
	let nextIndex = 0;
	return {
		next: function () {
			return nextIndex < profiles.length
				? { value: profiles[nextIndex++], done: false }
				: { done: true };
		},
	};
}

let candidates = CVIterator(data);

next.addEventListener("click", (e) => {
	nextCV();
	next.innerText = "next";
});

function nextCV() {
	const currentCandidate = candidates.next().value;
	let image = document.getElementById("img");
	let profile = document.getElementById("profile");

	if (currentCandidate != undefined) {
		image.innerHTML = `<img src='${currentCandidate.image}'>`;
		profile.innerHTML = `<ul class="list-group">
			<li class="list-group-item">Name: ${currentCandidate.name}</li>
			<li class="list-group-item">${currentCandidate.age} years old</li>
			<li class="list-group-item">Lives in ${currentCandidate.city}</li>
			<li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
			<li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
 		 </ul>`;
	} else {
		alert("End of candidate applications");
		window.location.reload();
	}
}
