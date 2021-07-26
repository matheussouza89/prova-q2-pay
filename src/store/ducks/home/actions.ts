
import store from "../../index";
import { GetAllFilmes } from "../../../controller/homeController";
import { HomeAction, HomeTypes } from "./types";

export const setFilmes = (data: GetAllFilmes) => store.dispatch<HomeAction>({
    type: HomeTypes.SET_DATA_HOME, 
    data
});

export const setLoading = (loading: boolean) => store.dispatch<HomeAction>({
    type: HomeTypes.SET_LOADING,
    loading
})