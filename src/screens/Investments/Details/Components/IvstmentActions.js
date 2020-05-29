import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useMutation } from '@apollo/react-hooks';
import { Feather } from '@expo/vector-icons';
import {
  deleteInvestmentQuery,
  getAllInvestmentsQuery
} from '../../../../api/queries/investmentQueries';

import styles from './stylesheet';

const MoreButton = props => {
  const [displayMenuBtn, setDisplayMenuBtn] = useState(false);
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
    navigate('Investments');
  };

  const handleAddExpense = () => {
    setDisplayMenuBtn(!displayMenuBtn);
    navigate('NewExpense', { id });
  };

  const handleViewExpenses = () => {
    setDisplayMenuBtn(!displayMenuBtn);
    navigate('Expenses', { id });
  };
  const promptDeleteInvestment = () => {
    Alert.alert(
      null,
      'Do you want to delete this investment?',
      [
        {
          text: 'Cancel',
          onPress: () => setDisplayMenuBtn(!displayMenuBtn),
          style: 'cancel'
        },
        { text: 'Delete', onPress: handleInvestmentDeletion }
      ],
      { cancelable: false }
    );
  };
  return (
    <View>
      {displayMenuBtn ? (
        <View style={styles.menuContainer}>
          <TouchableOpacity
            onPress={() => promptDeleteInvestment()}
            style={styles.menuItem}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleAddExpense()}
            style={styles.menuItem}
          >
            <Text>Add expenses</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleViewExpenses()}
            style={styles.menuItem}
          >
            <Text>View expenses</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => setDisplayMenuBtn(!displayMenuBtn)}
          style={styles.menuDisplay}
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
