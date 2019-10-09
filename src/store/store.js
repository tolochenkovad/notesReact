import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import notesReducer from '../app/Notes/redux/reducer';
import rootSaga from '../sagas/sagas';
import tagsReducer from "../app/InfoPage/redux-tags/reducer";
import categoriesReducer from "../app/InfoPage/redux-categories/reducer";
import localeReducer from "../utils/translator/localereducer";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['locale']
};


const reducers = combineReducers({
    notes: notesReducer,
    tags: tagsReducer,
    categories: categoriesReducer,
    locale: localeReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore( persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)) );

export let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;