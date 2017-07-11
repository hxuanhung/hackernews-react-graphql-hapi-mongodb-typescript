import * as React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {Feed, IFeedProps} from '../../components/Feed/Feed';
import {FeedEntry} from '../../components/Feed/FeedEntry';
import { ADD_NEW_URL_MUTATION } from '../../graphql/addNewUrl.graphql';
import { FEED_QUERY } from '../../graphql/feed.graphql';
import * as style from './App/style.css';
export interface IFeedPageProps {
  loading: boolean;
  // currentUser: {
  //   login: string,
  // };
}

class FeedPage extends React.Component<IFeedPageProps, any> {
  public render() {
    const { loading } = this.props;
    return (
      <div>
        <h1>Feed page</h1>
        <div>
          {/* <Feed
            entries={feed || []}
            loggedIn={!!currentUser}
          /> */}
          {/* {loading ? <Loading /> : null} */}
        </div>
      </div>
    );
  }
}
const ITEMS_PER_PAGE = 10;
const withData = graphql(FEED_QUERY, {
  options: (props) => ({
    variables: {
      type: 'TOP',
      offset: 0,
      limit: ITEMS_PER_PAGE,
    },
    fetchPolicy: 'cache-and-network',
  }),
  props: ({ data: { loading } }) => ({
    loading,
  }),
});
// export default withData(FeedPage);
