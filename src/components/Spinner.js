import React from 'react';
import './Spinner.css';

class Spinner extends React.Component {
    render() {
        if (this.props.loading || this.props.loading === undefined) {
            return (
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            )
        } else {
            return (
                <span></span>
            )
        }
    }
}

export default Spinner;