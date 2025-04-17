import React, { useState } from 'react'
import ExpenseForm from './Components/ExpenseForm'
import ExpenseTable from './Components/ExpenseTable'
import SearchBar from './Components/SearchBar'
import './App.css'

<img src="/vite.svg" className="logo react" alt="logo" />



function App() {
  const [expenses, setExpenses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortKey, setSortKey] = useState(null)

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense])
  }

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase())
  }

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const handleSort = (key) => {
    setSortKey(key)
  }

  let filteredExpenses = expenses.filter(expense =>
    expense.name.toLowerCase().includes(searchTerm) ||
    expense.description.toLowerCase().includes(searchTerm) ||
    expense.category.toLowerCase().includes(searchTerm)
  )

  if (sortKey) {
    filteredExpenses.sort((a, b) =>
      a[sortKey].localeCompare(b[sortKey])
    )
  }

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <h3> Start taking control of your finances and life. Record, categorize and Analyze your spending.</h3>
      
      <ExpenseForm onAddExpense={handleAddExpense} />
      <SearchBar onSearch={handleSearch} />
      <ExpenseTable
        expenses={filteredExpenses}
        onDelete={handleDelete}
        onSort={handleSort}
      />
    </div>
  )
}

export default App
