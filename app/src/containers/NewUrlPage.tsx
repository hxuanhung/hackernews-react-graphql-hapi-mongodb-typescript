import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todos';
import { Header, MainSection } from '../components';
import { RootState } from '../reducers';
import * as style from './App/style.css';

export interface INewUrlPageProps extends RouteComponentProps<void> {
    todos: TodoItemData[];
    actions: typeof TodoActions;
  }

@connect(mapStateToProps, mapDispatchToProps)
export class NewUrlPage extends React.Component<INewUrlPageProps, any> {
  public render() {
    const { todos, actions, children } = this.props;
    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
        {children}
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions as any, dispatch),
  };
}
