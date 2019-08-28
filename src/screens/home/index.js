import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { fetchExpenses } from "../../redux/actionsCreators";
import { connect } from "react-redux";
class Home extends Component {
  componentDidMount = () => {
    const { fetchExpenses } = this.props;
    fetchExpenses();
  };

  render() {
    const { expenses: { getAllExpenses = [] } = {} } = this.props;
    return (
      <View
        style={{
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FlatList
          data={[...getAllExpenses]}
          renderItem={({ item }) => <Text>{item.type}</Text>}
          keyExtractor={item => item.id}
        />
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
