
import store from "../../index";
import { GetMovieDetails } from "../../../controller/detailsController";
import { DetailsAction, DetailsTypes } from "./types";

export const setFilme = (data: GetMovieDetails) => store.dispatch<DetailsAction>({
    type: DetailsTypes.SET_DATA_DETAILS, 
    data
});

export const setLoading = (loading: boolean) => store.dispatch<DetailsAction>({
    type: DetailsTypes.SET_LOADING,
    loading
})