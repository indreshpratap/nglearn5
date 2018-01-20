import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-looping',
    templateUrl: './loop.component.html',
    styleUrls: ['./loop.component.scss']
})
export class LoopComponent {
    todoItem: string;

    todos: string[] = [];
    completedTodos: string[] = [];

    todoObj: any[] = [];

    addItem() {
        if (this.todoItem) {
            this.todos.push(this.todoItem);
            this.todoObj.push({ todo: this.todoItem, done: false });
            this.todoItem = '';

            // let indx = -1;
            // for(let todo of this.todos){
            //     console.log(++indx, todo);
            // }
            // console.log(this.todos);
        } else {
            alert("Input todo first!");
        }
    }

    markDone(index, item) {
        this.completedTodos.push(item);
        this.todos.splice(index, 1);


    }
    deleteTodo(index) {
        this.completedTodos.splice(index, 1);
    }

}