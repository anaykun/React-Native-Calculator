import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function TypeA() {
  let [result, setResult] = useState(0);
  let [numOne, setNumOne] = useState("");
  let [numTwo, setNumTwo] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  return (
    <View>
      <View style={styles.formResult}>
        <Text style={styles.resulte}> {lastNumber}</Text>
      </View>
      <View style={styles.formResult}>
        <Text style={styles.result}> {result}</Text>
      </View>
      <View style={styles.formControl}>
        <TextInput
          style={styles.formInput}
          keyboardType="number-pad"
          value={numOne}
          onChangeText={(e) => setNumOne(e)}
        />
        <TextInput
          style={styles.formInput}
          keyboardType="number-pad"
          value={numTwo}
          onChangeText={(e) => setNumTwo(e)}
        />
      </View>
      <View style={styles.formBtn}>
        <TouchableOpacity
          style={styles.btnbtn}
          onPress={() => {
            const a = parseFloat(numOne);
            const b = parseFloat(numTwo);
            if (numOne != "" && numTwo != "") {
              setResult(a + b);
              setLastNumber(`${a} + ${b}`);
            } else if (numOne == "") {
              setResult(b);
              setLastNumber(`${b}`);
            } else if (numTwo == "") {
              setResult(a);
              setLastNumber(`${a}`);
            }
          }}
        >
          <Text style={styles.btnText}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnbtn}
          onPress={() => {
            const a = parseFloat(numOne);
            const b = parseFloat(numTwo);
            if (numOne != "" && numTwo != "") {
              setResult(a - b);
              setLastNumber(`${a} - ${b}`);
            } else if (numOne == "") {
              setResult(b);
              setLastNumber(`${b}`);
            } else if (numTwo == "") {
              setResult(a);
              setLastNumber(`${a}`);
            }
          }}
        >
          <Text style={styles.btnText}> - </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnbtn}
          onPress={() => {
            const a = parseFloat(numOne);
            const b = parseFloat(numTwo);
            if (numOne != "" && numTwo != "") {
              setResult(a * b);
              setLastNumber(`${a} x ${b}`);
            } else if (numOne == "") {
              setResult(b);
              setLastNumber(`${b}`);
            } else if (numTwo == "") {
              setResult(a);
              setLastNumber(`${a}`);
            }
          }}
        >
          <Text style={styles.btnText}> x </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnbtn}
          onPress={() => {
            const a = parseFloat(numOne);
            const b = parseFloat(numTwo);
            if (numOne != "" && numTwo != "") {
              setResult(a / b);
              setLastNumber(`${a} : ${b}`);
            } else if (numOne == "") {
              setResult(b);
              setLastNumber(`${b}`);
            } else if (numTwo == "") {
              setResult(a);
              setLastNumber(`${a}`);
            }
          }}
        >
          <Text style={styles.btnText}> : </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnbtn}
          onPress={() => {
            const a = parseFloat(numOne);
            const b = parseFloat(numTwo);
            if (numTwo == "") {
              setResult(a / 100);
              setLastNumber(`${a}/100`);
            } else {
              setResult((a / 100) * b);
              setLastNumber(`(${a}/100) x ${b}`);
            }
          }}
        >
          <Text style={styles.btnText}> % </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnbtn}
          onPress={() => {
            setNumOne("");
            setNumTwo("");
            setResult(0);
            setLastNumber("");
          }}
        >
          <Text style={styles.btnText}> C </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#000000",
  },
  formResult: {
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    padding: 10,
  },
  result: {
    color: "#663399",
    textAlign: "right",
    fontSize: 33,
    fontWeight: "bold",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  resulte: {
    color: "#483d8b",
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  formControl: {
    width: "100%",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formInput: {
    width: "50%",
    borderWidth: 1,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 24,
    padding: 10,
    color: "#663399",
    backgroundColor: "#f0fff0",
  },
  formBtn: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 0,
    marginVertical: 10,
  },
  btnbtn: {
    backgroundColor: "#f0fff0",
    width: 50,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 30,
    height: "100%",
    textAlignVertical: "center",
    color: "#663399",
    fontWeight: "bold",
  },
});
