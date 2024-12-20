import React, { useState } from "react";
import styled from "styled-components";
import { View, Text, TextInput } from "react-native";
import Page46_Header from "./Page46_Header";
import Page46_Contents from "./Page46_Contents";

const Container = styled.View`
  flex: 1;
  padding: 10px 15px;
  margin: 10px 5px 10px 5px;
`;
const Header = styled.View`
  flex: 0.15;
`;
const Contents = styled.View`
  flex: 0.8;
`;

const Page46 = () => {
  return (
    <Container>
      <Header>
        <Page46_Header />
      </Header>
      <Contents>
        <Page46_Contents />
      </Contents>
    </Container>
  );
};
export default Page46;
