// Export a stateless functional component


// description,amount,createdAt


import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';




const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{createdAt}   for {amount} </p>

        <button onClick={() => {
            dispatch(removeExpense({ id }))
        }}>Remove </button>
    </div>
);


export default connect()(ExpenseListItem);