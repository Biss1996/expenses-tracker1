import React from 'react'

function ExpenseTable({ expenses, onDelete, onSort }) {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th onClick={() => onSort('name')}>Expense Name</th>
          <th onClick={() => onSort('description')}>Description</th>
          <th onClick={() => onSort('category')}>Category</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.date}</td>
            <td>
              <button onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ExpenseTable
