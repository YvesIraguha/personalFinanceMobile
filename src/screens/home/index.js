import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { fetchExpenses } from "../../redux/actionsCreators";
import { connect } from "react-redux";
import CashFlow from "./components/CashFlow";
import HeaderRight from "./components/HeaderRight";
import Expense from "./components/Expense";
import styles from "./styles";
const dummyDate = [
  { type: "shoes", price: "300", id: "1" },
  { type: "shoes", price: "300", id: "2" },
  { type: "shoes", price: "300", id: "3" }
];
class Home extends Component {
  static navigationOptions = {
    title: "mybudget",
    headerLeft: <HeaderRight />,
    headerRight: <HeaderRight />
  };
  // componentDidMount = () => {
  //   const { fetchExpenses } = this.props;
  //   fetchExpenses();
  // };

  render() {
    // const { expenses: { getAllExpenses = [] } = {} } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.monthText}>August 21, 2019</Text>
        <CashFlow />
        <View>
          <FlatList
            data={dummyDate}
            renderItem={({ item }) => <Expense />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = ({ expenses }) => ({
  expenses
});
export default connect(
  mapStateToProps,
  { fetchExpenses }
)(Home);
