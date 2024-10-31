import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './Reducer'
import rootSaGa from './Saga'

const sagaMiddleware = createSagaMiddleware();
const middleware = compose(applyMiddleware(sagaMiddleware));
const store = createStore(reducer,middleware);

sagaMiddleware.run(rootSaGa)
export default store