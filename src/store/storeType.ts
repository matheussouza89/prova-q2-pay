import { DetailsState } from "./ducks/details/types";
import { HomeState } from "./ducks/home/types";

export default interface AppState {
    home: HomeState
    details: DetailsState
}