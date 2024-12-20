import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <Image 
      source={require('../../assets/Diabetes.png')} // 상대 경로 확인
      style={styles.logo}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default Logo;
