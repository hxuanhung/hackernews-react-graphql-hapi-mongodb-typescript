import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as toastr from 'toastr';
import { Link } from 'react-router';

import { CREATE_USER_MUTATION, SIGNIN_USER_MUTATION } from '../graphql/queries/user.graphql';
import { APP_USER_ID, APP_AUTH_TOKEN } from '../constants/constants';

import * as style from './App/style.css';
export interface IUserProps {
  signinUserMutation: ({
    variables: object,
  }) => Promise<any>;
  createUserMutation: ({ variables: object }) => any;
  history: any;
}
export interface IUserState {
  email: string;
  name: string;
  password: string;
  login: boolean;
}
class User extends React.Component<IUserProps, IUserState> {
  constructor() {
    super();
    this.state = {
      login: false,
      email: '',
      name: '',
      password: '',
    };
  }
  public setName = (e) => {
    this.setState({ name: e.target.value });
  }
  public setEmail = (e) => {
    this.setState({ email: e.target.value });
  }
  public setPassword = (e) => {
    this.setState({ password: e.target.value });
  }

  public switchMode = () => {
    this.setState({ login: !this.state.login });
  }

  public confirm$ = async () => {
    console.log(`confirm`);
    const { name, email, password } = this.state;
    if (this.state.login) {
      const result = await
        this.props.signinUserMutation({
          variables: {
            email,
            password,
          },
        });
      const id = result.data.signinUser.user.id;
      const token = result.data.signinUser.token;
      this.saveUserData$(id, token);
    } else {
      const result = await
        this.props.createUserMutation({
          variables: {
            name,
            email,
            password,
          },
        });
      const id = result.data.signinUser.user.id;
      const token = result.data.signinUser.token;
      this.saveUserData$(id, token);
    }
    // this.props.history.push(`/`);
  }

  saveUserData$ = (id: any, token: string) => {
    localStorage.setItem(APP_USER_ID, id);
    localStorage.setItem(APP_AUTH_TOKEN, token);
  }

  public render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <div className='flex flex-column'>
          {!this.state.login &&
            <input
              value={name}
              onChange={this.setName}
              type='text'
              placeholder='Your name'
            />}
          <input
            value={email}
            onChange={this.setEmail}
            type='text'
            placeholder='Your email address'
          />
          <input
            value={password}
            onChange={this.setPassword}
            type='password'
            placeholder='Choose a safe password'
          />
        </div>
        <div className='flex mt3'>
          <div className='pointer mr2 button' onClick={this.confirm$}>
            {this.state.login ? 'login' : 'create Account'}
          </div>
          <div className='pointer button' onClick={this.switchMode}>
            {this.state.login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }),
  graphql(SIGNIN_USER_MUTATION, { name: 'signinUserMutation' }),
)(User);
