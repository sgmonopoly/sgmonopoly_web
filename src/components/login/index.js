import React, { Component } from 'react'
import { Card } from 'antd'
import LoginForm from "./loginForm"

class Login extends Component {

  render() {

    return (
      <Card title="三国强手棋" style={{
        width: 300, position: 'absolute', left: '50%', top: '50%',
        transform: 'translateX(-50%) translateY(-50%)', textAlign: 'center'
      }}>
        <LoginForm></LoginForm>
      </Card>
    )
  }
}

export default Login