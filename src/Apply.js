import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectJob} from './actions/index'

class Apply extends Component {
  renderList() {
      return this.props.joblist.map((job) => {
          return (
              <li key={job.job_id}
              onClick={() => this.props.selectJob(job)}
              >
                <a > {job.job_name} {job.location} click to apply </a>
              </li>
          );
      });
  }
  render() {
    return (
      <ul>
                {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
    return {
        joblist: state.joblist
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectJob:selectJob}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Apply);
