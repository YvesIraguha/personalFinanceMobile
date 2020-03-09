import client from "../config";
import {
  createExpenseQuery,
  deleteExpenseQuery,
  editExpenseQuery,
  getAllExpensesQuery
} from "../queries/expensesQueries";

export const recordExpense = async ({ type, price }) => {
  try {
    const newExpense = await client.mutate({
      mutation: createExpenseQuery,
      variables: { type, price: parseInt(price, 10) }
    });

    return newExpense;
  } catch (error) {
    throw new Error("Error is happening");
  }
};
export const deleteExpense = async id => {
  try {
    const deletedExpense = await client.mutate({
      mutation: deleteExpenseQuery,
      variables: { id }
    });

    return deletedExpense;
  } catch (error) {
    throw new Error("Error is happening");
  }
};

export const editExpense = async ({ id, type, quantity, price }) => {
  try {
    const editedExpense = await client.mutate({
      mutation: editExpenseQuery,
      variables: {
        type,
        price: parseInt(price, 10),
        quantity: parseInt(quantity, 10),
        id
      }
    });
    return editedExpense;
  } catch (error) {
    throw new Error("Error is happening");
  }
};

export const getExpenses = async () => {
  try {
    const expenses = await client.query({
      query: getAllExpensesQuery
    });
    return expenses;
  } catch (error) {
    throw new Error("Error is happening");
  }
};
