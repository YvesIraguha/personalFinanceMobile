import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { Feather } from "@expo/vector-icons";
import {
  deleteInvestmentQuery,
  getAllInvestmentsQuery
} from "../../../../api/queries/investmentQueries";

import styles from "./stylesheet";

const MoreButton = props => {
  const [displayDeleteBtn, setDisplayDeleteBtn] = useState(false);
  const [deleteInvestment, { loading }] = useMutation(deleteInvestmentQuery, {
    update(cache) {
      const { getAllInvestments } = cache.readQuery({
        query: getAllInvestmentsQuery
      });
      cache.writeQuery({
        query: getAllInvestmentsQuery,

        data: {
          getAllInvestments: getAllInvestments.filter(item => item.id !== id)
        }
      });
    }
  });

  const {
    navigation: {
      navigate,
      state: {
        params: { id }
      }
    }
  } = props;

  const handleInvestmentDeletion = () => {
    deleteInvestment({ variables: { id } });
    navigate("Investments");
  };
  const promptDeleteInvestment = () => {
    Alert.alert(
      null,
      "Do you want to delete this investment?",
      [
        {
          text: "Cancel",
          onPress: () => setDisplayDeleteBtn(!displayDeleteBtn),
          style: "cancel"
        },
        { text: "Delete", onPress: handleInvestmentDeletion }
      ],
      { cancelable: false }
    );
  };
  return (
    <View>
      {displayDeleteBtn ? (
        <View style={styles.deleteButton}>
          <TouchableOpacity onPress={() => promptDeleteInvestment()}>
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
