import React, { useState } from "react";
import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import { Calendar } from "react-native-calendars";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import styles from "./styles";

export default ({ placeholder, value, onDateChange, minDate }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <View>
      <View style={[styles.dateInput, styles.datePicker]}>
        <TextInput
          multiline
          editable={false}
          numberOfLines={1}
          value={value}
          style={styles.input}
          maxLength={40}
          placeholder={placeholder}
        />
        <TouchableWithoutFeedback
          style={styles.pickerIconContainer}
          onPress={toggleCalendar}
        >
          <AntDesign name="caretdown" size={16} style={styles.datePickerIcon} />
        </TouchableWithoutFeedback>
      </View>

      {showCalendar ? (
        <Modal isVisible={showCalendar}>
          <Calendar
            onDayPress={day => {
              onDateChange(day.dateString);
              toggleCalendar();
            }}
            minDate={minDate}
            monthFormat="yyyy MM"
          />
        </Modal>
      ) : null}
    </View>
  );
};
