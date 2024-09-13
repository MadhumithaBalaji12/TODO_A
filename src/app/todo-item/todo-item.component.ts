import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: { name: string; completed: boolean }; // Input to receive the todo from parent
  @Output() deleteTask = new EventEmitter<void>();  // Emit event for deletion
  @Output() toggleComplete = new EventEmitter<void>();  // Emit event for toggling task completion

  onDelete() {
    this.deleteTask.emit();  // Emit delete event
  }

  onToggleComplete() {
    this.toggleComplete.emit();  // Emit toggle event
  }
}
