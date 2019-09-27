import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import notesReducer from '../app/Notes/redux/reducer';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();


const reducers = combineReducers({
    notes: notesReducer
});

const store = createStore( reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)) );

sagaMiddleware.run(rootSaga);

export default store;