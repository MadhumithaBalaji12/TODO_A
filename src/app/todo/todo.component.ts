import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: { name: string, completed: boolean }[] = [];
  newTask: string = '';
  message: string = '';

  ngOnInit(): void {
    // Load tasks from local storage
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }

    // Check if all tasks are completed
    this.checkAllCompleted();
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask.trim(), completed: false });
      this.newTask = '';
      this.saveTasks();
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
    this.checkAllCompleted();
  }

  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks();
    this.checkAllCompleted();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  checkAllCompleted() {
    if (this.tasks.length > 0 && this.tasks.every(task => task.completed)) {
      this.tasks = []; // Clear tasks
      this.message = 'Done for the day'; // Display message
      localStorage.removeItem('tasks'); // Remove from local storage
    } else {
      this.message = ''; // Clear message if not all tasks are completed
    }
  }
}
