import React from "react";
import AwesomeButton from "react-native-really-awesome-button/src/themes/bruce";
// import AwesomeButton from "../../src/themes/bruce";
import Example from "../example";

function example() {
  return <Example ButtonComponent={AwesomeButton} />;
}

example.navigationOptions = ({ navigation }) => {
  return {
    title: "Bruce Theme",
    headerStyle: {
      backgroundColor: "#2f2f2f"
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    headerRight: (
      <AwesomeButton
        size="small"
        type="flat"
        backgroundActive="rgba(0,0,0,0)"
        activeOpacity={0.5}
        width={80}
        onPress={() => navigation.navigate("Theme3")}
        textColor="#FFF"
      >
        Next
      </AwesomeButton>
    ),
    headerLeft: (
      <AwesomeButton
        size="small"
        type="flat"
        backgroundActive="rgba(0,0,0,0)"
        activeOpacity={0.5}
        textColor="#FFF"
        width={80}
        onPress={() => navigation.goBack()}
      >
        Back
      </AwesomeButton>
    )
  };
};

export default example;
