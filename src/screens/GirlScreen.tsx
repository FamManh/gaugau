import React from "react";
import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";
import { Header, Input, Button } from "react-native-elements";
import { Heading, Page } from "../components/Page";
import { sendPushNotification } from "../services/api";
const BoyScreen = () => {
  return (
    <View>
      <Header
        centerComponent={{
          text: "Cho bạn nữ 👧",
          style: {
            color: "#fff",
          },
        }}
      />
      <Page>
        <Input
          label="Mã số gấu"
          placeholder="Nhập mã số của gấu đực vào đây !"
        />
        <Button title="Xác nhận mã số" />
        <View
          style={{
            marginTop: 30,
          }}
        >
          <Heading>Triệu hồi gấu đực </Heading>
          <ButtonContainer>
            <SummonButton
              color="#e74c3c"
              onPress={() => sendPushNotification(TOKEN, "Hi anh yêu", "Em đói quá à!")}
            >
              <SummonButtonText>👧 Em đói quá</SummonButtonText>
            </SummonButton>
            <SummonButton color="#2980b9"
              onPress={() => sendPushNotification(TOKEN, "Hi anh yêu", "Thèm trà sữa quá ahuhu!")}
              >
              <SummonButtonText>👧 Thèm trà sữa</SummonButtonText>
            </SummonButton>
            <SummonButton color="#2ecc71"
              onPress={() => sendPushNotification(TOKEN, "Hi anh yêu", "Nhớ anh quá hix")}
              >
              <SummonButtonText>👧 Nhớ anh quá</SummonButtonText>
            </SummonButton>
            <SummonButton color="#f1c40f"
              onPress={() => sendPushNotification(TOKEN, "Hi anh yêu", "Gọi em nhé muahaha!")}
              >
              <SummonButtonText>👧 Gọi em nhé</SummonButtonText>
            </SummonButton>
          </ButtonContainer>
        </View>
      </Page>
    </View>
  );
};

const TOKEN = "ExponentPushToken[UOqhfxIVfVEFR7WNd4rNQe]";

const ButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SummonButton = styled(TouchableOpacity)<{ color?: string }>`
  background-color: ${(p) => p.color || "red"};
  flex: 48% 0 0;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: center;
  color: white;
`;

const SummonButtonText = styled(Text)`
  color: white;
  font-size: 18px;
`;

export default BoyScreen;

// ios:   "ExponentPushToken[Twiaf4HvIjQl3VACmZqDYW]"
// ad: "ExponentPushToken[UOqhfxIVfVEFR7WNd4rNQe]"
