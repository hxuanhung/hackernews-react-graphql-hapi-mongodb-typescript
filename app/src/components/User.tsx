import * as React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { RouteComponentProps, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as toastr from 'toastr';
import { USER_QUERY } from '../graphql/queries/user.graphql';
import * as style from './App/style.css';
import { gql } from 'react-apollo';
import * as authActions from '../actions/auth.actions';
import { IRootState } from '../reducers';
import { IAuthReducer } from '../reducers/auth.reducer';
interface IUserProps {
  auth: IAuthReducer;
  actions: typeof authActions;
}

@connect(mapStateToProps, mapDispatchToProps)
export class User extends React.Component<IUserProps, any> {
  constructor() {
    super();
  }
  public login = () => {
    this.props.actions.login();
  }
  public logout = () => {
    this.props.actions.logout();
  }
  public render() {
    const { actions, auth } = this.props;

    if (auth.currentUser) {
      return (
        <span>
          <p className='navbar-text navbar-right'>
            {auth.currentUser.login}
            &nbsp;
            <button onClick={this.logout}>Logout</button>
          </p>
        </span>
      );
    } else {
      return (
        <p className='navbar-text navbar-right'>
          <button onClick={this.login}>Login with Github</button>
        </p>
      );
    }
  }
}
function mapStateToProps(state: IRootState) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions as any, dispatch),
  };
}

// const withData = graphql(USER_QUERY, {
//   options: {
//     fetchPolicy: 'cache-and-network',
//   },
//   props: ({ data: { loading, currentUser } }) => ({
//     loading, currentUser,
//   }),
// });
// export default withData(User);

// export default User;
