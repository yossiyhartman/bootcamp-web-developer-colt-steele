const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const moviesList = document.querySelector("#moviesList");

const getMovies = async (query) => {
	try {
		let response = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
		return response.data;
	} catch (error) {
		console.log("OOPS!", error);
	}
};

const presentMovies = (movies) => {
	// const limit = movies.length <= 10 ? movies.length : 10;

	for (let idx in movies) {
		// for (let idx = 0; idx < limit; idx++) {
		let src = movies[idx].show.image;

		if (src !== null) {
			let img = document.createElement("img");
			img.src = src.medium;
			img.classList.add("w-52", "rounded-xl");
			moviesList.appendChild(img);
		}
	}
};

const search = function (event) {
	event.preventDefault();

	moviesList.replaceChildren();

	if (searchInput.value !== "") {
		const movies = getMovies(searchInput.value);
		movies.then((data) => {
			console.log(data);
			presentMovies(data);
		});
	}

	searchInput.value = "";
};

searchForm.addEventListener("submit", search);
