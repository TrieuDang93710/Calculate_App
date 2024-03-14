import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";

const ResultScreen = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [textRs, setTextRs] = useState("");
  const [result, setResult] = useState(0);

  let handleCalculate = (a, b, c) => {
    const deta = b * b - 4 * a * c;

    if (deta === 0) {
      setTextRs(
        `Phương trình vơi hệ số nhập vào vô số nghiêm: ${a}x^2 + ${b}x + ${c} = 0 với nghiệm là: `
      );
      result = -b / (2 * a);
      setResult(result);
    } else {
      if (deta < 0) {
        setTextRs(
          `Phương trình vơi hệ số nhập vào vô nghiêm: ${a}x^2 + ${b}x + ${c} = 0`
        );
      } else {
        const x1 = (-Math.sqrt(deta) - b) / (2 * a);
        const x2 = (-Math.sqrt(deta) + b) / (2 * a);
        setTextRs(
          `Phương trình vơi hệ số nhập vào có hai nghiệm phân biệt: ${a}x^2 + ${b}x + ${c} = 0 với nghiệm là:  x1 = ${x1}; x2 = ${x2}`
        );
      }
    }
  };
  return (
    <View style={styles.main}>
      <View style={styles.lable_input}>
        <Text style={styles.lable}>Nhập Số a</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNumber1}
          placeholder={"Nhập Số a"}
        />
      </View>
      <View style={styles.lable_input}>
        <Text style={styles.lable}>Nhập Số b</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNumber2}
          placeholder={"Nhập Số b"}
        />
      </View>
      <View style={styles.lable_input}>
        <Text style={styles.lable}>Nhập Số c</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNumber3}
          placeholder={"Nhập Số c"}
        />
      </View>
      <Button
        title="Giải"
        onPress={() => {
          handleCalculate(number1, number2, number3);
        }}
      />
      <View style={styles.result}>
        <Text style={styles.text_result}>"{textRs}"</Text>
      </View>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "auto",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  lable_input: {
    width: "90%",
    height: "auto",
  },
  lable: {
    width: "100%",
    height: "auto",
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  result: {
    width: "100%",
    height: 80,
    marginTop: 20,
  },
  text_result: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
});
