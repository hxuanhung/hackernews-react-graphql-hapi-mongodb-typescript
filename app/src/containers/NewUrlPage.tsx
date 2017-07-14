import * as React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { RouteComponentProps, browserHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as toastr from 'toastr';
import { ADD_NEW_URL_MUTATION } from '../graphql/addNewUrl.graphql';
import * as style from './App/style.css';
export interface INewUrlPageProps {
  add: (url: string, descpription: string) => Promise<any>;
}
class NewUrlPage extends React.Component<INewUrlPageProps, any> {
  constructor() {
    super();
    this.state = {};

    this.addUrl = this.addUrl.bind(this);
  }
  public addUrl(event) {
    event.preventDefault();
    const { add } = this.props;
    const url = event.target.url.value;
    const descpription = 'repoFullName';

    return add(url, descpription).then((res) => {
      console.log(`add page Url`, res);
      if (!res.errors) {
        console.log(`no error`);
        browserHistory.push('/feed/new');
      } else {
        this.setState({ errors: res.errors });
      }
    }).catch((error) => {
      toastr.error(error);
    });
  }

  public render() {
    const { errors } = this.state;
    return (
      <div>
        <h1>Add a new page</h1>

        <form onSubmit={this.addUrl}>
          <div className='form-group'>
            <label htmlFor='url'>Page Url</label>

            <input
              type='text'
              className='form-control'
              id='url'
              name='url'
              placeholder='Enter a url here'
            />
          </div>

           {errors &&
            <div className='alert alert-danger' role='alert'>
              {errors[0].message}
            </div>}

          <button type='submit' className='btn btn-primary'>
            Add Url
          </button>
        </form>
      </div>
    );
  }
}

const withData = graphql(ADD_NEW_URL_MUTATION, {
  props: ({ mutate }) => ({
    add: (url, description) =>
      mutate({
        variables: { url, description },
      }),
  }),
});
export default withData(NewUrlPage);
