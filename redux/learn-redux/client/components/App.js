import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// we add all the action creators and the State to Main
// inject the data of the Store into any component that might actually need it
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;