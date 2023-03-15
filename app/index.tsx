import { View, Text, ViewStyle } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function Index() {
  return (
    <View style={$container}>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: "My home",
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
        }}
      />
      <Text>index</Text>

      <View style={$bgwhite}></View>
    </View>
  );
}

const $container: ViewStyle = {
  flex: 1,
  // alignItems: "center",
  // justifyContent: "center",
};

const $bgwhite: ViewStyle = {
  backgroundColor: "#fff",
  // flex: 1,
  height: "70%",
  width: "100%",
  borderTopEndRadius: 50,
  borderTopStartRadius: 50,
  flexBasis: "auto",
  // marginTop: 50,
  // marginLeft: 50,
  // marginRight: 50,
  // marginBottom: 50,
  justifyContent: "center",
  alignItems: "center",
};
