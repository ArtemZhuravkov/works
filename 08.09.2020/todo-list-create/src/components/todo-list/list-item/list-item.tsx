import { Component, h, Prop } from '@stencil/core';
import { TodoItem } from '../models';

@Component({
  tag: 'list-item',
})
export class ListItem {
  @Prop() todoList: TodoItem[] = [];
  @Prop() toggleEdit: boolean;

  render() {
    return (
      <div style={{ display: ' flex', flexDirection: 'column' }}>
        {this.todoList.map((item: TodoItem) => {
          return <todo-item toggleEdit={this.toggleEdit} key={item.id.toString()} description={item} />;
        })}
      </div>
    );
  }
}
