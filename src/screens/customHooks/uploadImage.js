import { useEffect, useState } from 'react';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to upload images!');
      }
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true
    });
    if (result.cancelled) {
      return;
    }
    const base64Img = `data:image/jpg;base64,${result.base64}`;
    setSelectedImage(result.uri);
    setBase64Image(base64Img);
  };

  useEffect(() => {
    getPermissionAsync();
  });

  return [selectedImage, base64Image, pickImage];
};
