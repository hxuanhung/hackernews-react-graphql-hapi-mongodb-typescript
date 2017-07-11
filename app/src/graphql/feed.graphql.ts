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
query Feed($type: FeedType!, $offset: Int, $limit: Int) {
  # Eventually move this into a no fetch query right on the entry
  # since; we; literally; just; need; this; info; to; determine; whether; to;
  # show; upvote/downvote; buttons;
 currentUser {
    login
  }
 feed(type: $type, offset: $offset, limit: $limit) {
    ...FeedEntry
  }
}
`;
