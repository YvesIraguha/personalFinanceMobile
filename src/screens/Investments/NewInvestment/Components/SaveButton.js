import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { Button } from 'react-native';
import {
  createInvestmentQuery,
  getAllInvestmentsQuery
} from '../../../../api/queries/investmentQueries';
import uploadImage from '../../../../services/uploadImage';
import styles from './styles';

const SaveButton = props => {
  const [apiCallInProgress, setApiCall] = useState(false);
  const [recordNewInvestment, { loading }] = useMutation(
    createInvestmentQuery,
    {
      update(cache, { data: { createInvestment } }) {
        const { getAllInvestments } = cache.readQuery({
          query: getAllInvestmentsQuery
        });

        cache.writeQuery({
          query: getAllInvestmentsQuery,
          data: { getAllInvestments: [createInvestment, ...getAllInvestments] }
        });
      }
    }
  );
  const {
    navigation: {
      navigate,
      state: { params: investment }
    }
  } = props;

  const recordInvestment = async () => {
    setApiCall(true);
    const { name, initialAmount, targetAmount, matureDate, image } = investment;
    const { url: pictureUrl } = await uploadImage(image);
    recordNewInvestment({
      variables: {
        name,
        initialAmount: parseInt(initialAmount, 10),
        targetAmount: parseInt(targetAmount, 10),
        matureDate,
        pictureUrl
      }
    });
    setApiCall(false);
    navigate('Investments');
  };
  return (
    <Button
      style={styles.saveButton}
      title="Save"
      disabled={loading || apiCallInProgress}
      color={loading || apiCallInProgress ? '#9be7ff' : '#64b5f6'}
      onPress={recordInvestment}
    />
  );
};

export default SaveButton;
