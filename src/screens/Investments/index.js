/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  SectionList,
  Text,
  ActivityIndicator,
  Image,
  AsyncStorage
} from "react-native";
import { connect } from "react-redux";
import { fetchInvestments } from "../../redux/actionsCreators/investments";
import styles from "./styles";
import Investment from "./components/Investment";
import normalizeData from "../../helpers/normilizeData";
import AddInvestment from "./components/AddInvestment";
import HeaderLeft from "./components/HeaderLeft";
import FilterDateModal from "./components/FilterDateModal";
import noData from "../../assets/undraw_empty_xct9.png";

const getProfileImage = async () => {
  const profilePicture = await AsyncStorage.getItem("userProfile");
  const profile = await JSON.parse(profilePicture);
  return profile;
};
const Home = props => {
  const {
    navigation: {
      state: { params: { startDate, endDate } = {} }
    }
  } = props;
  const [profileAvatar, setProfileAvatar] = useState(null);

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

  useEffect(() => {
    const { loadInvestments } = props;
    loadInvestments(startDate, endDate);
  }, [startDate, endDate]);
  const { apiInProgress, navigation, investments } = props;

  return (
    <View style={{ justifyContent: "center" }}>
      <View style={styles.container}>
        {apiInProgress ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : investments && investments.getAllInvestments.length ? (
          <View>
            <SectionList
              sections={normalizeData(investments.getAllInvestments)}
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

Home.navigationOptions = ({ navigation }) => ({
  title: "INVESTMENTS",
  headerLeft: <HeaderLeft navigation={navigation} />,
  headerRight: <FilterDateModal navigation={navigation} />
});

const mapStateToProps = ({
  investments,
  apiInProgress,
  newExpenseSuccess
}) => ({
  investments,
  apiInProgress,
  newExpenseSuccess
});

const mapDispatchToProps = dispatch => ({
  loadInvestments: (startDate, endDate) =>
    dispatch(fetchInvestments(startDate, endDate))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
