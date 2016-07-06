import React from 'react'
import { connect } from 'react-redux'
import {login, register} from '../actions/LoginAction'
import LoginFields from '../components/LoginFields'

const mapDispatchToProps = (dispatch, ownProps) =>{
  onSubmitLogin: (this.ownProps.username, this.ownProps.password) => {
    dispatch(login(this.ownProps.username, this.ownProps.password))
  },
  onSubmitReg: (this.ownProps.username, this.ownProps.password) => {
    dispatch(register(this.ownProps.username, this.ownProps.password))
  }
}

LoginForm = connect(mapDispatchToProps)(LoginFields)

export default LoginForm