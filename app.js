// api key for TMDB
const api ="api_key=0d7fcb538472b4a248392fdaf9ae8532";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;

// img url
const banner_url = "https://image.tmdb.org/t/p/original";

const img_url = "https://image.tmdb.org/t/p/w300"; 

// requests for movies data
const requests = {
    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

//used to truncante the string
function truncante(str,n) {
    return str.length>n ? str.substr(0,n-1)+"..." : str;
}

//banner
fetch(requests.fetchNetflixOrignals)
    .then((res) =>res.json())
    .then((data)=>{
        
        const setMovie = data.results[Math.floor( Math.random()* (data.results.length-1))];

        let banner = document.querySelector("#banner");
        let banner_title = document.querySelector("#banner_title");
        let banner_des =document.querySelector("#banner_description");

        banner.style.backgroundImage= "url(" + banner_url + setMovie.backdrop_path + ")";
        banner_title.innerText = setMovie.name;
        banner_des.innerText = truncante(setMovie.overview,150);

    });

//Movies
fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    .then((data) => {

        const headrow = document.querySelector("#headrow");

        const row = document.createElement("div");
        row.className="row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);

        const  title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "NETFLIX ORIGINALS";
        row.appendChild(title);

        const row_poster = document.createElement("div");
        row_poster.className = "row_posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            let s =movie.name.replace(/\s+/g,"");

            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });

//Tranding Movie
fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {
        
        const headrow = document.querySelector("#headrow");

        const row = document.createElement("div");
        row.className="row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);

        const  title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "TRANDING MOVIES";
        row.appendChild(title);

        const row_poster = document.createElement("div");
        row_poster.className = "row_posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            
            const poster = document.createElement("img");
            poster.className = "row_posterLarge";

            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });

//Action Movies
fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        
        const headrow = document.querySelector("#headrow");

        const row = document.createElement("div");
        row.className="row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);

        const  title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Action Movies";
        row.appendChild(title);

        const row_poster = document.createElement("div");
        row_poster.className = "row_posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            
            const poster = document.createElement("img");
            poster.className = "row_poster";

            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });

//Comedy Movies
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())
    .then((data) => {
        
        const headrow = document.querySelector("#headrow");

        const row = document.createElement("div");
        row.className="row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);

        const  title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Comedy Movies";
        row.appendChild(title);

        const row_poster = document.createElement("div");
        row_poster.className = "row_posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            
            const poster = document.createElement("img");
            poster.className = "row_poster";

            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });

//Horror Movies
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {
        
        const headrow = document.querySelector("#headrow");

        const row = document.createElement("div");
        row.className="row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);

        const  title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Horror Movies";
        row.appendChild(title);

        const row_poster = document.createElement("div");
        row_poster.className = "row_posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            
            const poster = document.createElement("img");
            poster.className = "row_poster";

            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });

//Romance Movies
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())
    .then((data) => {
        
        const headrow = document.querySelector("#headrow");

        const row = document.createElement("div");
        row.className="row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);

        const  title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Romance Movies";
        row.appendChild(title);

        const row_poster = document.createElement("div");
        row_poster.className = "row_posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            
            const poster = document.createElement("img");
            poster.className = "row_poster";

            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });

//Documentaries
fetch(requests.fetchDocumentaries)
    .then((res) => res.json())
    .then((data) => {
        
        const headrow = document.querySelector("#headrow");

        const row = document.createElement("div");
        row.className="row";
        row.classList.add("netflixrow");
        headrow.appendChild(row);

        const  title = document.createElement("h2");
        title.className = "row_title";
        title.innerText = "Documentaries";
        row.appendChild(title);

        const row_poster = document.createElement("div");
        row_poster.className = "row_posters";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            
            const poster = document.createElement("img");
            poster.className = "row_poster";

            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });
    });

window,addEventListener("scroll",()=>{

    let nav = document.querySelector(".nav");
    nav.classList.toggle("active",window.scrollY > 0);
})