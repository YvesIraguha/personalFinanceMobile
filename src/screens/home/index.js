import React, { useEffect } from "react";
import { View, SectionList, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { fetchExpenses } from "../../redux/actionsCreators";
import styles from "./styles";
import Expense from "./components/Expense";
import normalizeData from "../../helpers/normilizeData";
import AddExpense from "./components/AddExpense";
import HeaderLeft from "./components/HeaderLeft";

const Home = props => {
  useEffect(() => {
    const { loadExpenses } = props;
    loadExpenses();
  });
  const { expenses } = props;
  return (
    <View style={{ justifyContent: "center" }}>
      <View style={styles.container}>
        <View style={styles.expensesContainer}>
          {expenses ? (
            <View>
              <SectionList
                sections={normalizeData(expenses.getAllExpenses)}
                renderItem={({ item }) => (
                  <Expense
                    price={item.price}
                    title={item.type}
                    time={item.createdAt}
                  />
                )}
                renderSectionHeader={({ section }) => (
                  <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </View>
      </View>
      <AddExpense />
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
