import React, { Component } from 'react'
import { Layout, Card } from 'antd'
import loginBackgroundImg from "../../imgs/login_background.jpeg"
import LoginForm from "./loginForm"

const { Content } = Layout

class Login extends Component {

  render() {

    return (
      <Layout>
        <Content style={{ 
          backgroundImage: `url(${loginBackgroundImg})`,
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          height: '650px',
          position: 'relative'}}>
          <Card title="三国强手棋" style={{ width: 300, position: 'absolute', left: '50%', top: '50%', 
            transform: 'translateX(-50%) translateY(-50%)', textAlign: 'center' }}>
            <LoginForm></LoginForm>
          </Card>
        </Content>
      </Layout>
    )
  }
}

export default Login