import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import TypeA from "./src/screens/TypeA";
import TypeB from "./src/screens/TypeB";

export default function App() {
  const [isType, setIsType] = useState(false);

  const switchTypeA = () => {
    setIsType(true);
  };

  const switchTypeB = () => {
    setIsType(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar style={"auto"} />

      <Text style={styles.textColors}>Calculator</Text>
      <View style={styles.containerSwitch}>
        <TouchableOpacity style={styles.switchType} onPress={switchTypeA}>
          <Text style={styles.textColor}>TypeA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.switchType} onPress={switchTypeB}>
          <Text style={styles.textColor}>TypeB</Text>
        </TouchableOpacity>
      </View>

      <View>{isType ? <TypeA /> : <TypeB />}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  textColors: {
    color: "#f5f5f5",
    fontSize: 40,
  },
  textColor: {
    color: "#f5f5f5",
    fontSize: 30,
  },
  containerSwitch: {
    flexDirection: "row",
    marginBottom: 50,
  },
  switchType: {
    backgroundColor: "#663399",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
});
