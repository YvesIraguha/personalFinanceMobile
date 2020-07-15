/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View,
  SectionList,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';
import { useLazyQuery } from '@apollo/react-hooks';
import { getAllInvestmentsQuery } from '../../api/queries/investmentQueries';
import { getProfileImage } from '../../helpers/utils';
import styles from './styles';
import Investment from './components/Investment';
import normalizeData from '../../helpers/normilizeData';
import AddInvestment from './components/AddInvestment';
import HeaderLeft from './components/HeaderLeft';
import FilterDateModal from './components/FilterDateModal';
import noData from '../../assets/undraw_empty_xct9.png';

const InvestmentList = props => {
  const {
    navigation: {
      state: { params: { startDate, endDate } = {} }
    }
  } = props;
  const [getInvestments, { loading, data, error }] = useLazyQuery(
    getAllInvestmentsQuery,
    {
      variables: { startDate, endDate }
    }
  );

  const [profileAvatar, setProfileAvatar] = useState(null);

  const fetchProfile = async () => {
    const { picture } = await getProfileImage();
    setProfileAvatar(picture);
  };
  useEffect(() => {
    fetchProfile();
  });

  useEffect(() => {
    getInvestments();
  }, [startDate, endDate]);

  useLayoutEffect(() => {
    const { navigation } = props;
    navigation.setParams({ profileAvatar });
  }, [profileAvatar]);

  const { navigation } = props;

  return (
    <View style={{ justifyContent: 'center' }}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : data && data.getAllInvestments.length ? (
          <View>
            <SectionList
              sections={normalizeData(data.getAllInvestments)}
              renderItem={({ item }) => (
                <Investment item={item} navigation={navigation} />
              )}
              renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        ) : (
          <View style={styles.emptyBucketContainer}>
            <Image source={noData} style={styles.empty} resizeMode="contain" />
            <Text style={styles.emptyText}>
              Investments bucket for selected date is empty
            </Text>
          </View>
        )}
      </View>

      <AddInvestment navigation={navigation} />
    </View>
  );
};

InvestmentList.navigationOptions = ({ navigation }) => ({
  title: 'INVESTMENTS',
  headerLeft: <HeaderLeft navigation={navigation} />,
  headerRight: <FilterDateModal navigation={navigation} />
});

export default InvestmentList;
