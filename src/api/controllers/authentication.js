import client from "../config";
import createUserQuery from "../queries/authenticationQueries";

export default async accessToken => {
  try {
    const createUser = await client.mutate({
      mutation: createUserQuery,
      variables: { accessToken }
    });

    return createUser;
  } catch (error) {
    throw new Error("Error is happening");
  }
};
