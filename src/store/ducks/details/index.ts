
import { Reducer } from "redux";
import {DetailsAction, DetailsState, DetailsTypes} from "./types";

const INITIAL_STATE: DetailsState = {
    data: {
        adult: false,
        backdrop_path: "",
        belongs_to_collection: "",
        budget: 0,
        genres: [],
        homepage: null,
        id: 0,
        imdb_id: null,
        original_language: "",
        original_title: "",
        overview: null,
        popularity: 0,
        poster_path: "",
        production_companies: [],
        production_countries: [],
        release_date: "",
        revenue: 0,
        runtime: null,
        spoken_languages: [],
        status: "",
        tagline: null,
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0
    },
    loading: false,
}

const reducer: Reducer<DetailsState, DetailsAction> = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case DetailsTypes.SET_DATA_DETAILS :
            return {...state, data: action.data }
        case DetailsTypes.SET_LOADING :
            return {...state, loading: action.loading }
        default:
            return state
    }
}

export default reducer;