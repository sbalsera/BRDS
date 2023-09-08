import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const InputsRegularDefault = () => {
  return (
    <View style={styles.inputsregulardefault}>
      <View style={styles.inputsregulardefault1}>
        <View style={styles.bg} />
        <Text style={styles.regular}>UserID</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    height: "104.65%",
    width: "100.81%",
    top: "-2.33%",
    right: "-0.4%",
    bottom: "-2.33%",
    left: "-0.4%",
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderWidth: 1,
    position: "absolute",
    borderRadius: Border.br_9xs,
  },
  regular: {
    marginTop: -9.5,
    width: "64.52%",
    top: "50%",
    left: "4.03%",
    fontSize: FontSize.size_base,
    lineHeight: 19,
    fontFamily: FontFamily.robotoRegular,
    color: "#8898aa",
    textAlign: "left",
    position: "absolute",
  },
  inputsregulardefault1: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  inputsregulardefault: {
    backgroundColor: Color.colorWhite,
    width: 248,
    height: 43,
    borderRadius: Border.br_9xs,
  },
});

export default InputsRegularDefault;
