import React, { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newExpense = {
      id: crypto.randomUUID(),
      name,
      description,
      category,
      amount,
      date
    }
    onAddExpense(newExpense)
    setName('')
    setDescription('')
    setCategory('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Expense Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter Expense Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter Expense Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Expense Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
/>
      <input
        type="date"
        placeholder='dd/mm/yyyy'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ExpenseForm
