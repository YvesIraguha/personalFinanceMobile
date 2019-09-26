import React, { Component } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import Toast from "react-native-easy-toast";
import { connect } from "react-redux";
import { fetchExpenses } from "../../redux/actionsCreators";
import CashFlow from "./components/CashFlow";
import HeaderRight from "./components/HeaderRight";
import Expense from "./components/Expense";
import AddExpense from "./components/AddExpense";
import NewExpense from "./components/NewExpenseModal";
import Chart from "./components/Chart";
import styles from "./styles";
import HeaderLeft from "./components/HeaderLeft";

class Home extends Component {
  static navigationOptions = {
    title: "mybudget",
    headerLeft: <HeaderLeft />,
    headerRight: <HeaderRight />
  };

  state = {
    bgColor: "white"
  };

  componentDidMount = () => {
    const { fetchExpenses } = this.props;
    fetchExpenses();
  };

  _renderActivityIndicator = () => {
    const { apiInProgress } = this.props;
    const Indicator = apiInProgress ? (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" color="brown" />
      </View>
    ) : null;

    return Indicator;
  };

  _renderToast = message => {
    this.refs.toast.show(message, DURATION.LENGTH_LONG);
  };

  render() {
    const { expenses: { getAllExpenses = [] } = {} } = this.props;
    const { bgColor } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Toast
          ref="toast"
          style={{ backgroundColor: bgColor, marginTop: 20 }}
          position="top"
        />
        <View style={styles.container}>
          <View style={styles.monthCashIndicatorContainer}>
            <View style={styles.monthCashContainer}>
              <View style={styles.monthContainer}>
                <Text style={styles.monthText}>August 21, 2019</Text>
              </View>
              <View style={styles.cashFlowContainer}>
                <CashFlow />
              </View>
            </View>
            {this._renderActivityIndicator()}
          </View>
          <View style={styles.chartContainer}>
            <Chart />
          </View>
          <View style={styles.expensesContainer}>
            <Text style={styles.expensesTitle}>Expenses</Text>
            <AddExpense />
            <View>
              <FlatList
                data={getAllExpenses}
                renderItem={({ item }) => (
                  <Expense price={item.price} title={item.type} />
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </View>
        <NewExpense />
      </View>
    );
  }
}
const mapStateToProps = ({ expenses, apiInProgress, newExpenseSuccess }) => ({
  expenses,
  apiInProgress,
  newExpenseSuccess
});
export default connect(
  mapStateToProps,
  { fetchExpenses }
)(Home);
