import {createStore, Store} from "redux";
import rootReducer from "./ducks/rootReducer";


const store: Store = createStore(rootReducer);

export default store;