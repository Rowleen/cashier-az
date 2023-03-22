import React from "react";
import { View, Text } from "react-native";
import styles from "./Main.styles";

const Main: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Hello world!</Text>
    </View>
  );
};

export default Main;
