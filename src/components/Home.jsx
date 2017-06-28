import React, {Component, PropTypes} from 'react'
import logo from '../logo.svg';

class Home extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) {}

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate(prevProps, prevState) {}

    componentWillUnmount() {}

    render() {
        return (

            <div className="row">
                <div className="large-10 medium-10 small-12 columns">
                    
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to React</h2>
                    </div>
                    <div className="row">
                        <div className="large-12 medium-12 columns">
                            <h1>Home Page</h1>
                            <p>This is test content.</p>

                            <div className="App">
                        <p className="App-intro">
                            To get started, edit
                            <code>src/App.js</code>
                            and save to reload.
                        </p>
                    </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

Home.propTypes = {}

export default Home;