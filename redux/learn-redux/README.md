# Lear Redux
Wes Bos tutorial
https://reactforbeginners.com/account/access/586c180a73e59699e1bac2c0
Duration: 5 hours

## First steps
* Copy styles and files from Wes Bos: https://github.com/wesbos/Learn-Redux-Starter-Files
* It uses stylus for CSS (.styl)

## Requirements
* React Dev Tools
* Redux Dev Tools: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

## Notes
* With Redux, we keep all our data on a Store. Instead of having several states, we have one only big store (WTF).
* **Actions**: smth that happens in your application, it dispatches an action, which has two things: the action that happened and info needed. BUT it doesn't update the state...
* **Reducers**: once I get the action, how do I update the data? Reducers handle the updating of our state in our store.
    * We create a reducer for every piece of state (e.g. posts and comments in our case).
    * We can only have one reducer, so we create one only big reducer
    * You can not insert async stuff in your reducers. If you need it, you can either use redux-thunk or redux-sagas: e.g. to call an API. WB: better try sagas before.
    * https://github.com/paularmstrong/normalizr
* Depending on the size, create one actionCreator per file
* **Provider** makes available the Store to any component in our app.
* Each time you dispatch an Action, EVERY reducer will run. Is up to each reducer to be executed or not.
* React.cloneElement(): it allows any Main child to access the props from Main.
* The **ref** elements help us to reference data in the DOM (example in Comments).
* **Reducer composition**: example in Comments
* Error tracking with Sentry.
    * Use tags as well.
    * You can use logException() in order to send additional data
    * showReportDialog()
* Hot reloading Redux Reducers
* Redux Dev Tools


## Firebaes hosting
Project Console: https://console.firebase.google.com/project/reduxstagram-beefb/overview
Hosting URL: https://reduxstagram-beefb.firebaseapp.com


##Interesting
* import CSSTransitionGroup from 'react-addons-css-transition-group';
* Sentry integration
* Hot reloading Redux Reducers
* Redux Dev Tools
* Async calls: redux-thunk or redux-sagas.
* https://github.com/paularmstrong/normalizr

## Doubts
* What is Provider for?