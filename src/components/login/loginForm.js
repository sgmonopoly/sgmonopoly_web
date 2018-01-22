import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { userLogin } from "../../api/http/user"
import { Redirect } from 'react-router-dom'
import "./login.css"

const FormItem = Form.Item;

class LoginForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      redirectToRoomList: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const result = await userLogin(values.userName)
          this.saveUserInfo(result.data.userId)
          this.setState({redirectToRoomList: true})
        } catch (e) {
          this.props.form.setFields({
            userName: {
              errors: [e]
            }
          })
        }
      }
    })
  }

  /**
   * 保存用户id到本地,用来传参
   * @param userId
   */
  saveUserInfo(userId) {
    const ls = window.localStorage
    ls.removeItem("sgm_userId")
    ls.setItem("sgm_userId", userId)
  }

  render() {
    if (this.state.redirectToRoomList) {  
      return <Redirect to="/roomList"/>
    }

    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [
              { required: true, message: '请输入昵称!'},
              { max: 8, message: '昵称过长!'}
            ],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="游戏昵称" />
            )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            进入游戏
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(LoginForm)