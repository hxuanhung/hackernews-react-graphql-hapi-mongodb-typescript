import { gql } from 'react-apollo';
export const ADD_NEW_URL_MUTATION = gql`
mutation submitRepository($repoFullName: String!) {
  submitRepository(repoFullName: $repoFullName) {
    createdAt
  }
}
`;
// TODO: use this
// export const ADD_NEW_URL_MUTATION = gql`
//   mutation addNewUrl($pageUrl: String!) {
//     addNewUrl(pageUrl: $pageUrl) {
//       createdAt
//     }
//   }
// `;
