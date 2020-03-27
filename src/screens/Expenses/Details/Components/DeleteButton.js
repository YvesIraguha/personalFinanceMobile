import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";
import styles from "./stylesheet";
import { handleDeletingExpense } from "../../../../redux/actionsCreators/expenses";

const MoreButton = props => {
  const [displayDeleteBtn, setDisplayDeleteBtn] = useState(false);
  const {
    navigation: {
      navigate,
      state: {
        params: { id }
      }
    },
    deleteExpense
  } = props;

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
        { text: "Delete", onPress: () => deleteExpense(id, navigate) }
      ],
      { cancelable: false }
    );
  };
  return (
    <View>
      {displayDeleteBtn ? (
        <View style={styles.deleteButton}>
          <TouchableOpacity onPress={() => promptDeleteExpense()}>
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
const mapDispatchToProps = dispatch => ({
  deleteExpense: (id, navigate) => dispatch(handleDeletingExpense(id, navigate))
});

export default connect(
  null,
  mapDispatchToProps
)(MoreButton);
