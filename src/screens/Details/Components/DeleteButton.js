import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Feather } from "@expo/vector-icons";
import styles from "./stylesheet";
import { handleDeletingExpense } from "../../../redux/createExpense";

const MoreButton = props => {
  const [displayDeleteBtn, setDisplayDeleteBtn] = useState(false);
  const {
    navigation: {
      state: {
        params: { id }
      }
    },
    deleteExpense
  } = props;

  return (
    <View>
      {displayDeleteBtn ? (
        <View style={styles.deleteButton}>
          <TouchableOpacity onPress={() => deleteExpense(id)}>
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
  deleteExpense: id => dispatch(handleDeletingExpense(id))
});

export default connect(
  null,
  mapDispatchToProps
)(MoreButton);
