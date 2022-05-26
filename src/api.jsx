const API_KEY = "53ed71481998b25123d848328213ad51";
export const categories = [
    {
        name:"trending",
        title:"Em Alta",
        path: `trending/all/week?api_key=${API_KEY}&language-pt-BR`,
    },
    {
        name:"netflixOriginals",
        title:"Originais Netflix",
        path: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name:"topRated",
        title:"Populares",
        path: `movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name:"comedy",
        title:"Comédias",
        path: `discover/tv?api_key=${API_KEY}&with_genres=35`,
    },
    {
        name:"romances",
        title:"Romanticos",
        path: `discover/tv?api_key=${API_KEY}&with_genres=99`,
    },
]
export const getMoves = async (path)=>{
    try {
        let url =`https:/api.themoviedb.org/3/${path}`;
        const response = await fetch(url);
        return await responde.json();
    } catch (error){
        console.log("erro no meu getMovies (API.JSX): ",error);

    }
}

