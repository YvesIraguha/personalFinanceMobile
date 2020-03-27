import { CLOUDINARY_URL, CLOUDINARY_PRESET } from "react-native-dotenv";
import {
  createInvestmentQuery,
  editInvestmentQuery,
  deleteInvestmentQuery,
  getAllInvestmentsQuery
} from "../queries/investmentQueries";
import client from "../config";

export const recordInvestment = async ({
  image,
  name,
  initialAmount,
  targetAmount,
  matureDate
}) => {
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
    const newInvestment = await client.mutate({
      mutation: createInvestmentQuery,
      variables: {
        name,
        initialAmount: parseInt(initialAmount, 10),
        targetAmount: parseInt(targetAmount, 10),
        matureDate,
        pictureUrl: newResponse.url
      }
    });
    return newInvestment;
  } catch (error) {
    throw new Error("Error is happening");
  }
};

export const editInvestment = async ({
  id,
  name,
  initialAmount,
  targetAmount
}) => {
  try {
    const editedInvestment = await client.mutate({
      mutation: editInvestmentQuery,
      variables: {
        name,
        initialAmount: parseInt(initialAmount, 10),
        targetAmount: parseInt(targetAmount, 10),
        id
      }
    });
    return editedInvestment;
  } catch (error) {
    throw new Error("Error is happening");
  }
};

export const deleteInvestment = async id => {
  try {
    const deletedInvestment = await client.mutate({
      mutation: deleteInvestmentQuery,
      variables: { id }
    });

    return deletedInvestment;
  } catch (error) {
    throw new Error("Error is happening");
  }
};

export const getInvestments = async (firstDate, secondDate) => {
  try {
    const startDate = firstDate
      ? new Date(firstDate).getTime().toString()
      : null;
    const endDate = secondDate
      ? new Date(secondDate).getTime().toString()
      : null;
    const investments = await client.query({
      query: getAllInvestmentsQuery,
      variables: {
        startDate,
        endDate
      }
    });
    return investments;
  } catch (error) {
    throw new Error(error.message);
  }
};
