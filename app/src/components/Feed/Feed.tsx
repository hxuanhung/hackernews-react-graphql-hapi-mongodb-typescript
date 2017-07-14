import * as React from 'react';
import { Link } from 'react-router-dom';
import { FeedEntry, IFeedEntryProps } from './FeedEntry';
export interface IFeedProps {
  entries: any[];
  loggedIn: boolean;
}

export class Feed extends React.Component<IFeedProps, any> {
  constructor(props?: IFeedProps, context?: any) {
    super(props, context);
  }

  public render() {
    const { entries, loggedIn } = this.props;
    return (
      <div>
        {entries.map(
          (entry) =>
            entry
              ? <FeedEntry
                  key={entry.url}
                  link={entry}
                  loggedIn={loggedIn}
              />
              : null,
        )}
      </div>
    );
  }
}
