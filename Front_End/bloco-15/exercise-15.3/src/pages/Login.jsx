import React from "react";
import { connect } from "react-redux";
import { sendLoginData } from "../redux/actions";

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    logged: false,
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value})
  }

  handleLogin = () => {
    console.log('TRY TO LOGIN')
    const { logInFunction, history } = this.props;
    const { email, password } = this.state;
    if( email === 'joao.gomeshugill@gmail.com' && password === '3021') {
      logInFunction({ ...this.state, logged: true });
      history.push('/clients');
    } else {
      this.setState(() => ({ logged: undefined }));
    }
  }

  render() {
    const { logged } = this.state;
    return (
      <>
        <input type="email" name="email" id="email" onChange={ this.handleChange } />
        <input type="password" name="password" id="password" onChange={ this.handleChange } />
        <button onClick={ this.handleLogin}>
          Log in
        </button>
        { logged === false ? '' : 'TA ERRADO SEU HACKER SAFADO'}
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logInFunction: (state) => dispatch(sendLoginData(state))
})

export default connect(null, mapDispatchToProps)(Login);
