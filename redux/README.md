# Redux

## Notes
* Redux is an implementation of the Flux architecture.
* Very small, ~2Kb
* Framework/library agnostic: you can use it with Angular, Polymer, React...
* It decouples the global application state from the visual part (the components).
* Based it thre core concepts:
    * One only "source of truth": it exists only one Store (WTF)
    * The State is read-only:
        * in order to update it, you use the **Actions**.
        * The Actions are usually created through an Action Creator.
    * Changes with pure functions: **reducers**.
        * A Reducer is a function which receives two parameters, an initial State and an Action, and it executes a specific operation on the State. It's always immutable, we can not modify the State, so we create a copy from it.
        * Isn't it somehow the Flux dispatcher?
* API de Redux:
    * createStore()
        * store.dispatch(action): it emits an Action, it's the only way to update the State
        * store.subscribe(listener): subscribe to updates. The listener will be called each time an Action is emitted and a piece of the State is updated.
    * combineReducers()
        * It's a good practice to have **several reducers** (one for each piece of the State), combining them into a single one which can be passed as parameter when creating the store.
    * applyMiddleware()
        * A **Middleware** is a function executed between emitting an action and updating the State.
        * We can apply several ones, one of the most popular is Redux-Thunk (it allows to write action creators that return a function instead of an action).
    * bindActionCreators()
        * it binds the **dispatch()** of the Store with the Action Creators, so that we don't have to import the Store everywhere where we need to emit an action.
    * compose()
        * Depending on the type of middlewares included when creating the Store, we might need to join them so that it works correctly.



## Flux
* https://carlosazaustre.es/blog/como-funciona-flux
* It's an architecture
* **Unidirectional** data flux
* There can be several **Stores**
* There are no methods on the Stores to modify its data: you do it through dispatchers and actions
* **Action**:
    * a JS object which expresses the intention to do something, having data (a payload) associated.
* **Dispatcher**:
    * actions are sent to a dispatcher, which triggers/propagates it to the Store
    * it decouples the Store from the View, so that you don't have to know which Store handles a specific action.
* **View**:
    * it sends the actions to the dispatcher
* Process:
    * La vista, mediante un evento envía una acción con la intención de realizar un cambio en el estado
    * La acción contiene el tipo y los datos (si los hubiere) y es enviada al dispatcher.
    * El dispatcher propaga la acción al Store y se procesa en orden de llegada.
    * El Store recibe la acción y dependiendo del tipo recibido, actualiza el estado y notifica a las vistas de ese cambio.
    * La vista recibe la notificación y se actualiza con los cambios.


## Interesting links
* https://carlosazaustre.es/blog/como-funciona-redux-conceptos-basicos
* https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
* https://www.mapbox.com/blog/redux-for-state-management-in-large-web-apps/
