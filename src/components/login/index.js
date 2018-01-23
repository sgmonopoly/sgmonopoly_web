import React, { Component } from 'react'
import { Card } from 'antd'
import LoginForm from "./form"

import "./login.css"

class Login extends Component {

  render() {

    return (
      <Card title="三国强手棋" className="login_main_card" style={{
        width: 300
      }}>
        <LoginForm></LoginForm>
      </Card>
    )
  }
}

export default Login