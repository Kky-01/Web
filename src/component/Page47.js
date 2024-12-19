import React from "react";
import styled from "styled-components";
import { Text, StyleSheet } from "react-native";
import Page47_TopContents from "./Page47_TopContents";
import Page47_BottomContents from "./Page47_BottomContents";

const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
  margin: 110px 5px 10px 5px;
`;
const TopContents = styled.View`
  flex: 0.5;
  margin-bottom: 10;
`;
const BottomContents = styled.View`
  flex: 0.4;
  margin-bottom: 5;
`;

const Page47 = () => {
  return (
    <Container>
      <Text style={styles.contentsHeader}>▶ 당뇨예방밥상 기억하기</Text>
      <TopContents>
        <Page47_TopContents />
      </TopContents>
      <BottomContents>
        <Page47_BottomContents />
      </BottomContents>
      <Text>
        ▶
        <Text style={{ color: "#b90000", fontWeight: "bold" }}>
          음식과 그 자리
        </Text>
        를 기억해 주세요.
      </Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentsHeader: {
    backgroundColor: "#e6f300",
    opacity: 0.4,
    width: 170,
    marginBottom: 5,
    borderRadius: 8,
    textAlign: "center",
  },
});

export default Page47;
