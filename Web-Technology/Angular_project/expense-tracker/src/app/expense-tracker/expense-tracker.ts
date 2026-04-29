import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-tracker',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './expense-tracker.html',
  styleUrls: ['./expense-tracker.css']
})
export class ExpenseTrackerComponent {

  title: string = "";
  amount: number = 0;
  type: string = "income";

  transactions: { title: string, amount: number, type: string }[] = [];

  addTransaction() {
    if (this.title && this.amount > 0) {
      this.transactions.push({
        title: this.title,
        amount: this.amount,
        type: this.type
      });

      this.title = "";
      this.amount = 0;
      this.type = "income";
    }
  }

  deleteTransaction(index: number) {
    this.transactions.splice(index, 1);
  }

  getTotalIncome() {
    return this.transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
  }

  getTotalExpense() {
    return this.transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  }

  getBalance() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}