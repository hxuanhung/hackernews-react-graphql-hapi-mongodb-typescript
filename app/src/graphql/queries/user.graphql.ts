import { gql } from 'react-apollo';
export const USER_QUERY = gql`
query CurrentUserForLayout {
  currentUser {
    login
    avatar_url
  }
}
`;
