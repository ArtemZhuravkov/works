import {Component, h, Prop, EventEmitter, Event, State} from "@stencil/core";
// import {TodoItem} from "../../models";

@Component({
  tag: "todo-item"
})
export class TodoList {
  btn = 'edit';
  @State() showEdit = false;
  @Prop() description: any;
  
  // showEditBtn(){
  //   this.showEdit = true;
  // }
  @Event() changeIsDone: EventEmitter;

  render() {  
    let edit = null;
    if(this.showEdit){
    edit = (<button>{this.btn}</button>)
    }
    return [
      <input type="checkbox" checked={this.description.isDone} onChange={() => this.changeIsDone.emit({id: this.description.id, value: !this.description.isDone})} />,
      <span style={this.description.isDone ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{this.description.title}</span>, 
      <button onClick={() => this.showEdit = true}>add edit btn</button>,
       <div>
        {edit}
       </div> 
    ]
  }
}
