import {Component, h, State, Listen} from "@stencil/core";
import {TodoItem} from "./models";

@Component({
  tag: "todo-list"
})
export class TodoList {
  @State() todoList: TodoItem[] = [
    {
      id: new Date(),
      title: 'test',
      description: '',
      isDone: true
    }
  ];
  @State() buttonText: string = 'only read';
  changeButtonText(){
    if(this.buttonText == 'only read'){
      this.buttonText = 'not only read';
    } else {
      this.buttonText = 'only read';
    }
  }
  @Listen("changeIsDone")
  isDoneChange(e){
    const {id, value} = e.detail;

    const idx = this.todoList.findIndex(item => item.id === id);
    this.todoList[idx].isDone = value;
    this.todoList[idx] = {...this.todoList[idx]};
    this.todoList = [...this.todoList];

    console.log('isDoneChange', this.todoList[idx])
  }

  addItem(title: string){
      this.todoList = [...this.todoList, {id: new Date(),title, description: "", isDone: false}];
      console.log(this.todoList)
  }

  deleteAllItems(){
    this.todoList = []
  }

  render() {
    return [
      <h1>Todo list</h1>,
      <button onClick={() => this.changeButtonText()}>{this.buttonText}</button>,
      <list-item todoList={this.todoList}/>,
      <todo-creator addTodoItem={(title: string) => this.addItem(title)} deleteAllTodoItem={() => this.deleteAllItems()}/>
    ]
  }
}
