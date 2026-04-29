import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker';

@Component({
  selector:'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,ExpenseTrackerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('expense-tracker');
}
