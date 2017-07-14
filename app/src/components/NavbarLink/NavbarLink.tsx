import * as React from 'react';
import { Link } from 'react-router-dom';

export interface INavbarLinkProps {
  title: string;
  href: string;
  // active: boolean;
}

export class NavbarLink extends React.Component<INavbarLinkProps, any> {
  constructor(props?: INavbarLinkProps, context?: any) {
    super(props, context);
  }

  public render() {
    return (
      <li >
        <Link to={this.props.href}>
          {this.props.title}
        </Link>
      </li>
    );
  }
}
