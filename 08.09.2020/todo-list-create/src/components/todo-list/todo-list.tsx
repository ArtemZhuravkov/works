import { Component, h, State, Listen } from '@stencil/core';
import { TodoItem } from './models';

@Component({
  tag: 'todo-list',
})
export class TodoList {
  @State() todoList: TodoItem[] = [
    {
      id: new Date(),
      title: 'test',
      description: 'art',
      isDone: true,
    },
    {
      id: new Date(),
      title: 'test',
      description: '',
      isDone: true,
    },
  ];
  @State() buttonText: string = 'only read';
  @State() toggleEdit: boolean = false;

  changeButtonText() {
    switch (this.toggleEdit) {
      case false:
        this.toggleEdit = true;
        this.buttonText = 'not only read';
        break;
      case true:
        this.toggleEdit = false;
        this.buttonText = 'only read';
        break;
      default:
        this.toggleEdit = false;
        break;
    }
  }

  @Listen('changeIsDone')
  isDoneChange(e) {
    const { id, value } = e.detail;
    const idx = this.todoList.findIndex(item => item.id === id);

    this.todoList[idx].isDone = value;
    this.todoList[idx] = { ...this.todoList[idx] };
    this.todoList = [...this.todoList];
  }

  addItem(title: string) {
    this.todoList = [...this.todoList, { id: new Date(), title, description: '', isDone: false }];
    console.log(this.todoList);
  }

  deleteAllItems() {
    this.todoList = [];
  }

  render() {
    return [
      <h1>Todo list</h1>,
      <button onClick={() => this.changeButtonText()}>{this.buttonText}</button>,
      <list-item toggleEdit={this.toggleEdit} todoList={this.todoList} />,
      <todo-creator addTodoItem={(title: string) => this.addItem(title)} deleteAllTodoItem={() => this.deleteAllItems()} />,
    ];
  }
}
