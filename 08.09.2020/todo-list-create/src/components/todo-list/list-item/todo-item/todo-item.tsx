import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'todo-item',
})
export class TodoList {
  @Prop() description: any;
  @Prop() toggleEdit: boolean;
  @Event() changeIsDone: EventEmitter;

  createDescFild() {
    return this.description.description ? <button>{`>`}</button> : null;
  }
  editBtn() {
    return this.toggleEdit ? <button>Edit</button> : null;
  }

  render() {
    return [
      <div>
        {this.createDescFild()}
        <input type="checkbox" checked={this.description.isDone} onChange={() => this.changeIsDone.emit({ id: this.description.id, value: !this.description.isDone })} />
        <span style={this.description.isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{this.description.title}</span>
        {this.editBtn()}
      </div>,
    ];
  }
}
