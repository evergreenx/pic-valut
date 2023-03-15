import { View, Text, ViewStyle, TextStyle } from "react-native";
import React, { useState, useEffect } from "react";
import { Link, Stack } from "expo-router";
import { FlashList } from "@shopify/flash-list";
import { create } from "apisauce";
import {API_URL} from "@env"


const api = create({
  baseURL: "https://api.unsplash.com",
});

// api.setHeaders({
//   Authorization: "MVMKcgv8uACEYG2A5YvOx6G8cLMWb6PCs8snILpyM3Q",
// });
console.log(API_URL)


const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

const renderItem = ({ item }: any) => <Text>{item.title}</Text>;
export default function Index() {
  const [time, setTime] = useState(new Date());

  // console.log(Config.API_URL)




// console.log(process.env)

  useEffect(() => {
    api
      .get("/search/photos" , {
        
        query: 'car',
        client_id: "6BguTKo0SLW85C-gWpQsP5WGxMvtSQfDJBXZRLi0LTE",

      })
      .then((response) => {
        console.log(response);
      })
      .then((res) => {});
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
      
        {/* <Text>
        {apiUrl}
      </Text> */}

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nobis assumenda, est excepturi nihil, ducimus, architecto eaque sed ab recusandae in tempore error enim reiciendis placeat cumque. Corporis, ipsam quasi.
      </Text>
      </View>


     

      <View style={$bgwhite}>
        <FlashList
          data={DATA}
          renderItem={renderItem}
          estimatedItemSize={200}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const $container: ViewStyle = {
  flex: 1,

  backgroundColor: "green",
  // alignItems: "center",
  // justifyContent: "center",
};

const $bgwhite: ViewStyle = {
  backgroundColor: "#fff",
  // flex: 1,
  position: "absolute",
  height: "70%",
  width: "100%",

  borderTopEndRadius: 50,
  borderTopStartRadius: 50,
  flexBasis: "auto",
  marginTop: 270,
  // marginLeft: 50,
  // marginRight: 50,
  // marginBottom: 50,
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
