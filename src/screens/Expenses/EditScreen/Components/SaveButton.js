import React from "react";
import { Button } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import styles from "./styles";
import {
  editExpenseQuery,
  getAllExpensesQuery
} from "../../../../api/queries/expensesQueries";

const SaveButton = props => {
  const [editExpense, { loading }] = useMutation(editExpenseQuery, {
    update(
      cache,
      {
        data: { updateExpense }
      }
    ) {
      const { getAllExpenses } = cache.readQuery({
        query: getAllExpensesQuery
      });
      cache.writeQuery({
        query: getAllExpensesQuery,
        data: {
          getAllExpenses: getAllExpenses.map(item => {
            if (item.id === updateExpense.id) {
              return updateExpense;
            }
            return item;
          })
        }
      });
    }
  });

  const runEditExpense = async () => {
    const {
      navigation: {
        navigate,
        state: { params: expense }
      }
    } = props;
    await editExpense({
      variables: {
        ...expense,
        quantity: parseInt(expense.quantity, 10),
        price: parseInt(expense.price, 10)
      }
    });

    navigate("Expenses");
  };
  return (
    <Button
      style={styles.saveButton}
      title="Save"
      onPress={runEditExpense}
      disabled={loading}
      color={loading ? "#9be7ff" : "#64b5f6"}
    />
  );
};

export default SaveButton;
