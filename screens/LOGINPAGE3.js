import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableHighlight,
  TextInput,
  ImageBackground,
} from "react-native";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const LOGINPAGE3 = () => {
  return (
    <View style={styles.loginPage3}>
      <Image
        style={styles.backgroundPhotoIcon}
        resizeMode="cover"
        source={require("../assets/background-photo.png")}
      />
      <View style={styles.scrimWrapper}>
        <Image
          style={styles.scrimIcon}
          resizeMode="cover"
          source={require("../assets/scrim transparent.png")}
        />
      </View>
      <Pressable style={[styles.button, styles.buttonSpaceBlock]}>
        <TouchableHighlight
          style={[styles.button1, styles.button1Layout]}
          underlayColor="rgba(255, 255, 255, 0.5)"
          onPress={() => {}}
        >
          <>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
            <Text style={styles.button2}>LOGIN</Text>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </>
        </TouchableHighlight>
      </Pressable>
      <View style={[styles.button3, styles.buttonSpaceBlock]}>
        <Pressable style={styles.buttonsidebarwithArrow}>
          <TouchableHighlight
            style={styles.examples}
            underlayColor="#79b136"
            activeOpacity={0.5}
            onPress={() => {}}
          >
            <>
              <Text style={[styles.text, styles.textTypo]}>
                Forgot Password?
              </Text>
              <View style={styles.icon}>
                <View style={styles.ungroup}>
                  <Image
                    style={[styles.pathIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/path.png")}
                  />
                  <View style={[styles.rectangle, styles.rectanglePosition]} />
                </View>
              </View>
              <Image
                style={[styles.arrowIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/arrow1.png")}
              />
            </>
          </TouchableHighlight>
        </Pressable>
      </View>
      <View style={styles.behavioralReportingDevelopWrapper}>
        <Text style={styles.behavioralReportingContainer} numberOfLines={4}>
          <Text style={styles.behavioralReportingContainer1}>
            <Text style={[styles.b, styles.bTypo]}>B</Text>
            <Text style={styles.ehavioral}>
              <Text style={styles.ehavioral1}>ehavioral</Text>
              <Text style={styles.bTypo}>{` 
 `}</Text>
            </Text>
            <Text style={styles.bTypo}>
              <Text style={styles.r1}>R</Text>
            </Text>
            <Text style={styles.ehavioral}>
              <Text style={styles.ehavioral1}>{`eporting &
`}</Text>
              <Text style={styles.bTypo}>{`  `}</Text>
            </Text>
            <Text style={styles.bTypo}>
              <Text style={styles.r1}>D</Text>
            </Text>
            <Text style={styles.ehavioral}>
              <Text style={styles.ehavioral1}>{`evelopment 
`}</Text>
              <Text style={styles.bTypo}>{`   `}</Text>
            </Text>
            <Text style={styles.bTypo}>
              <Text style={styles.r1}>S</Text>
            </Text>
            <Text style={styles.ystem}>ystem</Text>
          </Text>
        </Text>
      </View>
      <View
        style={[
          styles.inputsregulardefaultWrapper,
          styles.inputsregulardefaultPosition,
        ]}
      >
        <View style={[styles.inputsregulardefault, styles.button1Layout]}>
          <View
            style={[styles.inputsregulardefault1, styles.rectanglePosition]}
          >
            <View style={[styles.bg, styles.bgBorder]} />
            <TextInput
              style={[styles.regular, styles.textPosition]}
              placeholder="  Password"
              placeholderTextColor="#565656"
            />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.inputsregulardefaultContainer,
          styles.inputsregulardefaultPosition,
        ]}
      >
        <View style={[styles.inputsregulardefault, styles.button1Layout]}>
          <View
            style={[styles.inputsregulardefault1, styles.rectanglePosition]}
          >
            <View style={[styles.bg, styles.bgBorder]} />
            <TextInput
              style={[styles.regular, styles.textPosition]}
              placeholder="UserID"
              placeholderTextColor="#565656"
            />
          </View>
        </View>
      </View>
      <View style={styles.welcomeWrapper}>
        <Text style={[styles.welcome, styles.textTypo]}>WELCOME</Text>
      </View>
      <View style={styles.logoWrapper}>
        <ImageBackground
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSpaceBlock: {
    padding: Padding.p_5xs,
    position: "absolute",
  },
  button1Layout: {
    height: 43,
    width: 248,
    borderRadius: Border.br_9xs,
  },
  vectorIconLayout: {
    height: 9,
    width: 9,
    display: "none",
  },
  textTypo: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    color: Color.colorWhite,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  bTypo: {
    fontFamily: FontFamily.amaticSCBold,
    fontWeight: "700",
  },
  inputsregulardefaultPosition: {
    left: 84,
    position: "absolute",
  },
  bgBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  textPosition: {
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    top: "50%",
    position: "absolute",
  },
  backgroundPhotoIcon: {
    width: 1194,
    zIndex: 0,
    height: 834,
  },
  scrimIcon: {
    width: 476,
    undefined: "",
    height: 834,
  },
  scrimWrapper: {
    top: 0,
    left: 0,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon: {
    display: "none",
  },
  button2: {
    fontSize: 20,
    lineHeight: 20,
    fontFamily: FontFamily.robotoBold,
    marginLeft: 5,
    textAlign: "center",
    color: Color.colorWhite,
    fontWeight: "700",
  },
  vectorIcon1: {
    marginLeft: 5,
    display: "none",
  },
  button1: {
    borderColor: Color.colorWhite,
    paddingLeft: Padding.p_6xs,
    paddingTop: Padding.p_8xs,
    paddingRight: Padding.p_8xs,
    paddingBottom: Padding.p_9xs,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    overflow: "hidden",
  },
  button: {
    top: 502,
    left: 76,
    zIndex: 2,
  },
  text: {
    width: "85.53%",
    lineHeight: 19,
    opacity: 0.5,
    textAlign: "left",
    fontSize: FontSize.size_base,
    marginTop: -9.5,
    top: "50%",
    position: "absolute",
    left: "0%",
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
  },
  pathIcon: {
    top: "30%",
    left: "30%",
    bottom: "0%",
    width: "70%",
    height: "70%",
  },
  rectangle: {
    right: "30%",
    bottom: "30%",
    borderColor: Color.colorTomato,
    width: "70%",
    height: "70%",
    borderWidth: 1,
    borderStyle: "solid",
  },
  ungroup: {
    height: "50%",
    width: "50%",
    top: "25%",
    right: "25%",
    bottom: "25%",
    left: "25%",
    position: "absolute",
  },
  icon: {
    height: "168.42%",
    width: "18.48%",
    top: "-31.58%",
    right: "104.54%",
    bottom: "-36.84%",
    left: "-23.03%",
    display: "none",
    position: "absolute",
  },
  arrowIcon: {
    height: "73.68%",
    width: "8.09%",
    top: "10.53%",
    bottom: "15.79%",
    left: "91.91%",
  },
  examples: {
    marginTop: -10,
    width: "81.28%",
    left: "18.72%",
    height: 19,
    right: "0%",
    top: "50%",
    position: "absolute",
  },
  buttonsidebarwithArrow: {
    width: 187,
    height: 32,
  },
  button3: {
    top: 598,
    left: 40,
    zIndex: 3,
  },
  b: {
    fontSize: FontSize.size_46xl,
  },
  ehavioral1: {
    fontFamily: FontFamily.amaticSCRegular,
  },
  ehavioral: {
    fontSize: FontSize.size_39xl,
  },
  r1: {
    fontSize: FontSize.size_46xl,
  },
  ystem: {
    fontFamily: FontFamily.amaticSCRegular,
    fontSize: FontSize.size_39xl,
  },
  behavioralReportingContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  behavioralReportingContainer: {
    lineHeight: 58,
    color: Color.green1Primary,
    display: "flex",
    alignItems: "flex-end",
    width: 323,
    height: 252,
    textAlign: "left",
  },
  behavioralReportingDevelopWrapper: {
    top: 1,
    left: 871,
    zIndex: 4,
    flexDirection: "row",
    position: "absolute",
  },
  bg: {
    height: "104.65%",
    width: "100.81%",
    top: "-2.33%",
    right: "-0.4%",
    bottom: "-2.33%",
    left: "-0.4%",
    borderColor: Color.colorSilver,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    position: "absolute",
  },
  regular: {
    width: "64.52%",
    left: "4.03%",
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_base,
    marginTop: -9.5,
  },
  inputsregulardefault1: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  inputsregulardefault: {
    backgroundColor: Color.colorWhite,
  },
  inputsregulardefaultWrapper: {
    top: 414,
    zIndex: 5,
  },
  inputsregulardefaultContainer: {
    top: 318,
    zIndex: 6,
  },
  welcome: {
    fontSize: 32,
    letterSpacing: 5,
    lineHeight: 20,
    textAlign: "center",
  },
  welcomeWrapper: {
    top: 252,
    left: 115,
    zIndex: 7,
    flexDirection: "row",
    position: "absolute",
  },
  logoIcon: {
    width: 152,
    height: 122,
  },
  logoWrapper: {
    top: 35,
    left: 128,
    zIndex: 8,
    position: "absolute",
  },
  loginPage3: {
    flex: 1,
    overflow: "hidden",
    height: 834,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LOGINPAGE3;
