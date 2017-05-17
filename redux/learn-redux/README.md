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
* Actions: smth that happens in your application, it dispatches an action, which has two things: the action that happened and info needed. BUT it doesn't update the state...
* Reducers: once I get the action, how do I update the data? Reducers handle the updating of our state in our store.
    * We create a reducer for every piece of state (e.g. posts and comments in our case).
    * We can only have one reducer, so we create one only big reducer
* Depending on the size, create one actionCreator per file
* **Provider** makes available the Store to any component in our app.

## Bookmark
Video 8/20
https://reactforbeginners.com/account/access/586c180a73e59699e1bac2c0/view/1c093acaa6

## Doubts
* What is Provider for?