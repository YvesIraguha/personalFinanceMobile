import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import styles from "./styles";
import StartEndDatePicker from "./StartEndDatePicker";

const FilterDatePicker = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const toggleModalShow = () => {
    setShow(!show);
  };

  return (
    <View>
      {show ? (
        <View>
          <Modal
            isVisible={show}
            coverScreen
            backdropColor="rgba(151,127,127,1)"
            onBackdropPress={toggleModalShow}
          >
            <View style={styles.filterContainer}>
              <StartEndDatePicker
                value={startDate}
                placeholder="Pick start date"
                onDateChange={setStartDate}
              />
              <StartEndDatePicker
                value={endDate}
                minDate={startDate}
                placeholder="Pick end date"
                onDateChange={setEndDate}
              />
              <View style={styles.btns}>
                <TouchableOpacity
                  style={styles.filterBtn}
                  onPress={() => {
                    navigation.navigate("Investments", { startDate, endDate });
                    toggleModalShow();
                  }}
                >
                  <Text style={styles.filterText}>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.filterBtn, styles.clearButton]}
                  onPress={() => {
                    setStartDate(null);
                    setEndDate(null);
                    navigation.navigate("Investments", {
                      startDate: null,
                      endDate: null
                    });
                    toggleModalShow();
                  }}
                >
                  <Text style={styles.filterText}>Clear</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <TouchableOpacity onPress={() => toggleModalShow()}>
          <MaterialCommunityIcons
            name="calendar-range"
            size={30}
            style={styles.calendarIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FilterDatePicker;
