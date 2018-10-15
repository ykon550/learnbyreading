import React from 'react';

const style = {
    color: '#5f8e26',
    fontFamily: 'serif',
    fontWeight: 'lighter',
    fontSize: '1.5em'
}

class Navigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchWord: ''
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light border-bottom border">
                <div className="container row">
                    <a className="navbar-brand" href="#" style={style}> Learn by Reading</a>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => this.props.setPage('words')}>Words </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => this.props.setPage('settings')}>Settings</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )

    }
}

export default Navigation;