import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from "./components/login"
import RoomList from "./components/roomList"
import GameRoom from "./components/gameRoom"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/roomList" component={RoomList}/>
          <Route path="/room/:roomNo" component={GameRoom}/>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))