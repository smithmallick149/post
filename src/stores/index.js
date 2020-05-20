import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { myReducer } from './myReducer'
import logger from 'redux-logger'
import rootSaga from '../sagas'



const rootReducer = combineReducers({
    myReducer
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(rootSaga)


export default store
