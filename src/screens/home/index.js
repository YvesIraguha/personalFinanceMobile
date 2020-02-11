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
import { fetchExpenses } from "../../redux/actionsCreators";
import styles from "./styles";
import Expense from "./components/Expense";
import normalizeData from "../../helpers/normilizeData";
import AddExpense from "./components/AddExpense";
import HeaderLeft from "./components/HeaderLeft";
import noData from "../../assets/undraw_empty_xct9.png";
import NewExpenseModal from "./components/NewExpenseModal";

const Home = props => {
  useEffect(() => {
    const { loadExpenses } = props;
    loadExpenses();
  }, []);
  const { expenses, apiInProgress, navigation } = props;

  return (
    <View style={{ justifyContent: "center" }}>
      <View style={styles.container}>
        {apiInProgress ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : !expenses ? (
          <View style={styles.emptyContainer}>
            <Image source={noData} style={styles.empty} resizeMode="contain" />
            <Text style={styles.emptyText}>Your expenses bucket is empty</Text>
          </View>
        ) : (
          <View>
            <SectionList
              sections={normalizeData(expenses.getAllExpenses)}
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
      <AddExpense />
      <NewExpenseModal />
    </View>
  );
};

Home.navigationOptions = {
  title: "EXPENSES",
  headerLeft: <HeaderLeft />,
  headerRight: null
};

const mapStateToProps = ({ expenses, apiInProgress, newExpenseSuccess }) => ({
  expenses,
  apiInProgress,
  newExpenseSuccess
});

const mapDispatchToProps = dispatch => ({
  loadExpenses: () => dispatch(fetchExpenses())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
