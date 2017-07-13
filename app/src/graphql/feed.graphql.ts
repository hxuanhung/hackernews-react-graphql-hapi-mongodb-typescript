import {gql} from 'react-apollo';

export const FEED_FRAGMENT = gql`
fragment FeedEntry on Entry {
  id
  commentCount
  repository {
    full_name
    html_url
    owner {
      avatar_url
    }
  }
  ...VoteButtons
  ...RepoInfo
}

fragment VoteButtons on Entry {
  score
  vote {
    vote_value
  }
}

fragment RepoInfo on Entry {
  createdAt
  repository {
    description
    stargazers_count
    open_issues_count
  }
  postedBy {
    html_url
    login
  }
}
`;
export const FEED_QUERY = gql`
query AllLinksQuery($first: Int, $skip: Int) {
  getAllLinks(first: $first, skip: $skip) {
    id
    url
    description
    postedBy {
      id
      name
    }
  }
}
`;
