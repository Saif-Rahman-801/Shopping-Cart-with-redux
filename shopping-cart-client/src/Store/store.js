import { createStore } from "redux";
import { rootReducers } from "./reducers/rootReducer/root";


export const store = createStore(rootReducers, window.__REDUX_DEVTOOLS__EXTENSION__ && window.__REDUX_DEVTOOLS__EXTENSION__())