import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IFeedEntryProps {
  key: string;
  loggedIn: boolean;
  entry: {
    repository: {
      full_name: string,
    },
};
}

export class FeedEntry extends React.Component<IFeedEntryProps, any> {
  public render() {
    return (
      <div className='media'>
        <div className='media-body'>
          <h4 className='media-heading'>
            <a>
              `URL`
            </a>
          </h4>
        </div>
      </div>
    );
  }
}
