import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  Image,
  ImageStyle,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Link, Stack } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import { create } from "apisauce";
import { API_URL, API_KEY } from "@env";
import { getPhotos } from "../api";

const api = create({
  baseURL: "https://api.unsplash.com",
});

export default function Index() {
  const [time, setTime] = useState(new Date());
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState(2);
  const [searchQuery, setSearchQuery] = useState("book");

  useEffect(() => {
    getPhotos(searchQuery).then((res) => {
      setData(res?.data?.results);
    });
  }, [searchQuery]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formatTime = (date: Date) => {
    const daysOfWeek: string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return ` ${daysOfWeek[time.getDay()]}  ${hours}:${minutes}:${seconds}`;
  };

  const renderItem = ({ item }: any) => (
    <Image source={{ uri: item?.urls?.regular }} style={$image} />
  );

  return (
    <View style={$container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <Text style={$text}>Image Gallery</Text>
        <Text style={$time}>{formatTime(time)}</Text>
      </View>

      <View style={$bgwhite}>
        <FlashList
          data={data}
          renderItem={renderItem}
          estimatedItemSize={100}
          numColumns={columns}
          onLayout={(event) => {
            const { width } = event.nativeEvent.layout;
            const columnWidth = 200 + 10;
            const newColumns = Math.floor(width / columnWidth) || 1;
            setColumns(newColumns);
          }}
        />
      </View>
    </View>
  );
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: "#228B22",
};

const $bgwhite: ViewStyle = {
  backgroundColor: "#fff",
  position: "absolute",
  height: "70%",
  width: "100%",

  borderTopEndRadius: 50,
  borderTopStartRadius: 50,
  flexBasis: "auto",
  marginTop: 270,
  padding: 20,
};

const $text: TextStyle = {
  color: "#fff",
  fontSize: 40,
  fontWeight: "bold",
  textAlign: "center",

  paddingTop: 60,
  borderRadius: 10,
};

const $time: TextStyle = {
  color: "#fff",
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 10,
  textAlign: "center",
};

const $image: ImageStyle = {
  width: 120, // adjust image width as per your need
  height: 200, // adjust image height as per your need
  margin: 5,
  borderRadius: 10,
};
