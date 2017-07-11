import * as React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { ADD_NEW_URL_MUTATION } from '../../graphql/addNewUrl.graphql';
import * as style from './App/style.css';
export interface INewUrlPageProps {
  add: (pageUrl: string) => any;
}

export class NewUrlPage extends React.Component<INewUrlPageProps, any> {
  public addUrl(event) {
    event.preventDefault();
    console.log(`add url`);
    const { add } = this.props;
    const pageUrl = event.target.pageUrl.value;

    return add(pageUrl).then((res) => {
      console.log(`add page Url`);
      // if (!res.errors) {
      //   browserHistory.push('/feed/new');
      // } else {
      //   this.setState({ errors: res.errors });
      // }
    });
  }

  public render() {
    return (
      <div>
        <h1>Add a new page</h1>

        <form onSubmit={this.addUrl}>
          <div className='form-group'>
            <label htmlFor='pageUrl'>Page Url</label>

            <input
              type='text'
              className='form-control'
              id='pageUrl'
              name='pageUrl'
              placeholder='Enter a url here'
            />
          </div>

          {/* {errors &&
            <div className='alert alert-danger' role='alert'>
              {errors[0].message}
            </div>} */}

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
    add: (pageUrl) =>
      mutate({
        variables: { pageUrl },
      }),
  }),
});
export default withData(NewUrlPage);
