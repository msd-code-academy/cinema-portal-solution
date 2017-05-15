import {rootReducer} from './index';

describe('reducers', function () {
  describe('login', function () {
    describe('LOGIN_SUCCESS', function () {
      it('user info is stored', function () {
        const state = rootReducer({
          login: {
            user: null,
            showLoginForm: true,
            loginError: ''
          }
        }, {
          type: 'LOGIN_SUCCESS',
          user: {username: 'john', password: 'abc'}
        });
        expect(state.login).toEqual({
          loginError: '',
          showLoginForm: false,
          user: {
            username: 'john',
            password: 'abc'
          }
        });
      });
    });

    describe('LOGIN_FAIL', function () {
      it('indicates login attempt failed', function () {
        const state = rootReducer({
          login: {
            user: null,
            showLoginForm: true,
            loginError: ''
          }
        }, {
          type: 'LOGIN_FAIL',
          error: {}
        });
        expect(state.login).toEqual({
          user: null,
          showLoginForm: true,
          loginError: 'Login attempt failed.'
        });
      });
    });

    describe('SHOW_LOGIN_FORM', function () {
      it('login form should be opened', function () {
        const state = rootReducer({
          login: {
            user: null,
            showLoginForm: false,
            loginError: ''
          }
        }, {type: 'SHOW_LOGIN_FORM'});
        expect(state.login).toEqual({
          user: null,
          showLoginForm: true,
          loginError: ''
        });
      });
    });

    describe('CLOSE_LOGIN_FORM', function () {
      it('login form should be closed', function () {
        const state = rootReducer({
          login: {
            user: null,
            showLoginForm: true,
            loginError: 'Login attempt failed.'
          }
        }, {type: 'CLOSE_LOGIN_FORM'});
        expect(state.login).toEqual({
          user: null,
          showLoginForm: false,
          loginError: ''
        });
      });
    });
  });
});
