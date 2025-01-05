import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function Login() {
  return (
    <ImageBackground
      source={require("../assets/images/background_image.jpg")}
      style={styles.backgroundImage}
    >
      <StatusBar animated={true} />
      <View style={styles.mainContainer}>
        <View
          style={{
            height: 260,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={[styles.title, { color: "#1a237e" }]}>Sign In</Text>
          <Text style={styles.desc}>Welcome back you've</Text>
          <Text style={styles.desc}>been missed!</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Account Number"
              inputMode="decimal"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </View>

        <View
          style={{
            height: 100,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Link
            href="/resetPassword"
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
              color: "#1a237e",
            }}
          >
            Forgot Password
          </Link>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 6 }}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Don't have an account?
          </Text>

          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                color: "#1a237e",
                fontWeight: "700",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)")}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                color: "#1a237e",
                fontWeight: "700",
              }}
            >
              Dashboard
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F1F4FF",
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "semibold",
  },
  button: {
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#1a237e",
    borderRadius: 10,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  desc: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
});
