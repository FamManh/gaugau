import React from "react";
import * as Notifications from "expo-notifications";
import { View, Text } from "react-native";
import { Header, Button } from "react-native-elements";
import { Heading, Page } from "../components/Page";

async function getNotificationToken() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Failed to get notification token");
      return
    }
  }
  const tokenData = await Notifications.getExpoPushTokenAsync()
  const token = tokenData.data
  console.log({token})
  return token
}

const BoyScreen = () => {
  return (
    <View>
      <Header
        centerComponent={{
          text: "Cho bạn nam 👦",
          style: {
            color: "#fff",
          },
        }}
      />
      <Page>
        <Heading>Bạn chưa có mã số, bấm để lấy mã</Heading>
        <Button title="Bấm để lấy mã số" onPress={getNotificationToken} />
      </Page>
    </View>
  );
};

export default BoyScreen;
