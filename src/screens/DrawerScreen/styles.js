import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: { flex: 1 },
  profileAvatar: {
    height: undefined,
    aspectRatio: 1,
    borderRadius: 30,
    margin: 10,
    width: 60
  },
  profileText: { fontSize: 20, fontWeight: "500" },
  avatarContainer: {
    height: 100,
    marginTop: 30,
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center"
  },
  logoutContainer: {
    marginTop: "auto",
    marginLeft: 30,
    marginBottom: 30
  },
  logoutText: {
    fontWeight: "700",
    color: "rgba(170,52,44,0.92)",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "rgba(170,52,44,0.92)",
    marginBottom: 5,
    fontSize: 20
  }
});

export default styles;
