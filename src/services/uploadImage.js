import { CLOUDINARY_URL, CLOUDINARY_PRESET } from "react-native-dotenv";

export default async image => {
  try {
    const data = { file: image, upload_preset: CLOUDINARY_PRESET };
    const uploadImage = await fetch(CLOUDINARY_URL, {
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    });
    const newResponse = await uploadImage.json();
    return newResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
