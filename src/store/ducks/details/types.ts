import { GetMovieDetails } from "../../../controller/detailsController";

export enum DetailsStore {
    ID_STORE = 'DETAILS'
}

export enum DetailsTypes {
    SET_DATA_DETAILS = "SET_DATA_DETAILS",
    SET_LOADING = "SET_LOADING"
}

export type DetailsAction = {
    idStore?: DetailsStore.ID_STORE
    type: DetailsTypes
    data?: any
    loading?: boolean
}


export interface DetailsState {
    readonly data?: GetMovieDetails | undefined
    loading?: boolean
}