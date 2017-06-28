import React from 'react'
import {connect} from 'react-redux';
import * as actions from '../../actions';

class TodoFilter extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        var {dispatch, showCompleted, searchText} = this.props;

        return (
            <div>
                <div className="row">
                    <div className="shrink large-11 medium-11 small-12 large-centered column">
                        <form>
                            <div className="row">
                                <input
                                    type="text"
                                    ref="search"
                                    placeholder="Search todos"
                                    value={searchText}
                                    onChange={(e) => {
                                    var searchText = this.refs.search.value;
                                    dispatch(actions.setSearchText(searchText));
                                }}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="shrink large-11 medium-11 small-12  column text-left">
                        <input
                            className="input"
                            ref="completed"
                            checked={showCompleted}
                            id="completed"
                            onChange={(e) => {
                            var showCompleted = this.refs.completed.checked;
                            this
                                .props
                                .dispatch(actions.toggleShowCompleted(showCompleted));
                        }}
                            type="checkbox"
                            name="completed"/>
                        <label htmlFor="completed">Show completed todos</label>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default connect((state, ownProps) => {
    return {showCompleted: state.showCompleted, searchText: state.searchText};

})(TodoFilter);