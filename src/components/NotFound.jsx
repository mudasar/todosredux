import React, {Component, PropTypes} from 'react'

class NotFound extends Component {
    render() {
        return (
            <div className="callout alert ">
                <h5>Error!</h5>
                <p>The page you are looking for couldn't be found.</p>
                <a href="#">It's dangerous to go alone, take this.</a>
            </div>
        )
    }
}

NotFound.propTypes = {}

export default NotFound;