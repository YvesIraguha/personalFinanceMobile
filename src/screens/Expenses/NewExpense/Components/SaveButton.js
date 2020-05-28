import React from 'react';

import { Button } from 'react-native';
import { useMutation } from '@apollo/react-hooks';
import styles from './styles';

import {
  createExpenseQuery,
  getAllExpensesQuery
} from '../../../../api/queries/expensesQueries';

const NewExpense = props => {
  const [recordNewExpense, { loading, error }] = useMutation(
    createExpenseQuery,
    {
      update(cache, { data: { createExpense } }) {
        const { getAllExpenses } = cache.readQuery({
          query: getAllExpensesQuery
        });
        cache.writeQuery({
          query: getAllExpensesQuery,
          data: { getAllExpenses: [createExpense, ...getAllExpenses] }
        });
      }
    }
  );
  const handleNewExpense = () => {
    const {
      navigation: {
        navigate,
        state: { params: expense }
      }
    } = props;
    recordNewExpense({
      variables: {
        type: expense.type,
        price: parseInt(expense.price, 10),
        parentId: expense.id
      }
    });
    navigate('Expenses');
  };

  return (
    <Button
      style={[styles.saveButton]}
      disabled={loading}
      color={loading ? '#9be7ff' : '#64b5f6'}
      title="Save"
      onPress={handleNewExpense}
    />
  );
};

export default NewExpense;
