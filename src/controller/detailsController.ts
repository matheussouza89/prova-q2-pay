import axios from "axios"
import api from "../util/api"
import * as detailsActions from "../store/ducks/details/actions"

export interface GetMovieDetails{
    adult: boolean
    backdrop_path: string | null
    belongs_to_collection: string | null
    budget: number
    genres: Genres[]
    homepage: string | null
    id: number
    imdb_id: string | null
    original_language: string
    original_title: string
    overview: string | null
    popularity: number
    poster_path: string | null
    production_companies: Companies[]
    production_countries: Countries[]
    release_date: string
    revenue: number
    runtime: number | null
    spoken_languages: SpokenLanguages[]
    status: string
    tagline: string | null
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

interface Genres {
    id: number
    name: string
}

interface Companies {
    name: string
    id: number
    logo_path: string | null
    origin_country: string
}

interface Countries {
    iso_3166_1: string
    name: string
}

interface SpokenLanguages {
    iso_639_1: string
    name: string
}

interface Messages {
    status_message?: string
    status_code?: number
}

export function getMovieDetails(idFilme: string) {
    axios.get<GetMovieDetails>(api.urlDetailsMovie + idFilme + api.apiKey).then((response) =>{
        detailsActions.setFilme(response.data)
    }
    ).catch((e: Messages) =>{
        console.log(e.status_code)
    }
    ).finally(() =>{

    }
    )
}