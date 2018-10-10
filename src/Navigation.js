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
            <nav className="navbar navbar-expand-lg fixed-top bg-light border-bottom border">
                <div className="container row">
                    <div className="navbar-header col-6">
                        <a className="navbar-brand" href="/" style={style}> Learn by Reading</a>
                    </div>

                </div>
            </nav>
        )

    }
}

export default Navigation;