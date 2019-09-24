import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchExpenses } from '../../redux/actionsCreators';
import CashFlow from './components/CashFlow';
import HeaderRight from './components/HeaderRight';
import Expense from './components/Expense';
import AddExpense from './components/AddExpense';
import NewExpense from './components/NewExpenseModal';
import Chart from './components/Chart';
import styles from './styles';
import HeaderLeft from './components/HeaderLeft';

const dummyDate = [
  { type: 'shoes', price: '300', id: '1' },
  { type: 'shoes', price: '300', id: '2' },
  { type: 'shoes', price: '300', id: '3' },
];
class Home extends Component {
  static navigationOptions = {
    title: 'mybudget',
    headerLeft: <HeaderLeft />,
    headerRight: <HeaderRight />,
  };
  // componentDidMount = () => {
  //   const { fetchExpenses } = this.props;
  //   fetchExpenses();
  // };

  render() {
    // const { expenses: { getAllExpenses = [] } = {} } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={styles.container}>
          <View style={styles.monthContainer}>
            <Text style={styles.monthText}>August 21, 2019</Text>
          </View>
          <View style={styles.cashFlowContainer}>
            <CashFlow />
          </View>
          <View style={styles.chartContainer}>
            <Chart />
          </View>
          <View style={styles.expensesContainer}>
            <Text style={styles.expensesTitle}>Expenses</Text>
            <View>
              <FlatList
                data={dummyDate}
                renderItem={({ item }) => <Expense />}
                keyExtractor={item => item.id}
              />
            </View>
            <AddExpense />
          </View>
        </View>
        <NewExpense />
      </View>
    );
  }
}
const mapStateToProps = ({ expenses }) => ({
  expenses,
});
export default connect(
  mapStateToProps,
  { fetchExpenses }
)(Home);
