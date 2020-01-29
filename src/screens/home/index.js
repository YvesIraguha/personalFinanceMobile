import React from "react";
import { View, SectionList, Text } from "react-native";
import styles from "./styles";
import Expense from "./components/Expense";
import expenses from "./dummy";

const Home = () => {
  return (
    <View style={{ justifyContent: "center" }}>
      <View style={styles.container}>
        <View style={styles.expensesContainer}>
          <View>
            <SectionList
              sections={expenses}
              renderItem={({ item }) => (
                <Expense
                  price={item.price}
                  title={item.type}
                  time={item.hour}
                />
              )}
              renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
