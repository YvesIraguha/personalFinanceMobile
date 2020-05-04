import { useState, useEffect } from 'react';
import { Keyboard, Platform } from 'react-native';

const IMAGE_HEIGHT = 400;
const IMAGE_HEIGHT_SMALL = 100;
export default () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [editButtonStyles, setEditButtonStyles] = useState({
    iconSize: 52,
    height: 100,
    width: 100,
    borderRadius: 50
  });
  const [imageHeight, setImageHeight] = useState(IMAGE_HEIGHT);
  const keyboardWillShow = (event) => {
    setKeyboardHeight(event.endCoordinates.height);
    setImageHeight(IMAGE_HEIGHT_SMALL);
    setEditButtonStyles({
      iconSize: 32,
      height: 50,
      width: 50,
      borderRadius: 25
    });
  };

  const keyboardWillHide = () => {
    setKeyboardHeight(0);
    setImageHeight(IMAGE_HEIGHT);
    setEditButtonStyles({
      iconSize: 52,
      height: 100,
      width: 100,
      borderRadius: 50
    });
  };
  useEffect(() => {
    const showKeyboard =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideKeyboard =
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
    const keyboardWillShowSub = Keyboard.addListener(
      showKeyboard,
      keyboardWillShow
    );
    const keyboardWillHideSub = Keyboard.addListener(
      hideKeyboard,
      keyboardWillHide
    );
    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  }, []);

  return [imageHeight, keyboardHeight, editButtonStyles];
};
