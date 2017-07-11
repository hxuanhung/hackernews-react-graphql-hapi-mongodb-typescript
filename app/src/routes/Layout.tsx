import * as React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { NavbarLink } from '../components/NavbarLink/NavbarLink';

export interface ILayoutProps extends RouteComponentProps<void> {
  params: {
    type: string;
  };
}

export class Layout extends React.Component<ILayoutProps, any> {
  public render() {
    const { children } = this.props;
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container'>
            <div className='navbar-header'>
              <Link className='navbar-brand' to='/app'>
                GitHunt
              </Link>
            </div>

            <ul className='nav navbar-nav'>
              <NavbarLink
                title='App'
                href='/app'
              />
              <NavbarLink title='Add new Url' href='/add' />
            </ul>
          </div>
        </nav>
        {children}
      </div>
    );
  }
}
