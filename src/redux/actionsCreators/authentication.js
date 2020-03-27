import { AsyncStorage } from "react-native";
import createUser from "../../api/controllers/authentication";
import * as actions from "../actionTypesConstants";
import getAccessToken from "../../services/auth";

const clearError = () => ({
  type: actions.CLEAR_ERROR
});

export default navigation => async dispatch => {
  dispatch(clearError());
  try {
    dispatch({ type: actions.AUTHENTICATING });

    const { accessToken } = await getAccessToken();
    const profileData = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        method: "GET"
      }
    );
    const userProfile = await profileData.json();
    const {
      data: {
        createUser: { token }
      }
    } = await createUser(accessToken);

    await AsyncStorage.multiSet([
      ["token", token],
      ["userProfile", JSON.stringify(userProfile)]
    ]);

    dispatch({
      type: actions.AUTHENTICATION_SUCCESS,
      payload: { jwtToken: token }
    });
    navigation.navigate("App");
  } catch (error) {
    dispatch({
      type: actions.AUTHENTICATION_FAILURE,
      payload: "Unable to authenticate you"
    });
  }
};
