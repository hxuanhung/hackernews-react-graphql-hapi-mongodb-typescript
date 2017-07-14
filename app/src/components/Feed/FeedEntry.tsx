import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IFeedEntryProps {
  key: string;
  loggedIn: boolean;
  link: {
    url: string,
    description: string,
  };
}

export class FeedEntry extends React.Component<IFeedEntryProps, any> {
  public render() {
    const { link, loggedIn } = this.props;
    return (
      <div className='media'>
        <div className='media-body'>
          <h4 className='media-heading'>
            <a>
              {link.url}
            </a>
          </h4>
        </div>
      </div>
    );
  }
}
