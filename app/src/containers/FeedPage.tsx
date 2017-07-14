import * as React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Feed, IFeedProps } from '../components/Feed/Feed';
import { FeedEntry } from '../components/Feed/FeedEntry';
import { ADD_NEW_URL_MUTATION } from '../graphql/addNewUrl.graphql';
import { FEED_QUERY } from '../graphql/feed.graphql';
import * as style from './App/style.css';
export interface IFeedPageProps {
  loading: boolean;
  // currentUser: {
  //   login: string,
  // };
  getAllLinksQuery: any;
}
class FeedPage extends React.Component<IFeedPageProps> {
  public render() {
    const { loading, getAllLinks } = this.props.getAllLinksQuery;
    console.log(`links`);
    const links = getAllLinks;
    return (
      <div>
        <h1>Feed page</h1>
        <div>
          <Feed
            entries={links || []}
            loggedIn={false}
          />
          {loading ? <h1> loading</h1> : null}
        </div>
      </div>
    );
  }
}
const ITEMS_PER_PAGE = 10;
const withData = graphql(FEED_QUERY, {
  name: 'getAllLinksQuery',
  options: (ownProps) => {
    return {
      variables: {},
    };
  },
});
export default withData(FeedPage);
