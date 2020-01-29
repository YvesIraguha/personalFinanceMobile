import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import Expense from "./components/Expense";

const expenses = [
  { type: "Clothes Prosper", price: "2000Rwf", hour: "10:30PM", id: "1" },
  { type: "Clothes Bertin", price: "4500Rwf", hour: "11:30PM", id: "2" },
  { type: "Ticket Prosper", price: "30000Rwf", hour: "10:30PM", id: "3" },
  { type: "Ticket Bertin", price: "2500Rwf", hour: "11:30PM", id: "4" },
  { type: "Clothes Prosper", price: "2000Rwf", hour: "10:30PM", id: "5" },
  { type: "Clothes Bertin", price: "4500Rwf", hour: "11:30PM", id: "6" },
  { type: "Ticket Prosper", price: "30000Rwf", hour: "10:30PM", id: "7" },
  { type: "Ticket Bertin", price: "2500Rwf", hour: "11:30PM", id: "8" },
  { type: "Ticket Prosper", price: "30000Rwf", hour: "10:30PM", id: "9" },
  { type: "Ticket Bertin", price: "2500Rwf", hour: "11:30PM", id: "10" },
  { type: "Clothes Prosper", price: "2000Rwf", hour: "10:30PM", id: "11" },
  { type: "Clothes Bertin", price: "4500Rwf", hour: "11:30PM", id: "12" },
  { type: "Ticket Prosper", price: "30000Rwf", hour: "10:30PM", id: "13" },
  { type: "Ticket Bertin", price: "2500Rwf", hour: "11:30PM", id: "14" }
];

const Home = () => {
  return (
    <View style={{ justifyContent: "center" }}>
      <View style={styles.container}>
        <View style={styles.expensesContainer}>
          <View>
            <FlatList
              data={expenses}
              renderItem={({ item }) => (
                <Expense
                  price={item.price}
                  title={item.type}
                  time={item.hour}
                />
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
