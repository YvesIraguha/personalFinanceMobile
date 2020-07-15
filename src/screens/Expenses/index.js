/* eslint-disable no-nested-ternary */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  View,
  SectionList,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import styles from './styles';
import Expense from './components/Expense';
import normalizeData from '../../helpers/normilizeData';
import { getProfileImage } from '../../helpers/utils';
import AddExpense from './components/AddExpense';
import HeaderLeft from './components/HeaderLeft';
import noData from '../../assets/undraw_empty_xct9.png';

import { getAllExpensesQuery } from '../../api/queries/expensesQueries';
import { getInvestmentQuery } from '../../api/queries/investmentQueries';

const Home = props => {
  const {
    navigation: {
      state: { params }
    }
  } = props;

  const query = params && params.id ? getInvestmentQuery : getAllExpensesQuery;
  const [profileAvatar, setProfileAvatar] = useState(null);
  const { loading, data } = useQuery(query, {
    variables: { id: params && params.id ? params.id : null }
  });

  const fetchProfile = async () => {
    const { picture } = await getProfileImage();
    setProfileAvatar(picture);
  };

  useEffect(() => {
    fetchProfile();
  });

  useLayoutEffect(() => {
    const { navigation } = props;
    navigation.setParams({ profileAvatar });
  }, [profileAvatar]);

  const cleanData = () => {
    if (params && params.id) {
      return data.getInvestment.expenses;
    }
    return data.getAllExpenses;
  };
  const { navigation } = props;

  return (
    <View style={{ justifyContent: 'center' }}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : !cleanData().length ? (
          <View style={styles.emptyContainer}>
            <Image source={noData} style={styles.empty} resizeMode="contain" />
            <Text style={styles.emptyText}>Your expenses bucket is empty</Text>
          </View>
        ) : (
          <View>
            <SectionList
              sections={normalizeData(cleanData())}
              renderItem={({ item }) => (
                <Expense item={item} navigation={navigation} />
              )}
              renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        )}
      </View>
      <AddExpense navigation={navigation} />
    </View>
  );
};

Home.navigationOptions = ({ navigation }) => ({
  title: 'EXPENSES',
  headerLeft: <HeaderLeft navigation={navigation} />
});

export default Home;
