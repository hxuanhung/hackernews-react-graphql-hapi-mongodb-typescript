import * as React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as toastr from 'toastr';
import { USER_QUERY } from '../graphql/queries/user.graphql';
import * as style from './App/style.css';
import { Link } from 'react-router';
import { gql } from 'react-apollo';
export interface IUserProps {
  loading: boolean;
  currentUser: {
    login: string;
  };
}
class User extends React.Component<IUserProps, any> {
  public render() {
    const { loading, currentUser } = this.state;

    if (loading) {
      return <p className='navbar-text navbar-right'>Loading...</p>;
    } else if (currentUser) {
      return (
        <span>
          <p className='navbar-text navbar-right'>
            {currentUser.login}
            &nbsp;
            <a href='/logout'>Log out</a>
          </p>
          <Link
            type='submit'
            className='btn navbar-btn navbar-right btn-success'
            to='/submit'
          >
            <span className='glyphicon glyphicon-plus' aria-hidden='true' />
            &nbsp; Submit
          </Link>
        </span>
      );
    }
    return (
      <p className='navbar-text navbar-right'>
        <a href='/login/github'>Log in with GitHub</a>
      </p>
    );
  }
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
const PROFILE_QUERY = gql`
  query CurrentUserForLayout {
    currentUser {
      login
      avatar_url
    }
  }
`;

// export default graphql(PROFILE_QUERY, {
//   options: {
//     fetchPolicy: 'cache-and-network',
//   },
//   props: ({ data: { loading, currentUser } }) => ({
//     loading,
//     currentUser,
//   }),
// })(User);
