import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { Feather } from "@expo/vector-icons";
import styles from "./stylesheet";
import {
  deleteExpenseQuery,
  getAllExpensesQuery
} from "../../../../api/queries/expensesQueries";

const MoreButton = props => {
  const {
    navigation: {
      navigate,
      state: {
        params: { id }
      }
    }
  } = props;
  const [displayDeleteBtn, setDisplayDeleteBtn] = useState(false);
  const [deleteExpense, { loading }] = useMutation(deleteExpenseQuery, {
    update(cache) {
      const { getAllExpenses } = cache.readQuery({
        query: getAllExpensesQuery
      });
      cache.writeQuery({
        query: getAllExpensesQuery,
        data: {
          getAllExpenses: getAllExpenses.filter(item => item.id !== id)
        }
      });
    }
  });

  const promptDeleteExpense = () => {
    Alert.alert(
      null,
      "Do you want to delete this expense?",
      [
        {
          text: "Cancel",
          onPress: () => setDisplayDeleteBtn(!displayDeleteBtn),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => {
            navigate("Expenses");
            deleteExpense({ variables: { id } });
          }
        }
      ],
      { cancelable: false }
    );
  };
  return (
    <View>
      {displayDeleteBtn ? (
        <View style={styles.deleteButton}>
          <TouchableOpacity
            onPress={() => promptDeleteExpense()}
            disabled={loading}
            color={loading ? "#9be7ff" : "#64b5f6"}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => setDisplayDeleteBtn(!displayDeleteBtn)}
        >
          <Feather
            name="more-vertical"
            size={30}
            color="white"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MoreButton;
