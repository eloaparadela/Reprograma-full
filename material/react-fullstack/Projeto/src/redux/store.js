import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from './reducers'

const componeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, componeEnhancers(applyMiddleware(thunk))) 
  
export default store