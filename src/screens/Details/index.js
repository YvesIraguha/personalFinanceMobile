import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { connect } from "react-redux";
import imageUrl from "../../assets/profile.jpg";
import Item from "./Components/Item";

export const Details = props => {
  const { title, price } = props.navigation.state.params;

  return (
    <View>
      <ImageBackground
        source={imageUrl}
        imageStyle={{
          height: "100%",
          opacity: 0.6
        }}
        style={{
          width: "100%",
          marginTop: 20,
          backgroundColor: "rgb(0,0,0)",
          justifyContent: "flex-end",
          height: "60%"
        }}
      >
        <Text
          style={{
            color: "white",
            margin: 20,
            fontSize: 24,
            fontWeight: "600"
          }}
        >
          {title}
        </Text>
      </ImageBackground>
      <View style={{ height: "40%" }}>
        {/* <Item title="Date" value={date} /> */}
        <Item title="Price" value={price} />
        {/* <Item title="Quantity" value={quantity} /> */}
      </View>
    </View>
  );
};

Details.navigationOptions = {
  headerTransparent: true
};
const mapStateToProps = state => ({ state });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
