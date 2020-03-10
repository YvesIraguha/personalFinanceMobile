import React, { useState } from "react";
import { View, TextInput, TouchableWithoutFeedback } from "react-native";
import { Calendar } from "react-native-calendars";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import styles from "./styles";

const DatePicker = ({
  iconName,
  value,
  onTextChange,
  editable,
  placeholder
}) => {
  const [show, setShow] = useState(false);
  const toggleModalShow = () => {
    setShow(!show);
  };

  return (
    <View style={styles.itemContainer}>
      <MaterialIcons name={iconName} size={32} style={styles.fieldICon} />
      <View style={[styles.editInput, styles.datePicker]}>
        <TextInput
          editable={editable}
          multiline
          numberOfLines={1}
          value={value}
          maxLength={40}
          style={styles.title}
          placeholder={placeholder}
        />
        <TouchableWithoutFeedback
          style={styles.pickerIconContainer}
          onPress={toggleModalShow}
        >
          <AntDesign name="caretdown" size={16} style={styles.datePickerIcon} />
        </TouchableWithoutFeedback>
      </View>
      {show && (
        <View>
          <Modal
            isVisible
            coverScreen
            backdropColor="rgba(151,127,127,0.5)"
            onBackdropPress={toggleModalShow}
          >
            <Calendar
              onDayPress={day => {
                onTextChange("matureDate", day.dateString);
                toggleModalShow();
              }}
              monthFormat="yyyy MM"
            />
          </Modal>
        </View>
      )}
    </View>
  );
};

export default DatePicker;
