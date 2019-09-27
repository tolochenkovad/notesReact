import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();


const reducers = combineReducers({

});

const store = createStore( reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)) );

// sagaMiddleware.run(rootSaga);

export default store;