import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  Link
} from 'react-router-dom';
import {Menu, Button} from 'semantic-ui-react';
import {
  login,
  logout,
  closeLoginForm,
  showLoginForm
} from '../actions/login';
import LoginDialog from './../components/LoginDialog';

class HeaderMenu extends Component {
  constructor (props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin (credentials) {
    this.props.onLogin(credentials);
  }

  getMenuItem(path, label, isHeader = false) {
    return ({match}) => {
      return (
        <Link to={path}>
          <Menu.Item
            header={isHeader}
            as='div'
            active={Boolean(match)}
          >{label}</Menu.Item></Link>
      );
    };
  }

  renderLoginButton () {
    return (
      <Button primary onClick={this.props.onShowLoginForm}>Login</Button>
    );
  }

  renderUserInfo () {
    return (
      <span>
        <span>{this.props.user.username}</span>
        <em
          style={{cursor: 'pointer', marginLeft: '5px', display: 'inline-block'}}
          onClick={this.props.onLogOut}
        >(logout)</em>
      </span>
    );
  }

  render () {
    const {
      user,
      showLoginForm,
      onCloseLoginForm,
      loginError
    } = this.props;

    return (
      <div>
        {showLoginForm && <LoginDialog
          onClose={onCloseLoginForm}
          onSubmit={this.handleLogin}
          error={loginError}
        />}
        <Menu>
          <Route
            exact
            path='/'
            children={this.getMenuItem('/', 'BIO EAR cinema', true)}
          />
          <Route
            path='/checkout'
            children={this.getMenuItem('/checkout', 'Checkout')}
          />
          <Menu.Item position='right'>{user ? this.renderUserInfo() : this.renderLoginButton()}</Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.login.user,
  showLoginForm: state.login.showLoginForm,
  loginError: state.login.loginError
});

const mapDispatchToProps = {
  onLogin: login,
  onLogOut: logout,
  onCloseLoginForm: closeLoginForm,
  onShowLoginForm: showLoginForm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderMenu);