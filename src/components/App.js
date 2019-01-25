import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import NewQuestion from './NewQuestion'
import Question from './Question'
import Leaderboard from './Leaderboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData('tylermcginnis'))
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className='container'>
          {this.props.loading === true ? null : <Leaderboard />}
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
