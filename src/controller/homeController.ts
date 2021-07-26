import api from "../util/api";
import axios from "axios";
import * as homeActions from "../store/ducks/home/actions"

export interface GetAllFilmes {
    data?: Data,
    page?: number,
    results?: Results[],
    total_pages?: number,
    total_results?: number
}

interface Data {
    maximum: Date,
    minimum: Date
}

interface Results {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: Date,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export function getAllFilmes(page : number) {
    homeActions.setLoading(true)
    axios.get<GetAllFilmes>(`${api.urlBase}${page}`).then(response => {
        homeActions.setFilmes(response.data)
    }).catch(err => {

    }).finally(() => {
        homeActions.setLoading(false)
    })
}

export function searchFilme(pesquisa: string){
    homeActions.setLoading(true)
    axios.get<GetAllFilmes>(`${api.urlSearch}${pesquisa}`).then(response => {
        homeActions.setFilmes(response.data)
    }).catch(err => {

    }).finally(() => {
        homeActions.setLoading(false)
    })
}

export function getOnlyFilme() {
    
}