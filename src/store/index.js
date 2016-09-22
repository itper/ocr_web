import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore(preloaderState){
    const store = createStore(
        rootReducer,//reducer
        preloaderState,//默认state
        compose(
            applyMiddleware(thunk),
            DevTools.instrument()
        )
    )
    if(module.hot){
        module.hot.accept(('../reducers',()=>{
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer)
        }))
    }
    return store;
}