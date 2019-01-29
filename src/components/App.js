import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import NewQuestion from './NewQuestion'
import Question from './Question'
import Leaderboard from './Leaderboard'

const NoMatch = ({ location }) => (
  <div>
    <h3>
      404 - No match for <code>{location.pathname}</code>
    </h3>
  </div>
)

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  requireLogin = () => {
    if (!this.props.authedUser) {
      return <Redirect to='/login' />
    }
  }

  render() {
    const { authedUser } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav user={authedUser} />
            {this.props.loading === true ? null : (
              <div>
                <Switch>
                  <Route
                    path='/'
                    exact
                    component={Home}
                    onEnter={this.requireLogin}
                  />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/login' component={Login} />
                  <Route path='/question/:id' component={Question} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
