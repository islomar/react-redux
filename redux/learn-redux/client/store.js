import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import default data
import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
    posts,
    comments
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    //rerequire reducers and load it back
    module.hot.accept('./reducers/', () => {
        console.log('Hot reloading the Reducers!!!!')
        // you can not use import inside a function, so we use require()
        const nextRootReducer = require('./reducers/index');
        //This shows a JS warning because of the use of require() inside a function...
        store.replaceReducer(rootReducer);

    });
}

export default store;