import React, { Component } from 'react';
import {connect} from 'react-redux';
//import logo from './logo.svg';
//import './App.css';

class Applied extends Component {
  render() {
        if (!this.props.job) {
            return (<div> You have not applied for any job</div>);
        }
        return (
            <div>
                <h2>{this.props.job.name}</h2>
                <h3>Exp: {this.props.job.experience}</h3>
                <h3>skillset: {this.props.job.skillset}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        job: state.job
    };
}

export default connect(mapStateToProps)(Applied);
