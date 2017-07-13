import { gql } from 'react-apollo';
export const ADD_NEW_URL_MUTATION = gql`
mutation addLink($url: String!, $description: String!) {
  addLink(url: $url, description: $description) {
    id
  }
}
`;
