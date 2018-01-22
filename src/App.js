import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from "./components/login"
import RoomList from "./components/roomList"
import GameRoom from "./components/gameRoom"
import { Layout } from 'antd'
import loginBackgroundImg from "./imgs/login_background.jpeg"

const { Content } = Layout

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Content style={{ 
              backgroundImage: `url(${loginBackgroundImg})`,
              backgroundRepeat: 'no-repeat', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              height: '650px',
              position: 'relative'}}>
              <Route exact path="/" component={Login} />
              <Route exact path="/roomList" component={RoomList}/>
              <Route path="/room/:roomNo" component={GameRoom}/>
            </Content>
          </Layout>
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