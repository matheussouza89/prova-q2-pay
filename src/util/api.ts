interface Api {
    urlBase: string
    urlSearch: string
    apiKey: string
    urlDetailsMovie: string
}

const api: Api  = {
    urlBase: `https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=`,
    urlSearch: `https://api.themoviedb.org/3/search/movie?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&query=`,
    apiKey: `?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&`,
    urlDetailsMovie: `https://api.themoviedb.org/3/movie/`
}

export default api;