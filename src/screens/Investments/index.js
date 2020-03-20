/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import {
  View,
  SectionList,
  Text,
  ActivityIndicator,
  Image
} from "react-native";
import { connect } from "react-redux";
import { fetchInvestments } from "../../redux/actionsCreators";
import styles from "./styles";
import Investment from "./components/Investment";
import normalizeData from "../../helpers/normilizeData";
import AddInvestment from "./components/AddInvestment";
import HeaderLeft from "./components/HeaderLeft";
import noData from "../../assets/undraw_empty_xct9.png";

const Home = props => {
  useEffect(() => {
    const { loadInvestments } = props;
    loadInvestments();
  }, []);
  const { apiInProgress, navigation, investments } = props;

  return (
    <View style={{ justifyContent: "center" }}>
      <View style={styles.container}>
        {apiInProgress ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : !investments ? (
          <View style={styles.emptyContainer}>
            <Image source={noData} style={styles.empty} resizeMode="contain" />
            <Text style={styles.emptyText}>
              Your investment bucket is empty
            </Text>
          </View>
        ) : (
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
        )}
      </View>
      <AddInvestment navigation={navigation} />
    </View>
  );
};

Home.navigationOptions = ({ navigation }) => ({
  title: "INVESTMENTS",
  headerLeft: <HeaderLeft navigation={navigation} />,
  headerRight: null
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
  loadInvestments: () => dispatch(fetchInvestments())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
