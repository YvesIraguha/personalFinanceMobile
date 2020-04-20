import React from "react";
import { Button } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import {
  editInvestmentQuery,
  getAllInvestmentsQuery
} from "../../../../api/queries/investmentQueries";
import styles from "./styles";

const SaveButton = props => {
  const [editInvestment, { loading }] = useMutation(editInvestmentQuery, {
    update(
      cache,
      {
        data: { updateInvestment }
      }
    ) {
      const { getAllInvestments } = cache.readQuery({
        query: getAllInvestmentsQuery
      });
      cache.writeQuery({
        query: getAllInvestmentsQuery,
        data: {
          getAllInvestments: getAllInvestments.map(item => {
            if (item.id === updateInvestment.id) {
              return updateInvestment;
            }
            return item;
          })
        }
      });
    }
  });
  const {
    navigation: {
      navigate,
      state: { params: investment }
    }
  } = props;

  const handleInvestmentEditing = () => {
    const { name, initialAmount, targetAmount, id } = investment;
    editInvestment({
      variables: {
        name,
        initialAmount: parseInt(initialAmount, 10),
        targetAmount: parseInt(targetAmount, 10),
        id
      }
    });
    navigate("Investments");
  };
  return (
    <Button
      style={styles.saveButton}
      disabled={loading}
      title="Save"
      onPress={handleInvestmentEditing}
    />
  );
};

export default SaveButton;
