import { GetAllFilmes } from "../../../controller/homeController";

export enum HomeStore {
    ID_STORE = 'HOME'
}

export enum HomeTypes {
    SET_DATA_HOME = "SET_DATA_HOME",
    SET_LOADING = "SET_LOADING"
}

export type HomeAction = {
    idStore?: HomeStore.ID_STORE
    type: HomeTypes
    data?: any
    loading?: boolean
}


export interface HomeState {
    readonly data?: GetAllFilmes | undefined
    loading?: boolean
}